<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Kelompok;
use App\Models\Tugas;
use App\Models\TugasAnswer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class TugasAnswerGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kelompoks = Kelompok::with(['tugases.answers'])->get();

        $answers = TugasAnswer::all();

        return Inertia::render('Guru/TugasAnswer/TugasAnswerIndex', compact('kelompoks', 'answers'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tugases = Tugas::where('kelompok_id', $id)->with(['answers', 'kelompoks'])->get();

        $kelompoks = Kelompok::where('id', $id)->first();

        $users = User::where('kelompok_id', $id)->get();

        return Inertia::render('Guru/TugasAnswer/TugasAnswerShow', compact('tugases', 'kelompoks', 'users'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $answers = TugasAnswer::where('id', $id)->with(['tugas'])->first();

        return Inertia::render('Guru/TugasAnswer/TugasAnswerEdit', compact('answers'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $answers = TugasAnswer::find($id);

        $validator = Validator::make($request->all(), [
            'grade_category' => 'required|string|in:A,B,C,D,E',
            'feedback' => 'required|string',
        ], [
            'nilai.numeric' => 'Nilai harus berupa angka',
            'grade_category.required' => 'Kategori nilai tidak boleh kosong',
            'grade_category.string' => 'Kategori nilai harus berupa teks',
            'grade_category.in' => 'Kategori nilai berupa A, B, C, D, E',
            'feedback.required' => 'Feedback tidak boleh kosong',
            'feedback.string' => 'Feedback harus berupa teks',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }



        $nilaiPersiapan = $request->input('nilaiPersiapan');
        $nilaiProses = $request->input('nilaiProses');
        $nilaiWaktu = $request->input('nilaiWaktu');
        $nilaiHasil = $request->input('nilaiHasil');
        $nilaiPenutup = $request->input('nilaiPenutup');

        $totalGrade = (($nilaiPersiapan + $nilaiProses + $nilaiWaktu + $nilaiHasil + $nilaiPenutup) / 25) * 100;




        $answerUpdate = [
            'nilaiPersiapan' => $nilaiPersiapan,
            'nilaiProses' => $nilaiProses,
            'nilaiWaktu' => $nilaiWaktu,
            'nilaiHasil' => $nilaiHasil,
            'nilaiPenutup' => $nilaiPenutup,
            'grade' => $totalGrade,
            'grade_category' => $request->input('grade_category'),
            'feedback' => $request->input('feedback'),
        ];

        $answers->update($answerUpdate);

        return to_route('tugas-answer-guru.edit', $id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function jawabanSiswa(string $id)
    {
        $kelompoks = Kelompok::all();

        $answers = TugasAnswer::where('tugas_id', $id)->with(['tugas', 'users.kelompoks'])->get();

        return Inertia::render('Guru/TugasAnswer/TugasAnswerJawabanSiswa', compact('kelompoks', 'answers'));
    }
}

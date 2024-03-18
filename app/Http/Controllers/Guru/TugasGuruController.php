<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Kelompok;
use App\Models\Tugas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class TugasGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tugases = Tugas::with(['kelompoks'])->get();

        $kelompoks = Kelompok::with(['tugases.answers'])->get();

        return Inertia::render('Guru/Tugas/TugasIndex', compact('tugases', 'kelompoks'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $kelompoks = Kelompok::all();

        return Inertia::render('Guru/Tugas/TugasCreate', compact('kelompoks'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'kelompok_id' => 'required',
            'is_active' => 'required',
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'deadline_date' => 'required|date' ,
            'deadline_time' => 'required' ,
            'question_1' => 'required',
            'question_2' => 'required',
            'question_3' => 'required'
        ], [
            'kelompok_id.required' => 'Kelompok harus dipilih',
            'is_active.required' => 'Status kelompok harus dipilih',
            'name.required' => 'Nama tidak boleh kosong',
            'name.string' => 'Nama harus berupa teks',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter',
            'description.required' => 'Deskripsi tidak boleh kosong',
            'description.string' => 'Deskripsi harus berupa teks',
            'deadline_date.required' => 'Tanggal deadline tidak boleh kosong',
            'deadline_date.date' => 'Tanggal deadline harus berupa tanggal',
            'deadline_time.required' => 'Waktu deadline tidak boleh kosong',
            'question_1.required' => 'Pertanyaan 1 tidak boleh kosong',
            'question_2.required' => 'Pertanyaan 2 tidak boleh kosong',
            'question_3.required' => 'Pertanyaan 3 tidak boleh kosong',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        Tugas::create([
            'kelompok_id' => $request->input('kelompok_id'),
            'is_active' => $request->input('is_active'),
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'deadline_date' => $request->input('deadline_date'),
            'deadline_time' => $request->input('deadline_time'),
            'question_1' => $request->input('question_1'),
            'question_2' => $request->input('question_2'),
            'question_3' => $request->input('question_3'),
        ]);

        return to_route('tugas-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $tugases = Tugas::where('id', $id)->with(['answers', 'kelompoks'])->first();

        $kelompoks = Kelompok::all();
        
        return Inertia::render('Guru/Tugas/TugasEdit', compact('tugases', 'kelompoks'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $tugases = Tugas::find($id);
        
        $validator = Validator::make($request->all(), [
            'kelompok_id' => 'required',
            'is_active' => 'required',
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'deadline_date' => 'required|date' ,
            'deadline_time' => 'required' ,
            'question_1' => 'required',
            'question_2' => 'required',
            'question_3' => 'required'
        ], [
            'kelompok_id.required' => 'Kelompok harus dipilih',
            'is_active.required' => 'Status kelompok harus dipilih',
            'name.required' => 'Nama tidak boleh kosong',
            'name.string' => 'Nama harus berupa teks',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter',
            'description.required' => 'Deskripsi tidak boleh kosong',
            'description.string' => 'Deskripsi harus berupa teks',
            'name.string' => 'Deskripsi harus berupa teks',
            'deadline_date.required' => 'Tanggal deadline tidak boleh kosong',
            'deadline_date.date' => 'Tanggal deadline harus berupa tanggal',
            'deadline_time.required' => 'Waktu deadline tidak boleh kosong',
            'question_1.required' => 'Pertanyaan 1 tidak boleh kosong',
            'question_2.required' => 'Pertanyaan 2 tidak boleh kosong',
            'question_3.required' => 'Pertanyaan 3 tidak boleh kosong',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $tugasesUpdate = $request->all();

        $tugases->update($tugasesUpdate);

        return to_route('tugas-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tugases = Tugas::find($id);

        $tugases->delete();

        return to_route('tugas-guru.index');
    }
}

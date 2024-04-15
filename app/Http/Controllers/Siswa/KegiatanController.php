<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Kegiatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class KegiatanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kegiatans = Kegiatan::all();

        return Inertia::render('Siswa/Kegiatan/KegiatanIndex', compact('kegiatans'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Siswa/Kegiatan/KegiatanCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'is_active' => 'required',
            'name' => 'required|string|max:255',
            'date_start' => 'required|date' ,
            'time_start' => 'required' ,
            'date_end' => 'required|date' ,
            'time_end' => 'required' ,
        ], [
            'is_active.required' => 'Status kelompok harus dipilih',
            'name.required' => 'Nama tidak boleh kosong',
            'name.string' => 'Nama harus berupa teks',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter',
            'date_start.required' => 'Tanggal mulai tidak boleh kosong',
            'date_start.date' => 'Tanggal mulai harus berupa tanggal',
            'time_start.required' => 'Waktu mulai tidak boleh kosong',
            'date_end.required' => 'Tanggal berakhir tidak boleh kosong',
            'date_end.date' => 'Tanggal berakhir harus berupa tanggal',
            'time_end.required' => 'Waktu berakhir tidak boleh kosong',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        Kegiatan::create([
            'name' => $request->input('name'),
            'date_start' => $request->input('date_start'),
            'time_start' => $request->input('time_start'),
            'date_end' => $request->input('date_end'),
            'time_end' => $request->input('time_end'),
            'is_active' => $request->input('is_active'),
        ]);

        return to_route('kegiatan.index');
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
        $kegiatans = Kegiatan::where('id', $id)->first();

        return Inertia::render('Siswa/Kegiatan/KegiatanEdit', compact('kegiatans'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(), [
            'is_active' => 'required',
            'name' => 'required|string|max:255',
            'date_start' => 'required|date' ,
            'time_start' => 'required' ,
            'date_end' => 'required|date' ,
            'time_end' => 'required' ,
        ], [
            'is_active.required' => 'Status kelompok harus dipilih',
            'name.required' => 'Nama tidak boleh kosong',
            'name.string' => 'Nama harus berupa teks',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter',
            'date_start.required' => 'Tanggal mulai tidak boleh kosong',
            'date_start.date' => 'Tanggal mulai harus berupa tanggal',
            'time_start.required' => 'Waktu mulai tidak boleh kosong',
            'date_end.required' => 'Tanggal berakhir tidak boleh kosong',
            'date_end.date' => 'Tanggal berakhir harus berupa tanggal',
            'time_end.required' => 'Waktu berakhir tidak boleh kosong',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $kegiatans = Kegiatan::find($id);

        $kegiatansUpdate = $request->all();

        $kegiatans->update($kegiatansUpdate);

        return to_route('kegiatan.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $kegiatans = Kegiatan::find($id);

        $kegiatans->delete();

        return to_route('kegiatan.index');
    }
}

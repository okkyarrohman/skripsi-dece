<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Absen;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AbsenGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $absens = Absen::all();

        return Inertia::render('Guru/Absen/AbsenIndex', compact('absens'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Absen/AbsenCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'is_active' => 'required',
            'name' => 'required|string|max:255',
            'meet_date' => 'required|date',
        ], [
            'is_active.required' => 'Status kelompok harus dipilih',
            'name.required' => 'Nama tidak boleh kosong',
            'name.string' => 'Nama harus berupa teks',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter',
            'deadline_date.required' => 'Tanggal deadline tidak boleh kosong',
            'deadline_date.date' => 'Tanggal deadline harus berupa tanggal',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        Absen::create([
            'name' => $request->input('name'),
            'meet_date' => $request->input('meet_date'),
            'is_active' => $request->input('is_active')
        ]);

        return to_route('absen-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $users = User::where('role', 'siswa')
            ->with(['kelompoks'])
            ->orderBy('name') // Urutkan berdasarkan nama pengguna
            ->get();

        $absens = Absen::where('id', $id)
            ->with(['presents.users.kelompoks'])
            ->first();

        return Inertia::render('Guru/Absen/AbsenShow', compact('users', 'absens'));
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $absens = Absen::where('id', $id)->first();

        return Inertia::render('Guru/Absen/AbsenEdit', compact('absens'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $absens = Absen::find($id);

        $validator = Validator::make($request->all(), [
            'is_active' => 'required',
            'name' => 'required|string|max:255',
            'meet_date' => 'required|date',
        ], [
            'is_active.required' => 'Status kelompok harus dipilih',
            'name.required' => 'Nama tidak boleh kosong',
            'name.string' => 'Nama harus berupa teks',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter',
            'deadline_date.required' => 'Tanggal deadline tidak boleh kosong',
            'deadline_date.date' => 'Tanggal deadline harus berupa tanggal',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $absensUpdate = $request->all();

        $absens->update($absensUpdate);

        return to_route('absen-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $absens = Absen::find($id);

        $absens->delete();

        return to_route('absen-guru.index');
    }
}

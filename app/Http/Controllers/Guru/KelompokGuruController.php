<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Kelompok;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class KelompokGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kelompoks = Kelompok::with(['members'])->get();

        return Inertia::render('Guru/Kelompok/KelompokIndex', compact('kelompoks'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Kelompok/KelompokCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'capacity' => 'required|numeric',
            'is_active' => 'required',
        ], [
            'name.required' => 'Nama tidak boleh kosong',
            'name.string' => 'Nama harus berupa teks',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter',
            'capacity.required' => 'Kuota tidak boleh kosong',
            'capacity.numeric' => 'Kuota harus berupa angka',
            'is_active.required' => 'Status kelompok harus dipilih',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        Kelompok::create([
            'name' => $request->input('name'),
            'capacity' => $request->input('capacity'),
            'is_active' => $request->input('is_active')
        ]);

        return to_route('kelompok-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $kelompoks = Kelompok::where('id', $id)->with(['members'])->first();

        return Inertia::render('Guru/Kelompok/KelompokShow', compact('kelompoks'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $kelompoks = Kelompok::where('id', $id)->first();

        return Inertia::render('Guru/Kelompok/KelompokEdit', compact('kelompoks'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $kelompoks = Kelompok::find($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'capacity' => 'required|numeric',
            'is_active' => 'required',
        ], [
            'name.required' => 'Nama tidak boleh kosong',
            'name.string' => 'Nama harus berupa teks',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter',
            'capacity.required' => 'Kuota tidak boleh kosong',
            'capacity.numeric' => 'Kuota harus berupa angka',
            'is_active.required' => 'Status kelompok harus dipilih',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        
        $kelompoksUpdate = $request->all();

        $kelompoks->update($kelompoksUpdate);

        return to_route('kelompok-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $kelompoks = Kelompok::find($id);

        $kelompoks->delete();

        return to_route('kelompok-guru.index');
    }
}

<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Kelompok;
use Illuminate\Http\Request;
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

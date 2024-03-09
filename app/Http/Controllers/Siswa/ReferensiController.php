<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Referensi;
use App\Models\ReferensiSeen;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReferensiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $referensis = Referensi::all();

        return Inertia::render('Siswa/Referensi/ReferensiIndex', compact('referensis'));
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
        $referensis = Referensi::where('id', $id)->first();

        return Inertia::render('Siswa/Referensi/ReferensiShow', compact('referensis'));
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

    public function markSeen(string $id)
    {
        $referensis = Referensi::find($id);

        $referensis->seen_time += 1;

        $referensis->save();

        return to_route('referensi.show', $id);
    }
}

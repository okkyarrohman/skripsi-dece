<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Kelompok;
use App\Models\Tugas;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class KelompokController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kelompoks = Kelompok::with(['members'])->get();

        $users = User::where('id', Auth::user()->id)->with(['kelompoks'])->first();

        return Inertia::render('Siswa/Kelompok/KelompokIndex', compact('kelompoks', 'users'));
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
        $kelompoks = Kelompok::where('id', $id)->with(['members'])->first();

        $users = User::where('id', Auth::user()->id)->with(['kelompoks'])->first();

        $tugases = Tugas::with(['answers'])
            ->where('kelompok_id', Auth::user()->kelompok_id)
            ->get();

        return Inertia::render('Siswa/Kelompok/KelompokShow', compact('kelompoks', 'users', 'tugases'));
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

    public function join(string $kelompok_id)
    {
        $users = User::find(Auth::user()->id);

        $users->kelompok_id = $kelompok_id;

        $users->save();

        return to_route('kelompok.index');
    }
}

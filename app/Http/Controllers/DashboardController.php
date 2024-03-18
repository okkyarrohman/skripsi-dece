<?php

namespace App\Http\Controllers;

use App\Models\Absen;
use App\Models\Materi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function guru()
    {

        return Inertia::render('Guru/Dashboard');
    }


    public function siswa()
    {
        $absens = Absen::latest()->take(1)->first();

        $materis = Materi::latest()->take(5)->get();

        return Inertia::render('Siswa/Dashboard', compact('absens', 'materis'));
    }
}

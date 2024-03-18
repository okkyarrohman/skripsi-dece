<?php

namespace App\Http\Controllers;

use App\Models\Absen;
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

        return Inertia::render('Siswa/Dashboard', compact('absens'));
    }
}

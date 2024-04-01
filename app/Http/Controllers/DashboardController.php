<?php

namespace App\Http\Controllers;

use App\Models\Absen;
use App\Models\Kegiatan;
use App\Models\Kelompok;
use App\Models\Materi;
use App\Models\MonthlyLogin;
use App\Models\Tugas;
use App\Models\TugasAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function guru()
    {
        // $kelompoks = Kelompok::where('id', 7)->with(['members', 'tugases.answers'])->first();
        $kelompoks = Kelompok::with(['members', 'tugases.answers'])->get();

        $tugases = Tugas::with(['answers', 'kelompoks'])->get();

        $answers = TugasAnswer::with(['tugas', 'users'])->get();

        return Inertia::render('Guru/Dashboard', compact('kelompoks', 'tugases', 'answers'));
    }


    public function siswa()
    {
        $absens = Absen::with(['presents'])->latest()->take(1)->first();

        $materis = Materi::latest()->take(5)->get();

        $kegiatans = Kegiatan::latest()->take(3)->get();

        $monthlyLogins = MonthlyLogin::where('user_id', Auth::user()->id)->first();

        return Inertia::render('Siswa/Dashboard', compact('absens', 'materis', 'kegiatans', 'monthlyLogins'));
    }
}

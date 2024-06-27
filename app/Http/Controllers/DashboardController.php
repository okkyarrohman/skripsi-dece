<?php

namespace App\Http\Controllers;

use App\Models\Absen;
use App\Models\Kegiatan;
use App\Models\Kelompok;
use App\Models\Materi;
use App\Models\MonthlyLogin;
use App\Models\Tugas;
use App\Models\TugasAnswer;
use Carbon\Carbon;
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


    // public function siswa()
    // {
    //     $absens = Absen::with(['presents'])->latest()->take(1)->first();

    //     $materis = Materi::latest()->take(5)->get();

    //     $kegiatans = Kegiatan::latest('date_start')->take(3)->get();

    //     $tugases = Tugas::latest('deadline_date')->take(3)->get();

    //     $currentDate = Carbon::now();
    //     $selectedKegiatans = Kegiatan::where('date_start', '>=', $currentDate)->get(['id', 'name', 'date_start', 'time_start', 'is_active']);
    //     $selectedTugases = Tugas::where('deadline_date', '>=', $currentDate)->get(['id', 'name', 'deadline_date', 'deadline_time', 'is_active']);
    //     $aktivitases = $selectedKegiatans->map(function ($item) {
    //         return [
    //             'id' => $item->id,
    //             'name' => $item->name,
    //             'date' => $item->date_start,
    //             'time' => $item->time_start,
    //             'type' => 'kegiatan',
    //             'is_active' => $item->is_active,
    //         ];
    //     })->merge($selectedTugases->map(function ($item) {
    //         return [
    //             'id' => $item->id,
    //             'name' => $item->name,
    //             'date' => $item->deadline_date,
    //             'time' => $item->deadline_time,
    //             'type' => 'tugas',
    //             'is_active' => $item->is_active,
    //         ];
    //     }))->sortByDesc('date')->take(5)->values()->toArray();

    //     $monthlyLogins = MonthlyLogin::where('user_id', Auth::user()->id)->first();

    //     return Inertia::render('Siswa/Dashboard', compact('absens', 'materis', 'kegiatans', 'monthlyLogins', 'tugases', 'aktivitases'));
    // }

    public function siswa()
    {
        $absens = Absen::with(['presents'])->latest()->take(1)->first();

        $materis = Materi::latest()->take(5)->get();

        $kegiatans = Kegiatan::latest('date_start')->take(3)->get();

        $tugases = Tugas::latest('deadline_date')->take(3)->get();

        $currentDate = Carbon::now();
        $selectedKegiatans = Kegiatan::where('date_start', '>=', $currentDate)->get(['id', 'name', 'date_start', 'time_start', 'is_active']);
        $selectedTugases = Tugas::where('deadline_date', '>=', $currentDate)->get(['id', 'name', 'deadline_date', 'deadline_time', 'is_active']);

        // Convert to collections if not already
        $selectedKegiatans = $selectedKegiatans->map(function ($item) {
            return collect([
                'id' => $item->id,
                'name' => $item->name,
                'date' => $item->date_start,
                'time' => $item->time_start,
                'type' => 'kegiatan',
                'is_active' => $item->is_active,
            ]);
        });

        $selectedTugases = $selectedTugases->map(function ($item) {
            return collect([
                'id' => $item->id,
                'name' => $item->name,
                'date' => $item->deadline_date,
                'time' => $item->deadline_time,
                'type' => 'tugas',
                'is_active' => $item->is_active,
            ]);
        });

        // Combine both collections and sort by date
        $aktivitases = $selectedKegiatans->concat($selectedTugases)->sortByDesc('date')->take(5)->values();

        $monthlyLogins = MonthlyLogin::where('user_id', Auth::user()->id)->first();

        return Inertia::render('Siswa/Dashboard', compact('absens', 'materis', 'kegiatans', 'monthlyLogins', 'tugases', 'aktivitases'));
    }
}

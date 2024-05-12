<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Guru\AbsenGuruController;
use App\Http\Controllers\Guru\DataSiswaController;
use App\Http\Controllers\Guru\KelompokGuruController;
use App\Http\Controllers\Guru\MateriGuruController;
use App\Http\Controllers\Guru\ReferensiGuruController;
use App\Http\Controllers\Guru\TugasAnswerGuruController;
use App\Http\Controllers\Guru\TugasGuruController;
use App\Http\Controllers\Guru\TutorialGuruController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Siswa\AbsenController;
use App\Http\Controllers\Siswa\AbsenPresentController;
use App\Http\Controllers\Siswa\KegiatanController;
use App\Http\Controllers\Siswa\KelompokController;
use App\Http\Controllers\Siswa\MateriController;
use App\Http\Controllers\Siswa\ReferensiController;
use App\Http\Controllers\Siswa\TugasAnswerController;
use App\Http\Controllers\Siswa\TugasController;
use App\Http\Controllers\Siswa\TutorialController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Landing', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('landing');

Route::get('/link', function () {
    $target = '/home/jagoconf/jagoconfig/storage/app/public';
    $shortcut = '/home/jagoconf/public_html/storage';
    symlink($target, $shortcut);
});

// Route Guru
Route::group(['middleware' => 'role:guru'], function () {
    Route::prefix('guru')->group(function () {
        // Route Guru start here
        Route::get('/dashboard', [DashboardController::class, 'guru'])->name('dashboard.guru');
        Route::resources([
            'materi-guru' => MateriGuruController::class,
            'tugas-guru' => TugasGuruController::class,
            'tugas-answer-guru' => TugasAnswerGuruController::class,
            'referensi-guru' => ReferensiGuruController::class,
            'tutorial-guru' => TutorialGuruController::class,
            'kelompok-guru' => KelompokGuruController::class,
            'absen-guru' => AbsenGuruController::class,
            'data-siswa-guru' => DataSiswaController::class
        ]);
        Route::get('/tugas-answer-guru/jawaban-siswa/{id}', [TugasAnswerGuruController::class, 'jawabanSiswa'])->name('tugas-answer-guru.jawabanSiswa');
        Route::get('/panduan-guru', function () {
            return Inertia::render('Guru/Panduan');
        })->name('panduan-guru');
    });
});

// Route Siswa
Route::group(['middleware' => 'role:siswa'], function () {
    Route::prefix('siswa')->group(function () {
        // Route Siswa start here
        Route::get('/dashboard', [DashboardController::class, 'siswa'])->name('dashboard.siswa');
        Route::resources([
            'materi' => MateriController::class,
            'tugas' => TugasController::class,
            'tugas-answer' => TugasAnswerController::class,
            'referensi' => ReferensiController::class,
            'tutorial' => TutorialController::class,
            'kelompok' => KelompokController::class,
            'absen' => AbsenController::class,
            'absen-present' => AbsenPresentController::class,
            'kegiatan' => KegiatanController::class
        ]);
        Route::post('/materi/{id}/seen', [MateriController::class, 'markSeen'])->name('materi.markSeen');
        Route::post('/referensi/{id}/seen', [ReferensiController::class, 'markSeen'])->name('referensi.markSeen');
        Route::patch('/kelompok/{id}/join', [KelompokController::class, 'join'])->name('kelompok.join');
        Route::get('/absen/{id}/present', [AbsenPresentController::class, 'present'])->middleware('auth')->name('absen-present.present');
        Route::post('/absen/{id}/present', [AbsenPresentController::class, 'present'])->name('absen-present.present');
        Route::get('/panduan', function () {
            return Inertia::render('Siswa/Panduan');
        })->name('panduan');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/edit-profil', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/edit-profil', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/edit-profil', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

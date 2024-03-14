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
        ]);
        Route::post('/materi/{id}/seen', [MateriController::class, 'markSeen'])->name('materi.markSeen');
        Route::post('/referensi/{id}/seen', [ReferensiController::class, 'markSeen'])->name('referensi.markSeen');
        Route::patch('/kelompok/{id}/join', [KelompokController::class, 'join'])->name('kelompok.join');
        Route::get('/panduan', function () {
            return Inertia::render('Siswa/Panduan');
        })->name('panduan');
    });
});

require __DIR__ . '/auth.php';

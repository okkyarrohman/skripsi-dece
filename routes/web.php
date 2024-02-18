<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route Guru
Route::group(['middleware' => 'role:guru'], function () {
    Route::prefix('guru')->group(function () {
        // Route guru start here
    });
});

// Route Siswa
Route::group(['middleware' => 'role:siswa'], function () {
    Route::prefix('siswa')->group(function () {
        // Route siswa start here
    });
});

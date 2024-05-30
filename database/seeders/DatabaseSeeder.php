<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Absen;
use App\Models\Kegiatan;
use App\Models\Kelompok;
use App\Models\Materi;
use App\Models\MateriSeen;
use App\Models\Referensi;
use App\Models\ReferensiSeen;
use App\Models\Tugas;
use App\Models\TugasAnswer;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([RoleSeeder::class]);
        $this->call([UserSeeder::class]);

        Kelompok::factory(5)->create();
        User::factory(5)->create();
        Materi::factory(5)->create();
        Tugas::factory(4)->create();
        Referensi::factory(5)->create();
        Absen::factory(1)->create();
        Kegiatan::factory(5)->create();
        // TugasAnswer::factory(10)->create();
    }
}

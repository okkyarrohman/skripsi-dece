<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Kelompok;
use App\Models\Materi;
use App\Models\MateriSeen;
use App\Models\Referensi;
use App\Models\ReferensiSeen;
use App\Models\Tugas;
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

        // Kelompok::factory(10)->create();
        // User::factory(5)->create();
        // Materi::factory(5)->create();
        // Tugas::factory(10)->create();
        // Referensi::factory(5)->create();
    }
}

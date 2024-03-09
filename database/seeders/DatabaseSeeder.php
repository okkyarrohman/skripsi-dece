<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Materi;
use App\Models\MateriSeen;
use App\Models\Referensi;
use App\Models\ReferensiSeen;
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

        User::factory(5)->create();
        Materi::factory(5)->create();
        Referensi::factory(5)->create();
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $guru1 = User::create([
            'name' => 'Guru',
            'email' => 'guru@dece.com',
            'password' => bcrypt('guru123'),
        ]);
        $guru1->assignRole('guru');

        $siswa = User::create([
            'name' => 'siswa',
            'email' => 'siswa@dece.com',
            'password' => bcrypt('siswa123'),
        ]);
        $siswa->assignRole('siswa');
    }
}

<?php

namespace Database\Factories;

use App\Models\Materi;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MateriSeen>
 */
class MateriSeenFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'materi_id' => Materi::inRandomOrder()->value('id'),
            // 'user_id' => User::inRandomOrder()->value('id'),
            'is_seen' => 'Y',
        ];
    }
}

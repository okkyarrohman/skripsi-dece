<?php

namespace Database\Factories;

use App\Models\Kelompok;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tugas>
 */
class TugasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'kelompok_id' => Kelompok::inRandomOrder()->where('is_active', 'Y')->first()->id,
            'is_active' => $this->faker->randomElement(['Y', 'N']),
            'name' => $this->faker->name(),
            'description' => $this->faker->paragraph(),
            'deadline_date' => $this->faker->dateTimeBetween('-1 week', '+1 week'),
            'deadline_time' => $this->faker->time(),
            'question_1' => $this->faker->paragraph(),
            'question_2' => $this->faker->paragraph(),
            'question_3' => $this->faker->paragraph(),
        ];
    }
}

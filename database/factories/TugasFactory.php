<?php

namespace Database\Factories;

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
            'name' => $this->faker->name(),
            'description' => $this->faker->paragraph(),
            'deadline_date' => $this->faker->date(),
            'deadline_time' => $this->faker->time(),
            'question_1' => $this->faker->paragraph(),
            'question_2' => $this->faker->paragraph(),
            'question_3' => $this->faker->paragraph(),
        ];
    }
}

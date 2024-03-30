<?php

namespace Database\Factories;

use App\Models\Tugas;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TugasAnswer>
 */
class TugasAnswerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $filePath = $this->faker->file(storage_path('app/public/tugas_answer'), 'storage/app/public/tugas_answer', false);

        return [
            'tugas_id' => Tugas::inRandomOrder()->where('is_active', 'Y')->first()->id,
            'user_id' => User::inRandomOrder()->first()->id,
            'answer_1' => $this->faker->paragraph(),
            'answer_2' => $filePath,
            'answer_3' => $filePath,
            'grade' => $this->faker->numberBetween(1, 100),
            'grade_category' => $this->faker->randomElement(['A', 'B', 'C', 'D', 'E']),
            'feedback'=> $this->faker->paragraph()
        ];
    }
}

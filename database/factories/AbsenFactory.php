<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Absen>
 */
class AbsenFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $date = '2024-05-01';

        return [
            'name' => $this->faker->name(),
            'is_active' => $this->faker->randomElement(['Y', 'N']),
            'meet_date' => $date
        ];
    }
}

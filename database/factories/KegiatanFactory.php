<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kegiatan>
 */
class KegiatanFactory extends Factory
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
            'date_start' => $this->faker->dateTimeBetween('-1 month', '+1 month'),
            'time_start' => $this->faker->time(),
            'date_end' => $this->faker->dateTimeBetween('-1 month', '+1 month'),
            'time_end' => $this->faker->time(),
            'is_active' => $this->faker->randomElement(['Y', 'N']),
        ];
    }
}

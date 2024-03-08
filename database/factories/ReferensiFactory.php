<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Referensi>
 */
class ReferensiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $filePath = $this->faker->file(storage_path('app/public/referensi'), 'storage/app/public/referensi', false);

        return [
            'name' => $this->faker->name(),
            'slug' => $this->faker->paragraph(),
            'description' => $this->faker->paragraph(),
            'file' => $filePath,
        ];
    }
}

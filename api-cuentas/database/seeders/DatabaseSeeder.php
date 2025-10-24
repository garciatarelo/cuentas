<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Ana Morales',
            'email' => 'ana.morales@outlook.com',
            'password' => bcrypt('password'),
            'remember_token' => Str::random(10),
            'img' => 'default.png',
            'created_at'=>date('Y-m-d h:m:s')//2025-12-12
        ]);
    }
}

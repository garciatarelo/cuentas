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
        // Ejecutar primero los seeders que insertan usuarios para que las demás
        // tablas que dependen de users (categories, accounts, transactions)
        // puedan insertar filas con foreign keys válidas.
        $this->call([
            UsersSeeders::class,
            CategorySeeder::class,
            AccountSeeder::class,
            TransactionSeeder::class,
        ]);
    }
}

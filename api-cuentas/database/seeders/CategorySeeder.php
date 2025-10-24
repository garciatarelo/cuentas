<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            [
                'name' => 'Salario',
                'type' => 'ingreso',
                'user_id' => 1,
                'created_at'=>date('Y-m-d h:m:s')//2025-12-12
            ],
            [
                'name' => 'Restaurantes',
                'type' => 'gastos',
                'user_id' => 2,
                'created_at'=>date('Y-m-d h:m:s')//2025-12-12
            ],
        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('accounts')->insert([
            [
                'name' => 'Cuenta de Cheques',
                'type' => 'chequeos',
                'user_id' => 1,
                'created_at'=>date('Y-m-d h:m:s')//2025-12-12
            ],
            [
                'name' => 'Cuenta de Ahorros',
                'type' => 'ahorros',
                'user_id' => 2,
                'created_at'=>date('Y-m-d h:m:s')//2025-12-12
            ],
        ]);
    }
}

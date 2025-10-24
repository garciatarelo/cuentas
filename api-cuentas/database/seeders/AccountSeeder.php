<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
                'amount' => 1000.00,
                'status' => 'active',
                'user_id' => 1,
                'created_at' => date('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Cuenta de Ahorros',
                'amount' => 5000.00,
                'status' => 'active',
                'user_id' => 2,
                'created_at' => date('Y-m-d H:i:s'),
            ],
        ]);
    }
}

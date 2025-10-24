<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('transactions')->insert([
            [
                'amount' => 2500.00,
                'description' => 'Pago mensual de nómina',
                'user_id' => 1,
                'category_id' => 1,
                'account_id' => 1,
                'created_at'=>date('Y-m-d h:m:s')//2025-12-12
            ],
            [
                'amount' => 75.50,
                'description' => 'Cena con aniversario',
                'user_id' => 2,
                'category_id' => 2,
                'account_id' => 2,
                'created_at'=>date('Y-m-d h:m:s'),//2025-12-12
            ],
        ]);
    }
}

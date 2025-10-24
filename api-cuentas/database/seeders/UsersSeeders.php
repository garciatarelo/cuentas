<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UsersSeeders extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Ana Morales',
            'email' => 'ana@gmail.com',
            'password' => bcrypt('password'),
            'remember_token' => Str::random(10),
            'img' => 'default.png',
            'created_at'=>date('Y-m-d h:m:s')//2025-12-12
        ]);
        DB::table('users')->insert([
            'name' => 'Jaime Lopez',
            'email' => 'jaime@gmail.com',
            'password' => bcrypt('password'),
            'remember_token' => Str::random(10),
            'img' => 'default.png',
            'created_at'=>date('Y-m-d h:m:s')//2025-12-12
        ]);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $fillable = [
        'name',
        'amount',
        'status',
        'user_id',
    ];
    public function user()
    {
        return $this->hasOne(User::class, "id", "user_id");
    }
    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name',
        'type',
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

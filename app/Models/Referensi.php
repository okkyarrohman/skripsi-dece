<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Referensi extends Model
{
    use HasFactory;

    protected $table = 'referensis';

    protected $fillable = [
        'name',
        'slug',
        'file',
        'description',
        'seen_time'
    ];
}

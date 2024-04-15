<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kegiatan extends Model
{
    use HasFactory;

    protected $table = 'kegiatans';

    protected $fillable = [
        'name',
        'date_start',
        'time_start',
        'date_end',
        'time_end',
        'time',
        'is_active'
    ];
}

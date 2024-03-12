<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;

    protected $table = 'tugases';

    protected $fillable = [
        'name',
        'description',
        'deadline_date',
        'deadline_time',
        'question_1',
        'question_2',
        'question_3'
    ];
}

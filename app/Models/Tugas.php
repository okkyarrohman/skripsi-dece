<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;

    protected $table = 'tugases';

    protected $fillable = [
        'kelompok_id',
        'is_active',
        'name',
        'description',
        'deadline_date',
        'deadline_time',
        'question_1',
        'question_2',
        'question_3'
    ];

    public function answers() {
        return $this->hasMany(TugasAnswer::class, 'tugas_id', 'id');
    }

    public function kelompoks() {
        return $this->belongsTo(Kelompok::class, 'kelompok_id', 'id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TugasAnswer extends Model
{
    use HasFactory;

    protected $table = 'tugas_answers';

    protected $fillable = [
        'tugas_id',
        'kelompok_id',
        'answer_1',
        'answer_2',
        'answer_3'
    ];

    public function tugas() {
        return $this->belongsTo(Tugas::class, 'tugas_id', 'id');
    }
}

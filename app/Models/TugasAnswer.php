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
        // 'kelompok_id',
        'user_id',
        'answer_1',
        'answer_2',
        'answer_3',
        'nilaiPersiapan',
        'nilaiProses',
        'nilaiWaktu',
        'nilaiHasil',
        'nilaiPenutup',
        'grade',
        'grade_category',
        'feedback'
    ];

    public function tugas()
    {
        return $this->belongsTo(Tugas::class, 'tugas_id', 'id');
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}

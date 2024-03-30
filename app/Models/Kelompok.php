<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kelompok extends Model
{
    use HasFactory;

    protected $table = 'kelompoks';

    protected $fillable = [
        'name',
        'capacity',
        'average_grade',
        'is_active'
    ];

    public function members() {
        return $this->hasMany(User::class, 'kelompok_id', 'id');
    }

    public function tugases() {
        return $this->hasMany(Tugas::class, 'kelompok_id', 'id');
    }
}

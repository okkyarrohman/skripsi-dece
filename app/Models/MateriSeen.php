<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MateriSeen extends Model
{
    use HasFactory;

    protected $table = 'materi_seens';

    protected $fillable = [
        'materi_id',
        // 'user_id',
        'is_seen'
    ];

    public function materis() {
        return $this->belongsTo(Materi::class, 'materi_id', 'id');
    }

    // public function users() {
    //     return $this->belongsTo(User::class, 'user_id', 'id');
    // }
}

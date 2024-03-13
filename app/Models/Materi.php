<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
    use HasFactory;

    protected $table = 'materis';

    protected $fillable = [
        'name',
        'slug',
        'file',
        'description'
    ];

    public function materi_seens() {
        return $this->hasMany(MateriSeen::class, 'materi_id', 'id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AbsenPresent extends Model
{
    use HasFactory;

    protected $table = 'absen_presents';

    protected $fillable = [
        'absen_id',
        'user_id'
    ];

    public function absens() {
        return $this->belongsTo(Absen::class, 'absen_id', 'id');
    }

    public function users() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}

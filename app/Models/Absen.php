<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absen extends Model
{
    use HasFactory;

    protected $table = 'absens';

    protected $fillable = [
        'name',
        'meet_date',
        'is_active'
    ];

    public function presents() {
        return $this->hasMany(AbsenPresent::class, 'absen_id', 'id');
    }
}

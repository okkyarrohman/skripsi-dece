<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\AbsenPresent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AbsenPresentController extends Controller
{
    public function present(string $id)
    {
        AbsenPresent::create([
            'absen_id' => $id,
            'user_id' => Auth::user()->id
        ]);

        return to_route('dashboard.siswa');
    }
}

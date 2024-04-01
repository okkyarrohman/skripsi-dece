<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Referensi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ReferensiGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $referensis = Referensi::all();

        return Inertia::render('Guru/Referensi/ReferensiIndex', compact('referensis'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Referensi/ReferensiCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'description' => 'required|string',
            'file' => 'required|file|mimes:pdf|max:2048',
        ], [
            'name.required' => 'Nama tidak boleh kosong',
            'slug.required' => 'Slug tidak boleh kosong',
            'description.required' => 'Deskripsi tidak boleh kosong',
            'file.required' => 'File harus diunggah',
            'file.mimes' => 'File harus berupa format PDF',
            'file.max' => 'Ukuran file tidak boleh melebihi 2MB',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/referensi'), $fileName);
        }

        Referensi::create([
            'name' => $request->input('name'),
            'slug' => $request->input('slug'),
            'description' => $request->input('description'),
            'file' => $fileName
        ]);

        return to_route('referensi-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $referensis = Referensi::where('id', $id)->first();

        return Inertia::render('Guru/Referensi/ReferensiEdit', compact('referensis'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $referensis = Referensi::find($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'description' => 'required|string',
            'file' => 'required',
        ], [
            'name.required' => 'Nama tidak boleh kosong',
            'slug.required' => 'Slug tidak boleh kosong',
            'description.required' => 'Deskripsi tidak boleh kosong',
            'file.required' => 'File harus diunggah',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        if ($request->hasFile('file')) {
            Storage::delete("public/referensi/" . $referensis->file);

            $file = $request->file('file');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/referensi'), $fileName);
        } else {
            $fileName = $referensis->file;
        }

        $referensisUpdate = $request->all();
        $referensisUpdate['file'] = $fileName;

        $referensis->update($referensisUpdate);

        return to_route('referensi-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $referensis = Referensi::find($id);

        Storage::delete("public/referensi/" . $referensis->file);

        $referensis->delete();

        return to_route('referensi-guru.index');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('tugas_answers', function (Blueprint $table) {
            $table->integer('nilaiPersiapan')->after('answer_3')->nullable();
            $table->integer('nilaiProses')->after('nilaiPersiapan')->nullable();
            $table->integer('nilaiWaktu')->after('nilaiProses')->nullable();
            $table->integer('nilaiHasil')->after('nilaiWaktu')->nullable();
            $table->integer('nilaiPenutup')->after('nilaiHasil')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tugas_answers', function (Blueprint $table) {
            $table->dropColumn('nilaiPersiapan');
            $table->dropColumn('nilaiProses');
            $table->dropColumn('nilaiWaktu');
            $table->dropColumn('nilaiHasil');
            $table->dropColumn('nilaiPenutup');
        });
    }
};

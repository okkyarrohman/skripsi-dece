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
        Schema::create('materi_seens', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('materi_id');
            // $table->unsignedBigInteger('user_id');
            $table->string('is_seen');
            $table->timestamps();

            $table->foreign('materi_id')->references('id')->on('materis');
            // $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materi_seens');
    }
};

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
        Schema::create('tugas_answers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tugas_id');
            // $table->unsignedBigInteger('kelompok_id');
            $table->unsignedBigInteger('user_id');
            $table->longText('answer_1');
            $table->string('answer_2');
            $table->string('answer_3');
            $table->integer('grade')->nullable();
            $table->string('grade_category')->nullable();
            $table->longText('feedback')->nullable();
            $table->timestamps();

            $table->foreign('tugas_id')->references('id')->on('tugases')->cascadeOnDelete();
            // $table->foreign('kelompok_id')->references('id')->on('kelompoks');
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tugas_answers');
    }
};

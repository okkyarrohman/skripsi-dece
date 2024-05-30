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
        Schema::create('tugases', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('kelompok_id');
            $table->string('is_active');
            $table->string('name');
            $table->longText('description');
            $table->date('deadline_date');
            $table->time('deadline_time');
            $table->longText('question_1');
            $table->longText('question_2');
            $table->longText('question_3');
            $table->timestamps();

            $table->foreign('kelompok_id')->references('id')->on('kelompoks')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tugases');
    }
};

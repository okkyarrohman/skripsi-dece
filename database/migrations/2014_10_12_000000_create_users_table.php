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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('kelas')->nullable();
            $table->integer('absen')->nullable();
            $table->string('photo')->nullable();
            $table->string('role');
            $table->unsignedBigInteger('kelompok_id')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->string('session_login_at')->nullable();
            $table->integer('total_login_time')->nullable();
            // $table->json('total_login_by_month')->nullable();
            $table->timestamps();

            $table->foreign('kelompok_id')->references('id')->on('kelompoks')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};

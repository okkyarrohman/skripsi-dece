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
        Schema::create('monthly_logins', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->integer('total_login_january')->default(0)->nullable();
            $table->integer('total_login_february')->default(0)->nullable();
            $table->integer('total_login_march')->default(0)->nullable();
            $table->integer('total_login_april')->default(0)->nullable();
            $table->integer('total_login_may')->default(0)->nullable();
            $table->integer('total_login_june')->default(0)->nullable();
            $table->integer('total_login_july')->default(0)->nullable();
            $table->integer('total_login_august')->default(0)->nullable();
            $table->integer('total_login_september')->default(0)->nullable();
            $table->integer('total_login_october')->default(0)->nullable();
            $table->integer('total_login_november')->default(0)->nullable();
            $table->integer('total_login_december')->default(0)->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monthly_logins');
    }
};

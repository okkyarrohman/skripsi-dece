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
        Schema::table('referensis', function (Blueprint $table) {
            $table->string('link_youtube')->nullable()->after('file');
            $table->string('embed_youtube')->nullable()->after('link_youtube');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('referensis', function (Blueprint $table) {
            $table->dropColumn('link_youtube');
            $table->dropColumn('embed_youtube');
        });
    }
};

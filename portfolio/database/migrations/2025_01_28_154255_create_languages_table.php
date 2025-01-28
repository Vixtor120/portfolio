<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('languages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cv_id')->constrained('cv_info')->onDelete('cascade'); // Relación con cv_infos con eliminación en cascada
            $table->string('language', 50); // Nombre del idioma
            $table->string('level', 50); // Nivel de conocimiento del idioma
            $table->timestamps(); // Tiempos de creación y actualización
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('languages');
    }
};

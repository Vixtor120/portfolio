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
        Schema::create('education', function (Blueprint $table) {
            $table->id(); // Campo id
            $table->foreignId('cv_id') // Relación con la tabla cv_infos
                ->nullable()
                ->constrained('cv_info') // Asegúrate de que la tabla cv_infos exista
                ->onDelete('cascade'); // Elimina las filas relacionadas si se elimina el CV
            $table->string('institution', 100); // Nombre de la institución
            $table->string('degree', 100)->nullable(); // Nombre del grado o título
            $table->integer('start_year')->nullable(); // Año de inicio
            $table->integer('end_year')->nullable(); // Año de finalización
            $table->timestamps(); // Timestamps created_at y updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('education');
    }
};

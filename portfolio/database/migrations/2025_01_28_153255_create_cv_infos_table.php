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
        Schema::create('cv_info', function (Blueprint $table) {
            $table->id(); // id: integer (primary key, auto-increment)
            $table->string('name', 100); // name: varchar(100), not null
            $table->string('profession', 100); // profession: varchar(100), not null
            $table->string('email', 100); // email: varchar(100), not null
            $table->string('phone', 15)->nullable(); // phone: varchar(15), nullable
            $table->string('location', 100)->nullable(); // location: varchar(100), nullable
            $table->string('linkedin', 200)->nullable(); // linkedin: varchar(200), nullable
            $table->timestamps(); // created_at and updated_at columns
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cv_infos');
    }
};

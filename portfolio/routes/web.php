<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CvInfoController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\EducationController;

Route::get('/', function () {
    return view('welcome');
});

// Ruta para obtener la información de CV
Route::get('/cv-info', [CvInfoController::class, 'getCvInfo']);

// Rutas para obtener información adicional
Route::get('/skills', [SkillController::class, 'index']);
Route::get('/experiences', [ExperienceController::class, 'index']);
Route::get('/languages', [LanguageController::class, 'index']);
Route::get('/education', [EducationController::class, 'index']);

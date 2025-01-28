<?php

namespace App\Http\Controllers;

use App\Models\CvInfo; // Asegúrate de que el modelo CvInfo esté importado
use Illuminate\Http\Request;

class CvInfoController extends Controller
{
    public function getCvInfo()
    {
        // Obtener la información del CV desde la base de datos
        $cvInfo = CvInfo::first(); // O puedes usar otro método para obtener más datos si es necesario
        
        // Devolver la información en formato JSON
        return response()->json($cvInfo);
    }
}

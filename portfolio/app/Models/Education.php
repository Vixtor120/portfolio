<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;

    // Definir la tabla si no es el nombre plural en inglés
    protected $table = 'education';

    // Relación inversa con CvInfo
    public function cvInfo()
    {
        return $this->belongsTo(CvInfo::class);
    }
}

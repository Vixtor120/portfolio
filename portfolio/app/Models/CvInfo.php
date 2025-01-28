<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CvInfo extends Model
{
    use HasFactory;

    // Definir la tabla si no es el nombre plural en inglés
    protected $table = 'cv_info';

    // Definir los campos que se pueden asignar masivamente (mass assignment)
    protected $fillable = [
        'name',
        'email',
        'summary',
        'profession',
        'phone',
        'location',
        'linkedin',
        // Agrega aquí otros campos según tu tabla
    ];

    // Definir la relación con la tabla education
    public function educations()
    {
        return $this->hasMany(Education::class);
    }

    // Definir la relación con la tabla experiences
    public function experiences()
    {
        return $this->hasMany(Experience::class);
    }

    // Definir la relación con la tabla skills
    public function skills()
    {
        return $this->hasMany(Skill::class);
    }

    // Definir la relación con la tabla languages
    public function languages()
    {
        return $this->hasMany(Language::class);
    }
}

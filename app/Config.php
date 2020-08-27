<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Config extends Model
{
    
    public function restaurant()
    {
        return $this->belongsTo(Resturant::class);
    }


}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    

    /**
     * Get the restaurant that owns the menu.
     */
    public function restaurant()
    {
        return $this->belongsTo('App\Restaurant');
    }


}

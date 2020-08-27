<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{


        /**
     * Get the menu for restaurant
     */
        public function menus()
        {
        	return $this->hasMany('App\Menu');
        }

        public function config()
        {
        	return $this->hasOne(Config::class);
        }

        public function promos()
        {
            return $this->belongsToMany('App\Promo');
        }

    }

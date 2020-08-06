<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class Driver extends Model
{

	use Notifiable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'drivers';


}

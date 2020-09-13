<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Restaurant;
use App\Config;

class ConfigController extends Controller
{    

    public function storeConfig(Request $request, $id)
    {
        $restaurant = Restaurant::find($id);
        $config = new Config;
        $config->preparation_time = $request->preparation_time == null ? 'none' : $request->preparation_time;
        $config->minimium_delivery_time = $request->minimium_delivery_time;
        $config->maximium_delivery_time = $request->maximium_delivery_time ;
        $config->monday = $request->monday;
        $config->tuesday = $request->tuesday;
        $config->wednesday = $request->wednesday;
        $config->thursday = $request->thursday;
        $config->friday = $request->friday;
        $config->saturday = $request->saturday;
        $config->sunday = $request->sunday;

        $config->monday_status = $request->monday_status;
        $config->tuesday_status = $request->tuesday_status;
        $config->wednesday_status = $request->wednesday_status;
        $config->thursday_status = $request->thursday_status;
        $config->friday_status = $request->friday_status;
        $config->saturday_status = $request->saturday_status;
        $config->sunday_status = $request->sunday_status;

        $restaurant->config()->save($config);

        return 'Success';
    }


    public function show($id)
    {
        $config = Restaurant::find($id)->config;
        return response()->json($config);
    }

}

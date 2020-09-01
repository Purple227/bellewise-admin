<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


 Route::patch('driver/{id}', 'DriverController@statusUpdate');
 Route::get('/driver/search', 'DriverController@search');
 Route::get('/driver/blocked', 'DriverController@blocked');
 Route::get('/driver/active', 'DriverController@activeDrivers');

 Route::patch('restaurant/{id}', 'RestaurantController@statusUpdate');
 Route::get('/restaurant/search', 'RestaurantController@search');
 Route::get('/restaurant/blocked', 'RestaurantController@blocked');
 Route::get('/restaurant/all', 'RestaurantController@getAll');

 Route::get('/promo/search', 'PromoController@search');

 Route::patch('sub-admin/{id}', 'SubAdminController@statusUpdate');
 Route::get('/sub-admin/search', 'SubAdminController@search');
 Route::get('/sub-admin/blocked', 'SubAdminController@blocked');

 Route::post('/report/notification', 'ReportController@SMSNotification');

Route::apiResources([
    'driver' => 'DriverController',
    'restaurant' => 'RestaurantController',
    'promo' => 'PromoController',
    'sub-admin' => 'SubAdminController',
]);


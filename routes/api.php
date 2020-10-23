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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
	return $request->user();
});


Route::patch('driver/{id}', 'DriverController@statusUpdate');
Route::get('/driver/search', 'DriverController@search');
Route::get('/driver/blocked', 'DriverController@blocked');
Route::get('/driver/active', 'DriverController@activeDrivers');
Route::get('/driver/all-active', 'DriverController@AllActiveDrivers');

Route::patch('restaurant-status/{id}', 'RestaurantController@statusUpdate');
Route::get('/restaurant/search', 'RestaurantController@search');
Route::get('/restaurant/blocked', 'RestaurantController@blocked');
Route::get('/restaurant/all', 'RestaurantController@getAll');
Route::get('/restaurant/active', 'RestaurantController@activeRestaurants');
Route::get('/restaurant/all-active', 'RestaurantController@allActiveRestaurants');

Route::get('/promo/search', 'PromoController@search');
Route::get('/promo/all', 'PromoController@getAll');

Route::patch('sub-admin/{id}', 'SubAdminController@statusUpdate');
Route::get('/sub-admin/search', 'SubAdminController@search');
Route::get('/sub-admin/blocked', 'SubAdminController@blocked');

Route::post('/report/driver-notification', 'ReportController@SMSNotification');
Route::post('/report/driver-mail', 'ReportController@mailNotification');
Route::post('/report/restaurant-notification', 'ReportController@SMSNotification');
Route::post('/report/restaurant-mail', 'ReportController@mailNotification');

Route::post('/restaurant-setting/{id}', 'ConfigController@storeConfig');
Route::get('/restaurant-setting/{id}', 'ConfigController@show');
Route::patch('/restaurant-setting/{id}', 'ConfigController@updateConfig');

Route::get('/restaurant-menu/search/{id}', 'MenuController@searchMenu');
Route::get('/restaurant-menu/{id}', 'MenuController@menu');
Route::post('/restaurant-menu/create/{id}', 'MenuController@createMenu');
Route::delete('/restaurant-menu/delete/{id}', 'MenuController@destroy');
Route::get('/restaurant-menu/show/{id}/', 'MenuController@showMenu');
Route::get('/restaurant-menu/active/{id}', 'MenuController@activeMenu');
Route::get('/restaurant-menu/block/{id}', 'MenuController@blockedMenu');
Route::patch('/restaurant-menu/status/{id}', 'MenuController@updateStatusMenu');
Route::patch('/restaurant-menu/edit/{id}', 'MenuController@updateMenu');


Route::post('/setting/write-up', 'SettingBasicController@createWriteUp');
Route::get('/setting/write-up/{id}', 'SettingBasicController@showWriteUp');
Route::patch('/setting/write-up/{id}', 'SettingBasicController@updateWriteUp');
Route::post('/setting/cancellation-policy', 'SettingBasicController@createCancellationPolicy');
Route::get('/setting/cancellation-policy/{id}', 'SettingBasicController@showCancellationPolicy');
Route::patch('/setting/cancellation-policy/{id}', 'SettingBasicController@updateCancellationPolicy');

Route::post('/setting/policy', 'SettingTermPolicyController@createPolicy');
Route::get('/setting/policy/{id}', 'SettingTermPolicyController@showPolicy');
Route::patch('/setting/policy/{id}', 'SettingTermPolicyController@updatePolicy');
Route::post('/setting/term', 'SettingTermPolicyController@createTerms');
Route::get('/setting/term/{id}', 'SettingTermPolicyController@showTerm');
Route::patch('/setting/term/{id}', 'SettingTermPolicyController@updateTerms');

Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout');
Route::patch('/auth-edit/{id}', 'UserController@update');
Route::patch('/auth-security/{id}', 'UserController@updateSecurity');

Route::post('/role/{id}', 'RoleController@storePermission');
Route::get('/role/{id}', 'RoleController@show');
Route::patch('/role-update/{id}', 'RoleController@update');

Route::apiResources([
	'driver' => 'DriverController',
	'restaurant' => 'RestaurantController',
	'promo' => 'PromoController',
	'sub-admin' => 'SubAdminController',
	'admin' => 'AdminController'
]);


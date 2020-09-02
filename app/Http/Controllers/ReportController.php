<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notifications\DriverReportCredentials;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Log;

class ReportController extends Controller
{

	public function SMSNotificationDriver(Request $request)
	{	

		//$phones =  trim( $request->phones, '[]');
		$phones = $request->phones;
		$data = (object) $request->all();
		try {
			foreach ($phones as $phone)
			{
				Notification::route('nexmo', $phone )
				->notify(new DriverReportCredentials($data));
			}
		} catch (\Exception $e) {
			Log::error(' Nexmo API developer are to be blame.');
		}

	}
}

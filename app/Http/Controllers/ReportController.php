<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notifications\ReportCredentials;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ReportController extends Controller
{

	public function SMSNotification(Request $request)
	{	

		//$phones =  trim( $request->phones, '[]');
		$phones = $request->phones;
		$data = (object) $request->all();
		try {
			foreach ($phones as $phone)
			{
				Notification::route('nexmo', $phone )
				->notify(new ReportCredentials($data));
			}
		} catch (\Exception $e) {
			Log::error(' Nexmo API developer are to be blame.');
		}

	}

	public function mailNotification(Request $request)
	{	

		//$phones =  trim( $request->phones, '[]');
		$emails = $request->phones;
		$data = (object) $request->all();
		try {
			foreach ($emails as $email)
			{
				Notification::route('mail',$email)
				->notify(new ReportCredentials( $data ));
			}
		} catch (\Exception $e) {
			Log::error(' Blame your network provider.');
		}

	}

}

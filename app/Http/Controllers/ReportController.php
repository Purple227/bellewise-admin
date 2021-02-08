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
		$phones = json_decode($request->phones);
		$data = (object) $request->all();

			foreach ($phones as $phone)
			{
				Notification::route('nexmo', $phone )
				->notify(new ReportCredentials($data));
			}

	}

	public function mailNotification(Request $request)
	{	

		//$phones =  trim( $request->phones, '[]');
		$emails = json_decode($request->mail);
		$data = (object) $request->all();

			foreach ($emails as $email)
			{
				Notification::route('mail',$email)
				->notify(new ReportCredentials( $data ));
			}

	}

}

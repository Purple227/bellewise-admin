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

		$phones =  trim( $request->phones, '[]');
		//$phones = json_decode($request->phones);
		//return $phones;

		//foreach ($phones as $phone)
		//{

			$curl = curl_init();

			curl_setopt_array($curl, array(
				CURLOPT_URL => "https://konnect.dotgo.com/api/v1/Accounts/mvg4WmICsRk1bPNvo14iaA==/Messages",
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_ENCODING => "",
				CURLOPT_MAXREDIRS => 10,
				CURLOPT_TIMEOUT => 30,
				CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
				CURLOPT_CUSTOMREQUEST => "POST",
				CURLOPT_POSTFIELDS => "{\r\"id\":\"your_unique_id_for_request\",\r\"from\":\"\",\r\"to\":[$phones],\r\"sender_mask\":\"KOTP\",\r\"body\":\" $request->message \"\r}\r",
				CURLOPT_HTTPHEADER => array(
					"Authorization: r9iMM1tw30tfbdbBRelzcHcq3TY1pcH051Htuc1sfQ0=",
					"Content-Type: application/json"
				)
			));

			$response = curl_exec($curl);
			$err      = curl_error($curl);

			curl_close($curl);

		//}

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

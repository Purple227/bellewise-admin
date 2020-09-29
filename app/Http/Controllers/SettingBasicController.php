<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\WriteUp;
use App\CancellationPolicy;

use Illuminate\Http\Request;

class SettingBasicController extends Controller
{


	public function createWriteUp(Request $request)
	{
		$validator = Validator::make($request->all(), [
			'write_up' => ['required', 'max:225'],
		]);

		if ($validator->fails()) {
			return response()->json($validator->errors(), 400);
		}

		$write_up = new WriteUp;

        // Save to database
		$write_up->write_up = $request->write_up;
		$write_up->save();

		return response()->json('success');
	}

	public function showWriteUp($id)
	{
		$write_up = WriteUp::find($id);
		return response()->json($write_up);
	}

	public function updateWriteUp(Request $request, $id)
	{

		$write_up = WriteUp::find($id);

		$validator = Validator::make($request->all(), [
			'write_up' => ['required', 'max:225'],
		]);

		if ($validator->fails()) {
			return response()->json($validator->errors(), 400);
		}

        // Save to database
		$write_up->write_up = $request->write_up;
		$write_up->save();

		return response()->json('success');
	}


	public function createCancellationPolicy(Request $request)
	{

		$validator = Validator::make($request->all(), [
			'partial_deduction_charge' => 'required',
			'max_canellation_time' => 'required'
		]);

		if ($validator->fails()) {
			return response()->json($validator->errors(), 400);
		}

		$cancellation_policy = new CancellationPolicy;

        // Save to database
		$cancellation_policy->max_canellation_time = $request->max_canellation_time;
		$cancellation_policy->partial_deduction_charge = $request->partial_deduction_charge;
		$cancellation_policy->pending = $request->pending;
		$cancellation_policy->confirmed = $request->confirmed;
		$cancellation_policy->on_the_way = $request->on_the_way;
		$cancellation_policy->delivered = $request->delivered;
		$cancellation_policy->ready_to_be_picked = $request->ready_to_be_picked;
		$cancellation_policy->in_kitchen = $request->in_kitchen;
		$cancellation_policy->save();

		return response()->json('success');
	}


	public function showCancellationPolicy($id)
	{
		$cancellation_policy = CancellationPolicy::find($id);
		return response()->json($cancellation_policy);
	}

	public function updateCancellationPolicy(Request $request, $id)
	{

		$cancellation_policy = CancellationPolicy::find($id);

		$validator = Validator::make($request->all(), [
			'partial_deduction_charge' => 'required',
			'max_canellation_time' => 'required'
		]);

		if ($validator->fails()) {
			return response()->json($validator->errors(), 400);
		}

        // Save to database
		$cancellation_policy->max_canellation_time = $request->max_canellation_time;
		$cancellation_policy->partial_deduction_charge = $request->partial_deduction_charge;
		$cancellation_policy->pending = $request->pending;
		$cancellation_policy->on_the_way = $request->on_the_way;
		$cancellation_policy->delivered = $request->delivered;
		$cancellation_policy->ready_to_be_picked = $request->ready_to_be_picked;
		$cancellation_policy->in_kitchen = $request->in_kitchen;
		$cancellation_policy->confirmed = $request->confirmed;
		$cancellation_policy->save();

		return response()->json('success');
	}

}

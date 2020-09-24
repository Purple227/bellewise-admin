<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\WriteUp;

class SettingController extends Controller
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

    public function update(Request $request, $id)
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




}

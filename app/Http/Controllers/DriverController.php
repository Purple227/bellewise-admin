<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Driver;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;


class DriverController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $drivers = Driver::all();
        return $drivers;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'phone' => 'required',
            'occupation' => 'required',
            'email' => ['email:rfc,dns', 'unique:drivers'],
            'file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // New driver object
        $driver = new Driver;

        // Image set up
        if ( $request->hasFile('file') ) {
            $path = Storage::disk('public')->putFile('driver',$request->file('file'));
            $driver->image = $path;
        }

        $generated_password = mt_rand(100000, 999999);
        $driver_id = mt_rand(100000, 999999);

        // Save to database
        $driver->driver_id = $driver_id;
        $driver->name = $request->name;
        $driver->phone = $request->phone;
        $driver->occupation = $request->occupation;
        $driver->email = $request->email;
        $driver->password = Hash::make($generated_password);
        $driver->save();

        return "success";

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($driver_id)
    {
        $driver = Driver::where('driver_id',$driver_id)->first();
        return response()->json($driver);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $driver_id)
    {
        $driver = Driver::where('driver_id',$driver_id)->first();


        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'phone' => 'required',
            'occupation' => 'required',
            'email' => ['email:rfc,dns', 'unique:drivers'],
            'file' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Image set up
        if ( $request->hasFile('file') ) {
            $path = Storage::disk('public')->putFile('driver',$request->file('file'));
            $driver->image = $path;
        }

        // Save to database
        $driver->name = $request->name;
        $driver->phone = $request->phone;
        $driver->occupation = $request->occupation;
        $driver->email = $request->email;
        $driver->save();

        return "success";







        return response()->json($driver);
    }

    public function statusUpdate(Request $request, $id)
    {
        //
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

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



/*        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'phone' => 'required',
            'occupation' => 'required',
            'image' => 'image',
            'status' => 'boolean',
            'phone' => 'required',
            'email' => 'email:rfc,dns',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }*/


        // Image set up
        if ( $request->hasFile('file') ) {
            Storage::deleteDirectory('public/profile');
            $path = Storage::disk('public')->putFile('profile',$request->file('file'));
            //$driver->image = $path;
        }



/*        // Create a new object and save to database
        $driver = new Driver;
        $driver->name = $request->name;
        $driver->phone = $request->phone;
        $driver->occupation = $request->occupation;
        $driver->email = $request->email;
        $driver->password = Hash::make($request->password);
        $driver->save();*/

        return "succeeded";


        }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
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

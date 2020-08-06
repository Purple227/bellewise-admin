<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Driver;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;
use App\Notifications\DriverCredentials;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Log;


class DriverController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $drivers = Driver::orderBy('id', 'desc')->paginate(5);
        return response()->json($drivers);
    }

    public function search(Request $request)
    {
        $search_query = $request->search_query;
        $data = Driver::where('driver_id','LIKE',"%$search_query%")
        ->take(5)
        ->get();
        return response()->json($data);
    }

    public function blocked()
    {
        $drivers = Driver::where('status', 0)
        ->paginate(5);
        return response()->json($drivers);
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
            'phone' => ['required', 'unique:drivers'],
            'occupation' => 'required',
            'email' => ['email:rfc,dns', 'unique:drivers'],
            'file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $generated_password = mt_rand(100000, 999999);
        $driver_id = mt_rand(100000, 999999);

        $notify_info = $request->all();
        unset($notify_info['file']);
        $notify_info = (object) $notify_info;

        Notification::route('nexmo', $request->phone )
        ->notify(new DriverCredentials($notify_info, $generated_password, $driver_id));

        Notification::route('mail',$request->email)
        ->notify(new DriverCredentials( $notify_info, $generated_password, $driver_id ));


        // New driver object
        $driver = new Driver;

        // Image set up
        if ( $request->hasFile('file') ) {
            $path = Storage::disk('public')->putFile('driver',$request->file('file'));
            $driver->image = $path;
        }

        // Save to database

        $driver->driver_id = $driver_id;
        $driver->name = $request->name;
        $driver->phone = $request->phone;
        $driver->occupation = $request->occupation;
        $driver->email = $request->email;
        $driver->password = Hash::make($generated_password);
        $driver->save();

        return 'Suceess';

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $driver = Driver::find($id);
        return response()->json($driver);
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
        $driver = Driver::find($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'phone' => ['required', 'unique:drivers'],
            'occupation' => 'required',
            'file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Image set up
        $driver->image = 'default_image.svg';
        if ( $request->hasFile('file') ) {
            Storage::disk('public')->delete($driver->image);
            $path = Storage::disk('public')->putFile('driver',$request->file('file'));
            $driver->image = $path;
        }

        // Save to database
        $driver->name = $request->name;
        $driver->phone = $request->phone;
        $driver->occupation = $request->occupation;
        $driver->save();

    }

    public function statusUpdate(Request $request, $id)
    {
        $driver = Driver::find($id);
        $driver->status = $request->status;
        $driver->save();
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $driver = Driver::findOrFail($id);
        Storage::disk('public')->delete($driver->image);
        $driver->delete();
    }
}

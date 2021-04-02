<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
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

        $drivers = User::orderBy('id', 'desc')->where('admin', 'driver')->paginate(5);
        return response()->json($drivers);
    }

    public function search(Request $request)
    {
        $search_query = $request->search_query;
        $data = User::where('driver_id','LIKE',"%$search_query%")->where('admin', 'driver')
        ->take(5)
        ->get();
        return response()->json($data);
    }

    public function blocked()
    {
        $drivers = User::where('admin', 'driver')->where('status', 0)
        ->paginate(5);
        return response()->json($drivers);
    }


    public function activeDrivers()
    {
        $active_drivers = User::where('admin', 'driver')->where('status', 1)
        ->paginate(5);
        return response()->json($active_drivers);
    }

    public function allActiveDrivers()
    {
        $all_active_drivers = User::where('admin', 'driver')->where('status', 1)
        ->get();
        return response()->json($all_active_drivers);
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

        $result = json_encode($request->phone);

        try {
           $curl = curl_init();

           curl_setopt_array($curl, array(
            CURLOPT_URL => "https://konnect.dotgo.com/api/v1/Accounts/mvg4WmICsRk1bPNvo14iaA==/Messages",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "{\r\"id\":\"your_unique_id_for_request\",\r\"from\":\"\",\r\"to\":[$result],\r\"sender_mask\":\"KOTP\",\r\"body\":\" Hi, $request->name here are your details to gain access to your Bellewise driver app. Email: $request->email Password: $generated_password ID: $driver_id.Regards, Bellewise \"\r}\r",
            CURLOPT_HTTPHEADER => array(
                "Authorization: r9iMM1tw30tfbdbBRelzcHcq3TY1pcH051Htuc1sfQ0=",
                "Content-Type: application/json"
            )
        ));

           $response = curl_exec($curl);
           $err      = curl_error($curl);

           curl_close($curl);
        } catch (\Exception $e) {
            Log::error(' Karusi API developer are to be blame.');
        }

        try {
        Notification::route('mail',$request->email)
        ->notify(new DriverCredentials( $notify_info, $generated_password, $driver_id ));
        } catch (\Exception $e) {
            Log::error(' Your network connection is to be blame.');
        }


        // New driver object
        $driver = new User;

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
        $driver->admin = 'driver';
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
        $driver = User::find($id);
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
        $driver = User::find($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'occupation' => 'required',
            'file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Image set up
        //$driver->image = 'default_image.svg';
        if ( $request->hasFile('file') ) {
            Storage::disk('public')->delete($driver->image);
            $path = Storage::disk('public')->putFile('driver',$request->file('file'));
            $driver->image = $path;
        }

        // Save to database
        $driver->name = $request->name;
        $driver->occupation = $request->occupation;
        $driver->save();

    }

    public function statusUpdate(Request $request, $id)
    {
        $driver = User::find($id);
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
        $driver = User::findOrFail($id);
        Storage::disk('public')->delete($driver->image);
        $driver->delete();
    }
}

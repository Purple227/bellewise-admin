<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\SubAdmin;
use App\Notifications\SubAdminCredentials;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;

class SubAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sub_admins = SubAdmin::orderBy('id', 'desc')->paginate(5);
        return response()->json($sub_admins);
    }

    public function search(Request $request)
    {
        $search_query = $request->search_query;
        $data = SubAdmin::where('sub_admin_id','LIKE',"%$search_query%")
        ->take(5)
        ->get();
        return response()->json($data);
    }

    public function blocked()
    {
        $sub_admins = SubAdmin::where('status', 0)
        ->paginate(5);
        return response()->json($sub_admins);
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
            'email' => ['email:rfc,dns', 'unique:drivers'],
            'file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $generated_password = mt_rand(100000, 999999);
        $sub_admin_id = mt_rand(100000, 999999);

        $notify_info = $request->all();
        unset($notify_info['file']);
        $notify_info = (object) $notify_info;

        try {
            Notification::route('nexmo', $request->phone )
            ->notify(new SubAdminCredentials($notify_info, $generated_password, $sub_admin_id));
        } catch (\Exception $e) {
            Log::error(' Nexmo API developer are to be blame.');
        }


        Notification::route('mail',$request->email)
        ->notify(new SubAdminCredentials( $notify_info, $generated_password, $sub_admin_id ));


        // New driver object
        $sub_admin = new SubAdmin;

        // Image set up
        if ( $request->hasFile('file') ) {
            $path = Storage::disk('public')->putFile('subadmin',$request->file('file'));
            $sub_admin->image = $path;
        }

        // Save to database

        $sub_admin->sub_admin_id = $sub_admin_id;
        $sub_admin->name = $request->name;
        $sub_admin->phone = $request->phone;
        $sub_admin->email = $request->email;
        $sub_admin->password = Hash::make($generated_password);
        $sub_admin->save();

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
        $sub_admin = SubAdmin::find($id);
        return response()->json($sub_admin);
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
        $sub_admin = SubAdmin::find($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Image set up
        $sub_admin->image = 'default_image.svg';
        if ( $request->hasFile('file') ) {
            Storage::disk('public')->delete($sub_admin->image);
            $path = Storage::disk('public')->putFile('subadmin',$request->file('file'));
            $sub_admin->image = $path;
        }

        // Save to database
        $sub_admin->name = $request->name;
        $sub_admin->save();
    }

    public function statusUpdate(Request $request, $id)
    {
        $sub_admin = SubAdmin::find($id);
        $sub_admin->status = $request->status;
        $sub_admin->save();
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sub_admin = SubAdmin::findOrFail($id);
        Storage::disk('public')->delete($sub_admin->image);
        $sub_admin->delete();
    }
}

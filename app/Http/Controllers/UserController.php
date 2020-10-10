<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = App\User::all();
        return $user;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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

        $user = User::find($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'phone' => 'required',
            'email' => 'email',
            'file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        if($user->admin = 'sub_admin') {

            if ( $request->hasFile('file') ) {
                Storage::disk('public')->delete($user->image);
                $path = Storage::disk('public')->putFile('subadmin',$request->file('file'));
                $user->image = $path;
            }

        }

        if($user->admin = 'super_admin') {

            if ( $request->hasFile('file') ) {
                Storage::disk('public')->delete($user->image);
                $path = Storage::disk('public')->putFile('admin',$request->file('file'));
                $user->image = $path;
            }

        }


        // Save to database
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->save();

        return 'Success';
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateSecurity(Request $request, $id)
    {

        $user = User::find($id);

        $hashedPassword = Auth::user()->password;

        if ( Hash::check($request->old_password, $hashedPassword) ) {
            // Authentication passed...
            $user->password = Hash::make($request->new_password);
            $user->save();
            return response()->json('Success', 200);
        } else {
            return response()->json('Old password do not match', 400);
        }

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

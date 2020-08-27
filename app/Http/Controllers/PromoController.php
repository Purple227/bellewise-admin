<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Restaurant;
use App\Promo;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class PromoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $promotions = Promo::orderBy('id', 'desc')->paginate(4);
        return response()->json($promotions);
    }

    public function search(Request $request)
    {
        $search_query = $request->search_query;
        $data = Promo::where('name','LIKE',"%$search_query%")
        ->take(4)
        ->get();
        return response()->json($data);
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
            'name' => ['required', 'unique:promos'],
            'voucher' => 'required',
            'amount' => 'required',
            'discount' => 'required',
            'bearer' => 'required',
            'validity' => 'required',
            'user' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }


/*        $notify_info = $request->all();
        unset($notify_info['restaurantID']);
        $notify_info = (object) $notify_info;*/

/*        try {
            Notification::route('nexmo', $request->phone )
            ->notify(new DriverCredentials($notify_info,));
        } catch (\Exception $e) {
            Log::error(' Nexmo API developer are to be blame.');
        }*/


/*        Notification::route('mail',$request->email)
        ->notify(new DriverCredentials( $notify_info, $generated_password, $driver_id ));*/


        // New driver object
        $promo = new Promo;
        // Save to database
        $promo->name = $request->name;
        $promo->voucher = $request->voucher;
        $promo->amount = $request->amount;
        $promo->discount = $request->discount;
        $promo->validity = $request->validity;
        $promo->user = $request->user;
        $promo->bearer = $request->bearer;
        $promo->save();

        $promo->restaurants()->attach($request->restaurantID);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $promo = Promo::find($id);
        return response()->json($promo);
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

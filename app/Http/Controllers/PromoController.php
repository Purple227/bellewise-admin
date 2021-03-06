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

    public function getAll()
    {
        $all_promos = Promo::all();
        return response()->json($all_promos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   

        //return $request->restaurantID;

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

        // New promo object
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

        $restaurant_id = json_decode($request->restaurantsID);

        $promo->restaurants()->attach($restaurant_id);

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
        foreach ($promo->restaurants as $restaurant) {
           $restaurant->name;
        }
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
        $promo = Promo::find($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required',
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

        // Save to database
        $promo->name = $request->name;
        $promo->voucher = $request->voucher;
        $promo->amount = $request->amount;
        $promo->discount = $request->discount;
        $promo->validity = $request->validity;
        $promo->user = $request->user;
        $promo->bearer = $request->bearer;
        $promo->save();

        $restaurant_id = json_decode($request->restaurantsID);

        // Update restaurant id insertted here
        $promo->restaurants()->sync($restaurant_id);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $promo = Promo::findOrFail($id);
        $promo->restaurants()->detach();
        $promo->delete();
        return response()->json($promo);
    }
}

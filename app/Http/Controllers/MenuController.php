<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Restaurant;
use App\Menu;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;

class MenuController extends Controller
{

	public function menu($id)
	{
		$menu = Restaurant::find($id)->menus()->paginate(5);
		return response()->json($menu);
	}

	public function createMenu(Request $request, $id) 
	{
		$restaurant = Restaurant::find($id);

		$validator = Validator::make($request->all(), [
			'name' => 'required',
			'price' => 'required',
			'description' => 'required',
			'file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
		]);

		if ($validator->fails()) {
			return response()->json($validator->errors(), 400);
		}

 // New menu object
		$menu = new Menu;

        // Image set up for menu
		if ( $request->hasFile('file') ) {
			$path = Storage::disk('public')->putFile('menu',$request->file('file'));
			$menu->image = $path;
		}

		$menu->name = $request->name;
		$menu->price = $request->price;
		$menu->description = $request->description;

		$restaurant->menus()->save($menu);
	}

	public function showMenu($id)
	{	
		$menu = Menu::find($id);
		return response()->json($menu);
	}

	public function activeMenu($id)
	{
		$restaurant = Restaurant::find($id);
		$menu = $restaurant->menus()->where('status', 1)->paginate(5);
		return response()->json($menu);
	}

	public function blockedMenu($id)
	{
		$restaurant = Restaurant::find($id);
		$menu = $restaurant->menus()->where('status', 0)->paginate(5);
		return response()->json($menu);
	}

	public function updateMenu(Request $request, $id) 
	{
		$menu = Menu::find($id);

		$validator = Validator::make($request->all(), [
			'name' => 'required',
			'price' => 'required',
			'description' => 'required',
			'file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
		]);

		if ($validator->fails()) {
			return response()->json($validator->errors(), 400);
		}

		if ( $request->hasFile('file') ) {
			Storage::disk('public')->delete($menu->image);
			$path = Storage::disk('public')->putFile('menu',$request->file('file'));
			$menu->image = $path;
		}

		$menu->name = $request->name;
		$menu->price = $request->price;
		$menu->description = $request->description;

		$menu->save();

		return 'Success';
	}


	public function updateStatusMenu(Request $request, $id)
	{
		$menu = Menu::find($id);
		$menu->status = $request->status;
		$menu->save();
		return 'Success';
	}

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    	$menu = Menu::findOrFail($id);
    	Storage::disk('public')->delete($menu->image);
    	$menu->delete();
    }

    public function searchMenu(Request $request, $id)
    {

    	$restaurant = Restaurant::find($id);

    	//$user->posts()->where('active', 1)->get();

    	$search_query = $request->search_query;
    	$data = $restaurant->menus()->where('name','LIKE',"%$search_query%")
    	->take(5)
    	->get();
    	return response()->json($data);
    }


}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;
use App\User;

class RoleController extends Controller
{
    

    public function storePermission(Request $request, $id)
    {

        $role = new Role;

        $role->restaurant_list = $request->restaurant_list;
        $role->restaurant_create = $request->restaurant_create; 
        $role->restaurant_update = $request->restaurant_update; 
        $role->restaurant_block = $request->restaurant_block; 
        $role->restaurant_delete = $request->restaurant_delete;


        $role->driver_list = $request->driver_list;
        $role->driver_create = $request->driver_create;
        $role->driver_update = $request->driver_update;
        $role->driver_block = $request->driver_block;
        $role->driver_delete = $request->driver_delete;

        $role->promo_list = $request->promo_list;
        $role->promo_create = $request->promo_create;
        $role->promo_update = $request->promo_update;
        $role->promo_delete = $request->promo_delete;

        $role->order_list = $request->order_list;
        $role->order_confirm = $request->order_confirm;
        $role->order_reject = $request->order_reject;

        $role->user_list = $request->user_list;
        $role->user_block = $request->user_block;
        $role->user_password_reset = $request->user_password_reset;

        $role->sub_admin_list = $request->sub_admin_list;


        $role->user_id = $id;

        $role->save();

        return 'Success';
    }


    public function show($id)
    {
        $role = User::find($id)->role;
        return response()->json($role);
    }


    public function updatePermission(Request $request, $id)
    {
        
        $role = Role::find($id);

        $role->restaurant_list = $request->restaurant_list;
        $role->restaurant_create = $request->restaurant_create; 
        $role->restaurant_update = $request->restaurant_update; 
        $role->restaurant_block = $request->restaurant_block; 
        $role->restaurant_delete = $request->restaurant_delete;


        $role->driver_list = $request->driver_list;
        $role->driver_create = $request->driver_create;
        $role->driver_update = $request->driver_update;
        $role->driver_block = $request->driver_block;
        $role->driver_delete = $request->driver_delete;

        $role->promo_list = $request->promo_list;
        $role->promo_create = $request->promo_create;
        $role->promo_update = $request->promo_update;
        $role->promo_delete = $request->promo_delete;

        $role->order_list = $request->order_list;
        $role->order_confirm = $request->order_confirm;
        $role->order_reject = $request->order_reject;

        $role->user_list = $request->user_list;
        $role->user_block = $request->user_block;
        $role->user_password_reset = $request->user_password_reset;

        $role->sub_admin_list = $request->sub_admin_list;

        $role->user_id = $id;

        $role->save();

       // return 'Success';
    }




}

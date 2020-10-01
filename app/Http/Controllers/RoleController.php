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

        $role->restaurant_list = $request->restaurant_list == true ? 1 : 0;
        $role->restaurant_create = $request->restaurant_create == true ? 1 : 0;
        $role->restaurant_update = $request->restaurant_update == true ? 1 : 0;
        $role->restaurant_block = $request->restaurant_block == true ? 1 : 0;
        $role->restaurant_delete = $request->restaurant_delete == true ? 1 : 0;


        $role->driver_list = $request->driver_list == true ? 1 : 0;
        $role->driver_create = $request->driver_create == true ? 1 : 0;
        $role->driver_update = $request->driver_update == true ? 1 : 0;
        $role->driver_block = $request->driver_block == true ? 1 : 0;
        $role->driver_delete = $request->driver_delete == true ? 1 : 0;

        $role->promo_list = $request->promo_list == true ? 1 : 0;
        $role->promo_create = $request->promo_create == true ? 1 : 0;
        $role->promo_update = $request->promo_update == true ? 1 : 0;
        $role->promo_delete = $request->promo_delete == true ? 1 : 0;

        $role->order_list = $request->order_list == true ? 1 : 0;
        $role->order_confirm = $request->order_confirm == true ? 1 : 0;
        $role->order_reject = $request->order_reject == true ? 1 : 0;

        $role->user_list = $request->user_list == true ? 1 : 0;
        $role->user_block = $request->user_block == true ? 1 : 0;
        $role->user_password_reset = $request->user_password_reset == true ? 1 : 0;

        $role->sub_admin_list = $request->sub_admin_list == true ? 1 : 0;


        $role->user_id = $id;

        $role->save();

        return 'Success';
    }


    public function show($id)
    {
        $role = Role::find($id)->role;
        return response()->json($role);
    }


    public function updatePermission(Request $request, $id)
    {
        $role = Role::find($id);


        $role->restaurant_list = $request->restaurant_list == true ? 1 : 0;
        $role->restaurant_create = $request->restaurant_create == true ? 1 : 0;
        $role->restaurant_update = $request->restaurant_update == true ? 1 : 0;
        $role->restaurant_block = $request->restaurant_block == true ? 1 : 0;
        $role->restaurant_delete = $request->restaurant_delete == true ? 1 : 0;


        $role->driver_list = $request->driver_list == true ? 1 : 0;
        $role->driver_create = $request->driver_create == true ? 1 : 0;
        $role->driver_update = $request->driver_update == true ? 1 : 0;
        $role->driver_block = $request->driver_block == true ? 1 : 0;
        $role->driver_delete = $request->driver_delete == true ? 1 : 0;

        $role->promo_list = $request->promo_list == true ? 1 : 0;
        $role->promo_create = $request->promo_create == true ? 1 : 0;
        $role->promo_update = $request->promo_update == true ? 1 : 0;
        $role->promo_delete = $request->promo_delete == true ? 1 : 0;

        $role->order_list = $request->order_list == true ? 1 : 0;
        $role->order_confirm = $request->order_confirm == true ? 1 : 0;
        $role->order_reject = $request->order_reject == true ? 1 : 0;

        $role->user_list = $request->user_list == true ? 1 : 0;
        $role->user_block = $request->user_block == true ? 1 : 0;
        $role->user_password_reset = $request->user_password_reset == true ? 1 : 0;

        $role->sub_admin_list = $request->sub_admin_list == true ? 1 : 0;


        $role->user_id = $id;

        $role->save();

        return 'Success';
    }




}

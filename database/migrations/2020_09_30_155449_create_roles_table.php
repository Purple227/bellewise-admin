<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();

            $table->boolean('restaurant_list')->default(false);
            $table->boolean('restaurant_create')->default(false);
            $table->boolean('restaurant_update')->default(false);
            $table->boolean('restaurant_block')->default(false);
            $table->boolean('restaurant_delete')->default(false);

            $table->boolean('driver_list')->default(false);
            $table->boolean('driver_create')->default(false);
            $table->boolean('driver_update')->default(false);
            $table->boolean('driver_block')->default(false);
            $table->boolean('driver_delete')->default(false);

            $table->boolean('promo_list')->default(false);
            $table->boolean('promo_create')->default(false);
            $table->boolean('promo_update')->default(false);
            $table->boolean('promo_delete')->default(false);

            $table->boolean('order_list')->default(false);
            $table->boolean('order_confirm')->default(false);
            $table->boolean('order_reject')->default(false);

            $table->boolean('user_list')->default(false);
            $table->boolean('user_block')->default(false);
            $table->boolean('user_password_reset')->default(false);

            $table->boolean('sub_admin_list')->default(false);


            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
            ->references('id')->on('users')
            ->onDelete('cascade');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
}

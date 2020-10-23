<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('image')->default('default_image.svg');
            $table->string('description');
            $table->float('price', 10, 2);
            $table->boolean('status')->default(true);

            $table->unsignedBigInteger('restaurant_id');
            $table->foreign('restaurant_id')
            ->references('id')->on('restaurants')
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
        Schema::dropIfExists('menus');
    }
}

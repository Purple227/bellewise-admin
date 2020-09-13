<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConfigsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   

        Schema::create('configs', function (Blueprint $table) {
            $table->id();

            $table->time('preparation_time');
            $table->time('minimium_delivery_time');
            $table->time('maximium_delivery_time');
            $table->time('monday');
            $table->boolean('monday_status');
            $table->time('tuesday');
            $table->boolean('tuesday_status');
            $table->time('wednesday');
            $table->boolean('wednesday_status');
            $table->time('thursday');
            $table->boolean('thursday_status');
            $table->time('friday');
            $table->boolean('friday_status');
            $table->time('saturday');
            $table->boolean('saturday_status');
            $table->time('sunday');
            $table->boolean('sunday_status');

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
        Schema::dropIfExists('configs');
    }
}

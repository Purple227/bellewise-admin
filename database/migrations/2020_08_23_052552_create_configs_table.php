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

            $table->string('preparation_time');
            $table->string('minimium_delivery_time');
            $table->string('maximium_delivery_time');
            $table->string('monday');
            $table->boolean('monday_status');
            $table->string('tuesday');
            $table->boolean('tuesday_status');
            $table->string('wednesday');
            $table->boolean('wednesday_status');
            $table->string('thursday');
            $table->boolean('thursday_status');
            $table->string('friday');
            $table->boolean('friday_status');
            $table->string('saturday');
            $table->boolean('saturday_status');
            $table->string('sunday');
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

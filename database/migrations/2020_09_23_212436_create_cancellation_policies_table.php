<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCancellationPoliciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cancellation_policies', function (Blueprint $table) {
            $table->id();

            $table->string('max_canellation_time')->nullable();
            $table->float('partial_deduction_charge', 10, 2);
            $table->string('pending')->nullable();
            $table->string('confirmed')->nullable();
            $table->string('on_the_way')->nullable();
            $table->string('delivered')->nullable();
            $table->string('ready_to_be_picked')->nullable();
            $table->string('in_kitchen')->nullable();

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
        Schema::dropIfExists('cancellation_policies');
    }
}

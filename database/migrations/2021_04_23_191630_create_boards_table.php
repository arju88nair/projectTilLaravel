<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBoardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('boards', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description');
            $table->string('slug')->unique();
            $table->string('image_url')->nullable()->default('');
            $table->integer('is_admin')->default(0);
            $table->integer('is_default')->default(0);
            $table->integer('is_pinned')->default(0);
            $table->integer('pinned_order')->nullable();
            $table->timestamp('last_viewed', $precision = 0)->useCurrent();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('created_from')->nullable();
            $table->softDeletes('deleted_at', 0);
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
        Schema::dropIfExists('boards');
    }
}

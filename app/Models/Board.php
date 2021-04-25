<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Board extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'boards';
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title','description','slug','last_viewed','pinned_order','is_pinned','is_default','is_admin'];
    private mixed $description;
    private mixed $unique_url;
    /**
     * @var \Illuminate\Contracts\Auth\Authenticatable|mixed|null
     */
    private mixed $user_id;


    /**
     * Get the post that owns the comment.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

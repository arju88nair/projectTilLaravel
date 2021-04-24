<?php

namespace App\Http\Controllers;

use App\Models\Board;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BoardController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $boards = Board::latest()->paginate(5);
        return view('boards.index', compact('boards'))
            ->with('i', (request()->input('page', 1) - 1) * 5);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('boards.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);
//        $user=Auth::user();
//
//        $board= new Board();
//        $board->title=$request->title;
//        $board->description=$request->description;
//        $board->unique_url=$request->unique_url;
//        $board->user_id=$user;
//        $board->save();
        $board=Auth::user()->boards()->create([
            'title' => $request->title,
            'description' => $request->description,
            'unique_url'=>$request->unique_url
        ]);
        if ($request->wantsJson()) {
            return response()->json($board);
        }
        return redirect('/oneway');
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Board $board
     * @return \Illuminate\Http\Response
     */
    public function show(Board $board)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Board $board
     * @return \Illuminate\Http\Response
     */
    public function edit(Board $board)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Board $board
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Board $board)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Board $board
     * @return \Illuminate\Http\Response
     */
    public function destroy(Board $board)
    {
        //
    }
}

<?php /** @noinspection ALL */

namespace App\Http\Controllers;

use App\Models\Board;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\ApiResponder;
use App\Traits\SlugGenerator;

class BoardController extends Controller
{
    use ApiResponder, SlugGenerator;

    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $boards = Board::all();
        if ($request->wantsJson()) {
            return $this->success([
                'payload' => $boards
            ], "Successfully created");
        }

    }

//    /**
//     * Show the form for creating a new resource.
//     *
//     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
//     */
//    public function create(): View|Factory|Application
//    {
//        return view('boards.create');
//    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);
        $board = Auth::user()->boards()->create([
            'title' => $request->title,
            'description' => $request->description,
            'slug' => $this->generateSlug()
        ]);

            return $this->success([
                'payload' => $board
            ], "Successfully created");
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Board $board
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Board $board): JsonResponse
    {
        return $this->success([
            'payload' => $board
        ], "Successfully created");
    }

//    /**
//     * Show the form for editing the specified resource.
//     *
//     * @param \App\Models\Board $board
//     * @return \Illuminate\Http\Response
//     */
//    public function edit(Board $board): \Illuminate\Http\Response
//    {
//        //
//    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Board $board
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Board $board): JsonResponse
    {
        //
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);
        $board->update($request->only(['title', 'description']));
        return $this->success([
            'payload' => $board
        ], "Successfully updated");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Board $board
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Board $board): JsonResponse
    {
        $board->delete();
        return $this->success([
            'payload' => $board
        ], "Successfully deleted");
    }
}

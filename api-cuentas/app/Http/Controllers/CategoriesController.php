<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Category::with("user")->get();
        return response()->json([
            'status' => 'ok',
            'data' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|min:2',
            'type' => 'required|string',
            'user_id' => 'required',
        ]);
        $data = Category::create($validated);

        return response()->json([
            'status' => 'ok',
            'message' => 'Dato Insertado Correctamente',
            'data' => $data
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Category::find($id);
        if ($data) {
            return response()->json([
                'status' => 'ok',
                'message' => 'Categoria encontrada correctamente',
                'data' => $data
            ]);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Categoria no encontrada',
        ],400);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|min:2',
            'type' => 'required|string',
            'user_id' => 'required',
        ]);
        $data = Category::findOrFail($id);
        $data->update($validated);
        if ($data) {
            return response()->json([
                'status' => 'ok',
                'message' => 'Dato Actualizado Correctamente',
            'data' => $data
        ]);
    }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = Category::find($id);
        if ($data) {
            $data->delete();
        }
        return response()->json([
            'status' => 'ok',
            'message' => 'Categoria eliminada correctamente',
        ]);
    }

}

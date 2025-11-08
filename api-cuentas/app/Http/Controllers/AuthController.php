<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (! $access_token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'Credenciales inválidas'], 401);
            }
            $user = Auth::user(); //usuario logeado
            return response()->json([
                'token' => $access_token,
                'user' => $user
            ]);
        } catch (JWTException $e) {
            return response()->json([
                'error' => 'Credenciales inválidas'], 500);
        }

        return $this->respondWithToken($access_token);
    }
}

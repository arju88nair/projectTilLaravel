<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Exception;
use Validator;
use Socialite;
use Auth;

class SocialLoginController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('facebook')->redirect();
    }

    public function signInFacebook()
    {
        try {

            $user = Socialite::driver('google')->user();
            $userCol = User::where('id_google', $user->id)->first();

            if($userCol){
                Auth::login($userCol);
                return redirect('/dashboard');
            }else{
                $addUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'id_google' => $user->id,
                    'password' => encrypt('helloadmin')
                ]);

                Auth::login($addUser);
                return redirect('/dashboard');
            }

        } catch (Exception $exception) {
            dd($exception->getMessage());
        }
    }
}

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::get('/login', [LoginController::class, 'index']);
// Route::get('/login', [LoginController::class, 'ppp']);

Route::get('/abc.com', [ProductController::class, 'index']);
Route::get('/best_selling_product', [ProductController::class, 'best_selling_product']);
Route::get('/low_to_high_price', [ProductController::class, 'low_to_high_price']);
Route::get('/high_to_low_price', [ProductController::class, 'high_to_low_price']);



// route::post('/registration', [RegistrationController::class, 'store_user']);


// route::get('/confirm_premium_membership', [UserController::class, 'confirm_premium_membership']);

Route::get('/show_cart', [ProductController::class, 'show_cart']);
Route::get('/show_wish', [ProductController::class, 'show_wish']);
Route::get('/order_history', [ProductController::class, 'order_history']);

// Route::get('/show_product/{id}', [ProductController::class, 'show_product']);



<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/{any}', 'Frontend\MainController@index');
// Route::get('/api/indonesia', 'CovidController@SebaranCovid');
// Route::get('/api/provinsi', 'CovidController@SebaranIndo');
// Route::get('/api', 'CovidController@SebaranGlobal');
Route::get('/api/{options?}/{country?}', 'CovidController@getData');

Route::fallback(function () {
    return view('home.index');
});
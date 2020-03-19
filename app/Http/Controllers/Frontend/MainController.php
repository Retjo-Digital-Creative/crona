<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MainController extends Controller
{
    /**
     * Show home
     *
     * @return View
     */
    public function index()
    {
        return view('home.index');
    }
}

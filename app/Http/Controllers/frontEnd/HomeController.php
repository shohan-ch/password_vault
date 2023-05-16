<?php

namespace App\Http\Controllers\frontEnd;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function home()
    {
     return view('frontEnd.home');
    }

     public function article()
    {
     return view('frontEnd.article');
    }
    
}

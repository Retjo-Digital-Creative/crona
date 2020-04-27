<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CovidController extends Controller
{
    public function SebaranCovid()
    {

        $responeIndonesia = Http::get('https://api.kawalcorona.com/indonesia');
        $positfGlobal = Http::get('https://api.kawalcorona.com/positif');
        $sembuhGlobal = Http::get('https://api.kawalcorona.com/sembuh');
        $meninggalGlobal = Http::get('https://api.kawalcorona.com/meninggal');

        $indonesia = $responeIndonesia->json();
        $positif = $positfGlobal->json();
        $sembuh = $sembuhGlobal->json();
        $meninggal = $meninggalGlobal->json();


        return response()->json([
            'indonesia' => $indonesia,
            'positif' => $positif,
            'sembuh' => $sembuh,
            'meninggal' => $meninggal
        ]);

    }

    public function SebaranIndo()
    {

        $responeProvinsi = Http::get('https://api.kawalcorona.com/indonesia/provinsi');

        $provinsi = $responeProvinsi->json();

        return response()->json($provinsi);
    }

    public function SebaranGlobal()
    {

        $responeGlobal = Http::get('https://api.kawalcorona.com/');

        $global = $responeGlobal->json();

        return response->json($provinsis);
    }
    
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CovidController extends Controller
{
    public $req;

    public function __construct()
    {
        $this->req = 'https://api.kawalcorona.com/';
    }

    public function getData($country, $options = null)
    {
        try {
            if($country === 'all') {
                if(is_null($options)) {
                    $response = Http::get($this->req)->json();
                    return response($response);
                } else {
                    switch ($options) {
                        case 'positif':
                            $response = Http::get($this->req . $options)->json();
                            return response($response);
                            break;
                        
                        case 'meninggal':
                            $response = Http::get($this->req . $options)->json();
                            return response($response);
                            break;
                        case 'sembuh':
                            $response = Http::get($this->req . $options)->json();
                            return response($response);
                            break;
                        default:
                            throw new \Exception('Options Not Found, Try Another Options!');
                            break;
                    }
                }
            } else if($country === 'indonesia') {
                if(is_null($options)) {
                    $response = Http::get($this->req . 'indonesia')->json();
                    return response($response);
                } else {
                    $response = Http::get('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')->json();
                    return response($response);
                }
            } else {
                throw new \Exception('Please Input Queries!');
            }
        } catch(\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }
}

const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
.scripts([
   'public/data/js/jquery-3.4.1.min.js',
   'public/data/plugins/bootstrap/js/bootstrap.bundle.min.js',
   'public/data/plugins/bootstrap/js/popper.min.js',
   'public/data/d3-fetch.min.js',
   'public/data/plugins/horizontal-menu/horizontal-menu.js',
   'public/data/js/index3.js',
   'public/data/js/index8.js',
   'public/data/js/index4.js',
   'public/data/js/stiky.js',
   'public/data/js/custom.js'
], 'public/js/main.js')
   .sass('resources/sass/app.scss', 'public/css')
   .styles([
      'public/dist/css/adminlte.min.css',
      'public/data/plugins/bootstrap/css/bootstrap.min.css',
      'public/data/css/skin-modes.css',
      'public/data/css/style.css',
      'public/data/plugins/horizontal-menu/horizontal-menu.css',
      'public/data/plugins/charts-c3/c3-chart.css',
      'public/data/plugins/morris/morris.css',
      'public/data/css/icons.css',
      'public/data/plugins/sidebar/sidebar.css',
      'public/data/colors/color1.css'
   ], 'public/css/main.css').version();

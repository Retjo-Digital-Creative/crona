# Peduli Corona
---------------------
Peduli Corona adalah aplikasi untuk mendapatkan update terbaru mengenai virus Corona (COVID-19). Di dalam Peduli Corona terdapat info tentang Live Update virus Corona di Indonesia dan dunia yang menggunakan API dari https://kawalcorona.com/.

## Instalasi
---------------
Kamu dapat menginstal dan menggunakan aplikasi Peduli Corona ini secara gratis. Untuk langkah-langkah instalasi Peduli Corona, kamu bisa mengikuti perintah di bawah ini.

**1. Clone repository ini ke dalam repository lokal kamu**

```
$ git clone https://github.com/alfanjauhari/crona.git
```
Tunggu beberapa saat dan masuk ke dalam folder crona dengan menjalankan perintah `$ cd crona`

**2. Install Peduli Corona dengan composer dan npm**

```
$ composer install && npm install && npm run dev
```
Proses mungkin akan memakan beberapa menit tergantung kualitas internet kamu.

**3. Konfigurasi Key**

Konfigurasi key untuk memastikan aplikasi Peduli Corona berjalan lancar dengan menjalankan perintah :

```
$ php artisan key:generate
```

**4. Jalankan aplikasi Peduli Corona**

Setelah proses instalasi di atas, kamu sudah bisa menjalankan aplikasi Peduli Corona dengan menjalankan perintah 

```
$ php artisan serve
```
Atau jika kalian menggunakan Laragon atau sejenisnya, kalian bisa membuka langsung di browser dengan menulis http://crona.test/ di URL bar.

## Creators
---------------
Aplikasi Peduli Corona dibuat oleh dua orang dari Tulungagung dibantu dengan kontributor yang bersedia meluangkan waktu dan tenaga untuk Peduli Corona.

1. [Muhammad Surya Maulana](https://github.com/suryamaulana)
2. [Muhammad Alfan Jauhari](https://github.com/alfanjauhari)
3. [Para Kontributor](#kontributor)


## Kontributor
Kontributor untuk aplikasi Peduli Corona, terima kasih atas kontribusinya. 

1. [Defri Indra Mahardika](https://github.com/defrindr)
2. Kamu kah selanjutnya?

## Kontribusi
Kamu ingin menjadi gabungan dari Peduli Corona? Kamu bisa membaca panduan untuk [berkontribusi kami](KONTRIBUSI).

## LICENSE
Peduli Corona berada di bawah lisensi [MIT LICENSE](LICENSE)
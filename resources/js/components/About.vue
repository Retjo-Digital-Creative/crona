<template>
	<div class="contact">
		<div class="container mt-4">
			<div class="card">
				<div class="card-header">
					<h1 class="m-0 text-dark text-center">
						Tentang Peduli Corona
					</h1>
				</div>
				<div class="card-body">
					<p>
						Website pedulicorona adalah website yang dikembangkan untuk menyebarkan realtime data Corona Virus(COVID-19) di Indonesia dan Dunia. Dibantu Laravel dan Vue JS, Peduli Corona dibangun oleh dua orang warga dari Kabupaten Tulungagung, Kabupaten kecil di Provinsi Jawa Timur yang saat ini mulai memprihatinkan perihal perkembangan virus COVID-19 ini.
					</p>
					<p>
						Peduli Corona mengambil beberapa API dari beberapa sumber yang terpercaya dan dapat dipertanggung jawabkan kredibilitasnya. Selain Live Data, Peduli Corona juga memberikan sarana edukatif yang dapat membantu kita untuk tetap tenang dalam situasi seperti sekarang ini.
					</p>
					<p>
						Peduli Corona membuka kesempatan untuk setiap orang yang ingin mensupport atau kontribusi ke dalam Peduli Corona. Kamu dapat menghubungi developer dengan melalui halaman <router-link to="/kontak">Kontak</router-link>, atau melalui Official Github dari <a href="https://github.com/alfanjauhari/crona">Peduli Corona</a>.
					</p>
					<p>
						Ketentuan layanan website Peduli Corona dapat di lihat di halaman <router-link to="/tos">Term Of Service</router-link>.
					</p>
					<p>
						<h3>Berikut ini daftar sumber API Peduli Corona :</h3>
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>Jenis API</th>
									<th>Sumber API</th>
									<th>Response Data</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Data Global dan Indonesia</td>
									<td><a href="https://kawalcorona.com/api">Kawal Corona</a></td>
									<td>JSON</td>
								</tr>
								<tr>
									<td>Data Per Provinsi di Indonesia</td>
									<td><a href="https://bnpb-inacovid19.hub.arcgis.com/datasets/">Hub INACOVID-19</a></td>
									<td>JSON</td>
								</tr>
							</tbody>
						</table>
					</p>
				</div>
			</div>
		</div>    
	</div>
</template>

<script>
	export default {
		name: 'About'
	}
</script>
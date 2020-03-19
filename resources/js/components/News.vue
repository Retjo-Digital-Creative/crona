<template>
	<div class="news">
		<div class="jumbotron">
			<div class="container"><br><br>
				<h1 class="m-0 text-dark text-center">
					Berita Terbaru Virus Corona di Dunia
				</h1>
				<h5 class="lead m-0 text-center">
					<small class="tgl_update">Update Berita Aktual tentang Virus Corona(COVID-19) secara Internasional</small><br>
				</h5>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 col-md-4 col-lg-4" v-for="(article) in articles" :key="article.id">
				<div class="card service">
					<div class="card-body">
						<div class="text-center">
							<h3 class="font-weight-bold">{{ article.title }}</h3>
						</div>
						<img :src="article.image" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'News',
		data() {
			return {
				articles: {}
			}
		},
		mounted() {
			this.getNews()
		},
		methods: {
			getNews: function() {
				d3.json('https://thevirustracker.com/free-api?countryTotal=ID').then(res => {
					let datas = res.countrynewsitems[0];
					let newId = Object.keys(datas)
					// reverse array to get 5 updated news
					newId.reverse()
					newId.splice(newId['stat'],1);
					let i = 0;
					let limit = 9;
					
					let article = []
					while ( i < limit) {
						article.push( datas[newId[i]] )
						i++
					}
					this.articles = article
				})
			}
		}
	}
</script>
<template>
	<div class="jawatimur">
		<div class="jumbotron">
			<div class="container"><br><br>
				<h1 class="m-0 text-dark text-center">
					Peta Persebaran Coronavirus (Covid-19) Wilayah Jawa Timur
				</h1>
				<h5 class="lead m-0 text-center">
					<small class="lead">data persebaran Coronavirus di Jawa Timur diambil langsung dari infocovid19.jatimprov.go.id</small>
				</h5>
			</div>
		</div>
		<div class="container">
		    <div class="card mt-4">
			    <div class="card-header">
				    <h3 class="card-title">
    					    Update Penyebaran Coronavirus (COVID-19) Provinsi Jawa Timur
	    			</h3>
		    	</div>
				<div>
    				<iframe src="https://covid19dev.jatimprov.go.id/xweb/draxi" width="100%" height="1450px" style="border:none;"></iframe>
	    		</div>
		    </div>
		</div>    
	</div>
</template>

<script>
	export default {
		name: 'JawaTimur'
	}
</script>
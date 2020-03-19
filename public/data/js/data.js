$.get("https://api.kawalcorona.com/recovered/", function(data, status) {
  for (var i = 0; i < data.length - 1; i++) {
    if (data[i].nameRecovered == "Sembuh") {
      $("#TotalRecovered").html(data[i].TotalRecovered);
      $("#wkidRecovered").html(data[i]. wkidRecovered);
      $("#latestWkidRecovered").html(data[i].latestWkidRecovered);
      $("#nameRecovered").html(data[i]. nameRecovered);
    } 
    
  }
}
),

$.get("https://api.kawalcorona.com/confirmed/", function(data, status) {
  for (var i = 0; i < data.length - 1; i++) {
    if (data[i].nameConfirmed == "Positif") {
      $("#TotalConfirmed").html(data[i].TotalConfirmed);
      $("#wkidConfirmed").html(data[i]. wkidConfirmed);
      $("#latestWkidConfirmed").html(data[i].latestWkidConfirmed);
      $("#nameConfirmed").html(data[i]. nameConfirmed);
    } 
    
  }
}
),

$.get("https://api.kawalcorona.com/indonesia/", function(data, status) {
  for (var i = 0; i < data.length - 1; i++) {
    if (data[i].name == "Indonesia") {
      $("#positif").html(data[i].positif);
      $("#sembuh").html(data[i]. sembuh);
      $("#meninggal").html(data[i].meninggal);
      $("#lastupdate").html(data[i]. lastupdate);
    } 
    
  }
}
),

$.get("https://api.kawalcorona.com/deaths/", function(data, status) {
  for (var i = 0; i < data.length - 1; i++) {
    if (data[i].nameDeaths == "Meninggal") {
      $("#TotalDeaths").html(data[i].TotalDeaths);
      $("#wkidDeaths").html(data[i]. wkidDeaths);
      $("#latestWkidDeaths").html(data[i].latestWkidDeaths);
      $("#nameDeaths").html(data[i]. nameDeaths);
    } 
    
  }
}
);
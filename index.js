function updateMap() {
  //console.log("update function ran");

  // fetch the data from json file
  fetch("/data.json")
    .then((response) => response.json())
    .then((res) => {
      //console.log(res.data);
      res.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;
        //console.log(latitude + " " + longitude);

        // generate colour based on no. of cases
        cases = element.infected;
        if (cases < 100) color = "rgb(201,102,85)";
        else if (cases < 200) color = "rgb(250,128,114)";
        else if (cases < 300) color = "rgb(240,128,128)";
        else if (cases < 400) color = "rgb(205,92,92)";
        else if (cases < 500) color = "rgb(255,99,71)";
        else if (cases < 750) color = "rgb(220,20,60)";
        else if (cases < 1000) color = "rgb(178,34,34)";
        else if (cases < 2000) color = "rgb(165,42,42)";
        else if (cases < 4000) color = "rgb(128,0,0)";
        else color = "rgb(77,11,0)";

        var popUpText =
          element.name +
          " - " +
          element.country +
          "\n" +
          "Currently Infected: " +
          element.sick +
          "\n" +
          "Recovered: " +
          element.recovered +
          "\n" +
          "Dead: " +
          element.dead;

        // create the popup
        var popup = new mapboxgl.Popup({ offset: 25 }).setText(popUpText);

        // Mark on map
        new mapboxgl.Marker({
          draggable: false,
          color: color,
        })
          .setLngLat([longitude, latitude])
          .setPopup(popup) // sets a popup on this marker
          .addTo(map);
      });
    })
    .catch();
}
updateMap();
// updatemap in  1200 sec
setInterval(updateMap, 1200000);

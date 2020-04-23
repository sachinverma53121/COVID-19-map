function updateMap() {
  console.log("update function ran");

  // fetch the data from json file
  fetch("/data.json")
    .then((response) => response.json())
    .then((res) => {
      //console.log(res.data);
      res.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;
        //console.log(latitude + " " + longitude);
      });
    })
    .catch();
}
updateMap();
// updatemap in  100 sec
setInterval(updateMap, 10000);

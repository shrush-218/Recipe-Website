function update(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/", requestOptions)
        .then(response => response.json())
        .then(result => {
            var data = [];
            result.forEach((element,index) => {
                var country = element["country"];
                var longitude = element["longitude"];
                var latitude = element["latitude"];
                var dish = element['dish'];
                var message = `Country : ${country} , Dish : ${dish}`;
                var popup = new mapboxgl.Popup({ offset: 25 }).setText(message);
                var m = new mapboxgl.Marker({colo})
                .setLngLat([longitude,latitude])
                .setPopup(popup)
                .addTo(map);            
            });
            
        })
        .catch(error => console.log('error', error));
    }
    update();
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

let coords;
let map = L.map('map');
function buildMap() {
    
    map.setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

function addMarkers() {
    L.marker(coords).addTo(map);
}

window.onload = async () => {
    coords = await getCoords();
    buildMap();
    addMarkers();
}
// panos code
// const options = {
//     method: 'GET',
//     headers: {
//     Accept: 'application/json',
//     Authorization: 'fsq3ATzZbmcGhdeFafr73wZcnJ+LlN6bK+4dh19a7ClS4u8='
//     }
// }
// let limit = 5
// let lat = myMap.coordinates[0]
// let lon = myMap.coordinates[1]
// let response = await fetch(`https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${lon}`, options)
// let data = await response.text()
// let parsedData = JSON.parse(data)
// let businesses = parsedData.results
// return businesses

// function fourSquare(){
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'fsq3ATzZbmcGhdeFafr73wZcnJ+LlN6bK+4dh19a7ClS4u8='
//         }
//       };
      
//       fetch('https://api.foursquare.com/v3/places/search', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }


// var map = L.map('map').setView([51.505, -0.09], 13);



// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();
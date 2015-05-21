// Uber API Constants
var uberClientId = pT04PWyvMeWSrQgS4QLgbRo9i5awp_P_
  , uberServerToken = 3zc4irpdK2c1cpgvejiUOSCKjwlaWLjDtJyRp5_7;

// Create variables to store latitude and longitude
var userLatitude
  , userLongitude
  , partyLatitude = 37.818911
  , partyLongitude = -122.259820;

navigator.geolocation.watchPosition(function(position) {
    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;

  // Query Uber API if needed
    getEstimatesForUserLocation(userLatitude, userLongitude);
});

function getEstimatesForUserLocation(latitude,longitude) {
  $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
        Authorization: "Token "  uberServerToken
    },
    data: {
      start_latitude: latitude,
      start_longitude: longitude,
      end_latitude: partyLatitude,
      end_longitude: partyLongitude
    },
    success: function(result) {
      console.log(result);
    }
  });
}

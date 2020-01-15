const request = require('request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiY29kZWFzaGlzaCIsImEiOiJjazVhaWVmbW0xMHZ2M2xtN2ttdHB6Z3l5In0.v-c4xHg4X9bERR1j5VcaHg&limit=1"
    request({
        url,
        json: true
    }, (err, {
        body
    }) => {
        if (err) {
            callback('Unable to connect to location servicies', undefined); //low level error

        } else if (body.features.length === 0) {
            callback("Unable to find Location", undefined)
        } else {
            callback(undefined, {

                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });

        }


    });

}


module.exports = geocode;
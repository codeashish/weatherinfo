const request = require("request");

const forecast = (latitude, longitude, callback) => {
    var url =
        "https://api.darksky.net/forecast/b379622331254883d8475da8de4cba68/" +
        latitude +
        "," +
        longitude +
        "?units=si";
    request({
            url,
            json: true
        },
        (err, {body}) => {
            if (err) {
                callback("Unable to connect servicies", undefined);
            } else if (body.error) {
                callback("Unable to find locations", undefined);
            } else {
                callback(undefined, {

                    temp: body.currently.temperature,
                    place: body.timezone,
                    summ: body.currently.summary,

                });
            }
        }
    );
};

module.exports = forecast;
var request = require('request');
const geocode = require('./utils/geocode');
const forecast = require("./utils/forecast");
const prompt = require('prompt');


var schema = {
    properties: {
        name: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Name must be only letters, spaces, or dashes',
            required: true
        },

    }
};


prompt.start();


prompt.get(schema, function (err, result) {


    if (err) {

        return console.log(err);
    }


    geocode(result.name, (err, {latitude,elongitude,location}) => {
        if (err) {
            return console.log(err);

        }

        // console.log(data);


        forecast(latitude, longitude, (err, forecastdata) => {
            if (err) {
                return console.log(err);

            }

            console.log(location);
            console.log(forecastdata);

        });


    });
});
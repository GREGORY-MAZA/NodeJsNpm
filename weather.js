var weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({ search: 'Lyon, France', degreeType: 'C' }, function(err, result) {
    if (err) console.log(err);

    console.log(result[0].location.name);
    console.log(result[0].current.temperature + " degrés");
    console.log(result[0].current.skytext);
});
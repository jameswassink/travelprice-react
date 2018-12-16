const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyA70eVOEF6Y_gXFe631ThgaTvwG_A3q3PQ',
    Promise: require('q').Promise
});

module.exports = async function (origin, destination, noTolls) {
    const opts = {
        origin: origin,
        destination: destination,
        region: 'au'
    };
    if (noTolls){
        opts.avoid = "tolls";
    }
    try {
        const response = await googleMapsClient.directions(opts).asPromise();

        if (response.json.routes.length == 0){
            return {error: true, message: response.json.status};
        }

        const firstRoute = response.json.routes[0];
    
        return {
            duration: firstRoute.legs[0].duration.value,
            polyline: firstRoute.overview_polyline.points
        }
    } catch (error){
        return {
            error: true,
            message: error.json.status
        }
    }
    
};
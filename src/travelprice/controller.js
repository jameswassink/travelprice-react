const getRouteInfo = require('./directions');
const requestToll = require('./requestToll');

module.exports = {
    calculate: async function(origin, destination){
        const routeInfo = await getRouteInfo(origin, destination, false);   
        if (routeInfo.error){
            return {error: true, message: routeInfo.message};
        }

        const tollDuration = routeInfo.duration;

        const tollResult = await sendPolyLineToTollAPI(routeInfo.polyline);    
        if (tollResult.error){
            return {error: true, message: error.message};
        }

        const tollPrice = tollResult.totalCost;

        const routeInfoNoToll = await getRouteInfo(origin, destination, true);  
        if (routeInfoNoToll.error){
            return {error: true, message: routeInfo.message};
        }
        const noTollDuration = routeInfoNoToll.duration;

        return {
            tollPrice: tollPrice,
            tollDuration: tollDuration,
            noTollDuration: noTollDuration
        }
    }
}

async function sendPolyLineToTollAPI(polyline){
    try {
        return await requestToll(polyline, (new Date()).toJSON(), false);
    } catch(error){
        const errorDetails = error.response.data.ErrorDetails;
        return {error: true, message: errorDetails.Message};
    }
};
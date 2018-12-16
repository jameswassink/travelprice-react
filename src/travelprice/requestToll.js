const axios = require('axios');

module.exports = async (polyline, dateString, heavyVehicle) => {
    /* Uses Transport for NSW Open Data - CC BY 4.0 - https://opendata.transport.nsw.gov.au/data-licence*/
    const response = await axios({
        method: 'post',
        url: 'https://api.transport.nsw.gov.au/v1/roads/toll_calc',
        data: {
            "encodedPolyLine": polyline,
            "travelDateTime":dateString,   
            "heavyVehicle": heavyVehicle,              
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'apikey bHwCEjXYHGF5JRriwVhYCFFc7eFxX4hamIeU'
        }
    })
    return response.data;
};
const Flight = require('../models/flights.models');

const createFlight = async ({flightNumber, departureDate, arrivalDate, departureTime, arrivalTime,
     departureAirport, arrivalAirport, currentNumPassengers, passengerLimit}) =>{
    try{
        const flight = new Flight({
            flightNumber, 
            departureDate, 
            arrivalDate, 
            departureTime, 
            arrivalTime,
            departureAirport, 
            arrivalAirport, 
            currentNumPassengers, 
            passengerLimit
        });
        await flight.save();
        return flight._id;
    }catch (err){
        console.log(err);
        throw{status: 400, message: err};
    }
}

module.exports = {createFlight};
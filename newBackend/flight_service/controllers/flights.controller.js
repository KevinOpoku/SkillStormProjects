export const Flight = require('../models/flights.models');

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

const findFlightById = async id => {
    try {
        // If no movie is found, this does NOT return a rejected promise. Instead null is returned
        const flight = await Flight.findById(id);
        if (flight == null) {
            throw `No flight with the id of ${id} found.`;
        }
        return flight; // Movie was found and we return it
    } catch (err) {
        console.error(err);
        throw { status: 404, message: err }; // Akin to rejecting a Promise
    }
}


const findAllFlights = async(limit=0) => {
    const flight = await Flight.find();
    return flight;
}

const deleteFlightById = async id => {
    try{
        const flight = await Flight.deleteOne({ _id: id });
        if (flight == null){
            throw `No flight with the id of ${id} found.`;
        }
        return `Flight Deleted`
    }catch(err) {
        console.error(err);
        throw {status: 404, message: err};
    }
}

const updateFlight = async (id, body) => {
    console.log(id);
    console.log(body.flightNumber);
    const updates = {flightNumber: body.flightNumber, departureDate: body.departureDate,arrivalDate: body.arrivalDate,departureTime: body.departureTime,arrivalTime: body.arrivalTime,departureAirport: body.departureAirport,arrivalAirport: body.arrivalAirport,currentNumPassengers: body.currentNumPassengers,passengerLimit: body.passengerLimit}
    try{
        const flight = await Flight.findOneAndUpdate({_id:id},updates, {new: true});
        console.log(flight);                                                  
        await flight.save();
        if (flight == null){
            throw `No flight with the id of ${id} found.`
        }
        return flight;
        //await flight.updateMany({flightNumber: flightNumber, departureDate: departureDate,arrivalDate: arrivalDate,departureTime: departureTime,arrivalTime: arrivalTime,departureAirport: departureAirport,arrivalAirport: arrivalAirport,currentNumPassengers: currentNumPassengers,passengerLimit:passengerLimit});
        //return `Fields updated for flight ${id}`;
    }
    catch(err){
        console.error(err);
        throw {status: 404, message:err};
    }
}
module.exports = {createFlight, findAllFlights, findFlightById, deleteFlightById, deleteFlightById,updateFlight};
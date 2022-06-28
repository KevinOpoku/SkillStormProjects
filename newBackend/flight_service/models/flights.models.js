const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    flightNumber: Number,
    departureDate: Date,
    arrivalDate: Date,
    departureTime: String,
    arrivalTime: String,
    departureAirport: String,
    arrivalAirport: String,
    currentNumPassengers: Number,
    passengerLimit: Number

})

const flight = mongoose.model('Flights', flightSchema, 'Flights');
module.exports = flight;
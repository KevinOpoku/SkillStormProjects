import { useEffect, useState } from 'react';
import axios from 'axios';

export const FlightList = () => {

    const [flights, setFlights] = useState([]);

    // As soon as the component loads, we fetch all movies
    useEffect(() => {
        axios.get('http://localhost:8086/flights')
            .then(res => setFlights(res.data));
    }, []);

    const deleteFlight = async (flightId) =>{
        console.log(flightId)
        const id = flightId;
        //event.preventDefault();
        try{
            await axios.delete(`http://localhost:8086/flights/${id}`);
        }catch(err){
            console.log(err);
        }
       
    }
    return (
        <div>
            {/* Transform the movies array into an array of JSX elements */}
            {flights.map((flight, index) => {
                // For our keys, we should use some unique property for the key value
                // Using index is a last resort if you have nothing else to use
                // Unique ids should be used ONLY if the id was created at time of data creation (It won't change)
                return (
                    <div key={flight._id}>
                        <div><strong>Flight Id: {flight._id}</strong></div>
                        <div><strong>Flight Number: {flight.flightNumber}</strong></div>
                        <div><strong>Departure Date: {flight.departureDate}</strong></div>
                        <div><strong>Arrival Date: {flight.arrivalDate}</strong></div>
                        <div><strong>Number of passengers: {flight.currentNumPassengers}</strong></div>
                        <div><strong>Passenger Limit: {flight.passengerLimit}</strong></div>
                        <button onClick={() => deleteFlight(flight._id)}>Delete Flight</button>
                    </div>
                );
            })}
        </div>
    );
}
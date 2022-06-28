import { useRef } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import './FlightForm.css';

export const CreateFlight = () => {

    const flightNumberRef = useRef();
    const departureDateRef = useRef();
    const arrivalDateRef = useRef();
    const departureTimeRef = useRef();
    const arrivalTimeRef = useRef();
    const departureAirportRef = useRef();
    const arrivalAirportRef = useRef();
    const currentNumPassRef = useRef();
    const flightCapacityRef = useRef();
    //const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await axios.post('http://localhost:8086/flights',
            {   flightNumber: flightNumberRef.current.value,
                departureDate: departureDateRef.current.value,
                arrivalDate: arrivalDateRef.current.value,
                departureTime: departureDateRef.current.value,
                arrivalTime: arrivalTimeRef.current.value,
                departureAirport: departureAirportRef.current.value,
                arrivalAirport: arrivalAirportRef.current.value,
                currentNumPassengers: currentNumPassRef.current.value,
                passengerLimit: flightCapacityRef.current.value });
            //navigate('../', {replace: true});
        }catch(err){
            console.error(err);
            throw {status: 400, message: err};
        }
    }
    
    return (
        
        <form className="MyForm" onSubmit={handleSubmit}>
            <label htmlFor="flightNumber">Flight Number:</label>
            <div>
                <input id="flightNumber" type="number"  ref = {flightNumberRef}/>
            </div>
            <label htmlFor="departureDate">Departure Date: </label>
            <div>
                <input id="departureDate" type="date" ref = {departureDateRef}/>
            </div>
            <label htmlFor="arrivalDate">Arrival Date: </label>
            <div>
                <input id="arrivalDate" type="date" ref = {arrivalDateRef}/>
            </div>
            <label htmlFor="departureTime">Departure Time: </label>
            <div>
                <input id="departureTime" type="time" ref = {departureTimeRef}/>
            </div>
            <label htmlFor="arrivalTime">Arrival Time: </label>
            <div>
                <input id="arrivalTime" type="time" ref = {arrivalTimeRef}/>
            </div>
            <label htmlFor="departureAirport">Departure Airport: </label>
            <div>
                <input id="departureAirport" type="text" ref = {departureAirportRef}/>
            </div>
            <label htmlFor="arrivalAirport">Arrival Airport: </label>
            <div>
                <input id="arrivalAirport" type="text" ref = {arrivalAirportRef}/>
            </div>
            <label htmlFor="currentNumPass">Current Number of Passengers: </label>
            <div>
                <input id="currentNumPass" type="number" ref = {currentNumPassRef}/>
            </div>
            <label htmlFor="flightCapacity">Flight Capacity: </label>
            <div>
                <input id="flightCapacity" type="number" ref = {flightCapacityRef }/>
            </div>
            <input type="submit" value="Add Flight" />
        </form>
        
    )
};

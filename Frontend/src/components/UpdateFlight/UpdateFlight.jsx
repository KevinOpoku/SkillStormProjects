import { useRef } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


export const UpdateFlight = () => {
    const flightIdRef = useRef();
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

    
    const updateFlight = async (flightId) => {

    }
    
    return (
        
        <form className="MyForm" onSubmit={() => updateFlight(flightIdRef)}>
            <label htmlFor="flightId">Flight Id:</label>
            <div>
                <input className="flightId" id="flightId" type="number"  ref = {flightIdRef}/>
            </div>

            <label htmlFor="flightNumber">Flight Number:</label>
            <div>
                <input className="flightInput" id="flightNumber" type="number"  ref = {flightNumberRef}/>
            </div>
            <label htmlFor="departureDate">Departure Date: </label>
            <div>
                <input className="flightInput" id="departureDate" type="date" ref = {departureDateRef}/>
            </div>
            <label htmlFor="arrivalDate">Arrival Date: </label>
            <div>
                <input className="flightInput" id="arrivalDate" type="date" ref = {arrivalDateRef}/>
            </div>
            <label htmlFor="departureTime">Departure Time: </label>
            <div>
                <input className="flightInput" id="departureTime" type="time" ref = {departureTimeRef}/>
            </div>
            <label htmlFor="arrivalTime">Arrival Time: </label>
            <div>
                <input className="flightInput" id="arrivalTime" type="time" ref = {arrivalTimeRef}/>
            </div>
            <label htmlFor="departureAirport">Departure Airport: </label>
            <div>
                <input className="flightInput" id="departureAirport" type="text" ref = {departureAirportRef}/>
            </div>
            <label htmlFor="arrivalAirport">Arrival Airport: </label>
            <div>
                <input className="flightInput" id="arrivalAirport" type="text" ref = {arrivalAirportRef}/>
            </div>
            <label htmlFor="currentNumPass">Current Number of Passengers: </label>
            <div>
                <input className="flightInput" id="currentNumPass" type="number" ref = {currentNumPassRef}/>
            </div>
            <label htmlFor="flightCapacity">Flight Capacity: </label>
            <div>
                <input className="flightInput" id="flightCapacity" type="number" ref = {flightCapacityRef }/>
            </div>
            <input type="submit" value="Update Flight" />
        </form>
        
    )
};

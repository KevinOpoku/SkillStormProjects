import { useRef } from "react";
import {useNavigate} from "react-router-dom";
import {axios} from "axios";
import './FlightForm.css';

export const FlightForm = () => {

    // const flightNumberRef = useRef();
    // const departureDateRef = useRef();
    // const arrivalDateRef = useRef();
    // const departureTimeRef = useRef();
    // const arrivalTimeRef = useRef();
    // const departureAirportRef = useRef();
    // const arrivalAirportRef = useRef();
    // const currentNumPassRef = useRef();
    // const flightCapacityRef = useRef();
    // const navigate = useNavigate();

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try{
    //         await axios.post('http://localhost:8085/flights',
    //         {flightNumber: flightNumberRef.current.value, departureDate: departureDateRef.current.value});
    //         navigate('../', {replace: true});
    //     }catch(error){
    //         console.log('Something went wrong');
    //     }
    // }
    //onSubmit={handleSubmit}
    
    return (
        <>
        <form className="MyForm" > 
            <label htmlFor="flightNumber">Flight Number:</label>
            <div>
                <input id="flightNumber" type="number"  />
            </div>
            <label htmlFor="departureDate">Departure Date: </label>
            <div>
                <input id="departureDate" type="date" />
            </div>
            <label htmlFor="arrivalDate">Arrival Date: </label>
            <div>
                <input id="arrivalDate" type="date" />
            </div>
            <label htmlFor="departureTime">Departure Time: </label>
            <div>
                <input id="departureTime" type="time" />
            </div>
            <label htmlFor="arrivalTime">Arrival Time: </label>
            <div>
                <input id="arrivalTime" type="time" />
            </div>
            <label htmlFor="departureAirport">Departure Airport: </label>
            <div>
                <input id="departureAirport" type="text" />
            </div>
            <label htmlFor="arrivalAirport">Arrival Airport: </label>
            <div>
                <input id="arrivalAirport" type="text" />
            </div>
            <label htmlFor="currentNumPass">Current Number of Passengers: </label>
            <div>
                <input id="currentNumPass" type="number" />
            </div>
            <label htmlFor="flightCapacity">Flight Capacity: </label>
            <div>
                <input id="flightCapacity" type="number"  />
            </div>
            <input type="submit" value="Add Flight" />
        </form>
        </>
    )
};

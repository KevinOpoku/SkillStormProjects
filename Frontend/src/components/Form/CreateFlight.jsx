import { useRef } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import './FlightForm.css';
import { Form, Button } from "react-bootstrap";

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
                departureTime: departureTimeRef.current.value,
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
        <Form onSubmit={handleSubmit} style={{color: "purple"}}>
            <Form.Group className="mb-3">
                <Form.Label>Flight Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Flight Number" ref={flightNumberRef} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Departure Date</Form.Label>
                <Form.Control type="date" placeholder="Enter Departure Date" ref={departureDateRef} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Arrival Date</Form.Label>
                <Form.Control type="date" placeholder="Enter Arrival Date" ref={arrivalDateRef} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Departure Time</Form.Label>
                <Form.Control type="time" placeholder="Enter Departure Time" ref={departureTimeRef} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Arrival Time</Form.Label>
                <Form.Control type="time" placeholder="Enter Arrival Time" ref={arrivalTimeRef} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Departure Airport</Form.Label>
                <Form.Control type="text" placeholder="Enter Departure Airport" ref={departureAirportRef} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Arrival Airport</Form.Label>
                <Form.Control type="text" placeholder="Enter Arrival Airport" ref={arrivalAirportRef} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Current Number of passengers</Form.Label>
                <Form.Control type="number" placeholder="Enter Current Number of passengers" ref={currentNumPassRef} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Flight Capacity</Form.Label>
                <Form.Control type="number" placeholder="Enter Flight Capacity" ref={flightCapacityRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I have reviewed flight information" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
        
       
        
    )
};

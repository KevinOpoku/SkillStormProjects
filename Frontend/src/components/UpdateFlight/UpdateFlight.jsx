import { useRef, } from "react";
import {useForm, FormProvider, useFormContext} from "react-hook-form"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Card, CardGroup, Row, Button, FormGroup, FormLabel } from "react-bootstrap";


export const UpdateFlight = () => {

    const methods = useForm();

    
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

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8086/flights')
            .then(res => setFlights(res.data));
    }, []);

  
    const saveId = async id => {
        const newID = id;
        return updateFlight(newID);
    }


    const updateFlight = async (flightId) => {
        
        console.log(flightId);
        console.log(flightNumberRef);
        const id = flightId;
        
        try{
            await axios.put(`http://localhost:8086/flights/${id}`, {
            flightNumber: flightNumberRef.current.value,
            departureDate: departureDateRef.current.value,
            arrivalDate: arrivalDateRef.current.value,
            departureTime: departureTimeRef.current.value,
            arrivalTime: arrivalTimeRef.current.value,
            departureAirport: departureAirportRef.current.value,
            arrivalAirport: arrivalAirportRef.current.value,
            currentNumPassengers: currentNumPassRef.current.value,
            passengerLimit: flightCapacityRef.current.value });
        }catch(err){
            console.log(err);
        }
    }
    
    return (

        <><div>

            <Form>

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
                </Form.Group>
            </Form>




           
            
        </div>
        <div>
            <CardGroup>
                {flights.map((flight, index) => {
                    return (
                        <Row>
                     <Card className="g-4" bg = "info" style={{width: '25rem', marginLeft: "5rem" }} key={flight._id}>
                         <Card.Body >
                             <Card.Header as="h5" style={{backgroundColor: "orange"}} ><strong><u>Flight ID: {flight._id}</u></strong></Card.Header>
                                 <Card.Text className='cardText'>Flight Number: {flight.flightNumber}</Card.Text>
                                 <Card.Text className='cardText'>Departure Date: {flight.departureDate}</Card.Text>
                                 <Card.Text className='cardText'>Arrival Date: {flight.arrivalDate}</Card.Text>
                                 <Card.Text className='cardText'>Departure Time: {flight.departureTime}</Card.Text>
                                 <Card.Text className='cardText'>Arrival Time: {flight.arrivalTime}</Card.Text>
                                 <Card.Text className='cardText'>Number of passengers: {flight.currentNumPassengers}</Card.Text>
                                 <Card.Text className='cardText'>Passenger Limit: {flight.passengerLimit}</Card.Text>
                                 <Button onClick={() => saveId(flight._id)} style={{backgroundColor: "orange", borderColor: "orange"}}><strong>Update this flight</strong></Button>
                         </Card.Body>
                     </Card>
                     </Row>
                    );
                })}

            </CardGroup>


            </div></>
    )

};

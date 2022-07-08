import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card,  Row, CardGroup } from 'react-bootstrap';
import './FlightList.css';
import React, {useSta} from 'react';
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
            window.alert(`Flight: ${id} has been successfully deleted.`)
        }catch(err){
            console.log(err);
        }
       
    }

  

    return (
        <div >
        <CardGroup>
            
            {/* Transform the movies array into an array of JSX elements
             // For our keys, we should use some unique property for the key value
                // Using index is a last resort if you have nothing else to use
                // Unique ids should be used ONLY if the id was created at time of data creation (It won't change)
            */}
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
                                 <Button onClick={() => deleteFlight(flight._id)} style={{backgroundColor: "orange", borderColor: "orange", color: "black"}}><strong>Delete</strong></Button>
                         </Card.Body>
                     </Card>
                     </Row>
               
          
                   
                );
            })}
            
        </CardGroup>
        

        </div>
        
    );
}
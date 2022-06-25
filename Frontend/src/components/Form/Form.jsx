export const Form = () => {
    return (
        <div>
        <form>
            <label htmlFor="flightManager">Flight Manager Portal: </label>
            <div>
                <label>Flight Number: </label>
                <input id="FlightNumber" type="number"/> 
            </div>
            <div>
                <label>Departure Date: </label>
                <input id="departureDate" type="date" />
            </div>

            <div>
                <label>Arrival Date: </label>
                <input id = "arrivalDate" type="date" />
            </div>
                <label>Departure Time: </label>
                <input type="time" />
            <div>
                <label>Arrival Time</label>
                <input type="time" />
            </div>
            <div>
                <label>Departure Airport: </label>
                <input type="text" />
            </div>
            <div>
                <label>Arrival Airport: </label>
            <input type="text" />
            </div>
            <div>
                <label>Current Number of passengers: </label>
            <input type="number" />
            </div>
            <div>
                <label>Flight Capacity: </label>
            <input type="number" />
            </div>
            <div>
            <input type="submit" value="Finalize" />
            </div>
            
            
            
            
            
            
        </form>
        </div>
    );
}
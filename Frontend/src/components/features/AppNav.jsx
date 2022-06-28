import { useContext } from 'react';
import { useSelector } from 'react-redux';
import ThemeContext from '../contexts/ThemeContext';
import { Nav, NavItem, NavLink, NavSection } from '../Nav';

// This is an opinionated NavBar
export const AppNav = () => {
    //const theme = useContext(ThemeContext); // When the context Provider changes in App.jsx, this component will rerender

    //const { username } = useSelector(store => store);

    return (
        <Nav backgroundColor="Purple">
            <NavSection jc="flex-start">
                <NavItem>
                    Home
                </NavItem>
                <NavItem>
                    <NavLink to="/CreateFlights" transitionColor="#0000FF">Create Flights</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/DisplayFlights" transitionColor="#0000FF">Display Flights</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/DeleteFlights" transitionColor="#0000FF">Delete a Flight</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/UpdateFlights" transitionColor="#0000FF">Update Flights</NavLink>
                </NavItem>
              
            </NavSection>
           
        </Nav>
    );
}
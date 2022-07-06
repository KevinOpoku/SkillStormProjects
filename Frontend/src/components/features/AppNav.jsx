import { useContext } from 'react';
import { useSelector } from 'react-redux';
import ThemeContext from '../contexts/ThemeContext';
import { Navbar, Nav,Container } from 'react-bootstrap';
import './AppNav.css';
//import { Nav, NavItem, NavLink, NavSection } from '../Nav';

// This is an opinionated NavBar
export const AppNav = () => {
    //const theme = useContext(ThemeContext); // When the context Provider changes in App.jsx, this component will rerender

    //const { username } = useSelector(store => store);

    return (
        <>
            <Navbar className='Navbar' bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Generic Flight Service Name</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/CreateFlights">Create Flights</Nav.Link>
                <Nav.Link href="/DisplayFlights">Display Flights</Nav.Link>
                <Nav.Link href="/UpdateFlights">Update Flights</Nav.Link>
                <Nav.Link href="/ErrorPageShowcase">Error Page</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            </>
    );
}
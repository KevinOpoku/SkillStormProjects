import { Center } from '../StyledComponents';
import CEOWOJACK from '../../../src/CEOWOJACK1.jpg';
import './HomePage.css'
export const HomePage = ()=> {

    return(
        <Center>
        <div><Center><h1>Welcome To Generic Flight Services Inc.</h1></Center>
            <div><p className='paragraph'>At <u><strong>GFS</strong></u> we strive to deliver the most pristine services to our esteemed members delivering both a reliable and efficient </p>
                    <p className='paragraph'> software solutions to your ever growing needs. Please consider subscribing to the premium services for: </p>
                    <Center><strike><h3>$49999.99</h3></strike></Center>
                    <Center><h2><strong><i>$19999.99</i></strong></h2></Center>
                <div>
                    <div className = "Div"><Center><h2>Meet The Owner</h2></Center>
                    </div><div><Center><h3 style={{border: "15rem"}}>Dr. Feel  (PHD, MBA, JAVA 8 Certified, enjoys long walks on the beach)</h3></Center></div><div><Center><img src = {CEOWOJACK} padding="25px" border="25px" style={{padding:"25px"}} alt="Hate to see it" /></Center></div>
                    <div>
        <Center><iframe className='map' title= 'Frame1'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1074641051396!2d-77.04253358490807!3d38.89865777957042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bb740de81b%3A0x193018bb6d8db949!2s1730%20Pennsylvania%20Avenue%20NW%2C%20Washington%2C%20DC%2020006!5e0!3m2!1sen!2sus!4v1657232526758!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Center>
        </div>
                </div>
            </div>
        </div>

    

        </Center>
    );
}
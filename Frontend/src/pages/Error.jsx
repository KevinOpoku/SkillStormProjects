import { Center } from '../components/StyledComponents';
import sadFace from '../Sad-Face-Emoji-480x480.png';
import cryingWojak from '../cryingWojak1.png';
export const Error = () => {
    return (
        <Center>
            <h1>Something went horribly wrong, my apologies.</h1>
            <div><img src={cryingWojak} alt="Hate to see it" height={200}/></div>
        </Center>
    );
}
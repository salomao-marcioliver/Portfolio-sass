import Avatar from '../img/photo.jpeg'  

import "../styles/components/sidebar.sass";
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Salomão Marcioliver" />
            <p className="title">Desenvolvedor FullStack</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">Download CV</a>
        </aside>
    )
}

export default Sidebar
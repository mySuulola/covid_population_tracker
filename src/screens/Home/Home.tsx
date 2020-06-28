import React, {useState} from 'react'

import './Home.css'
import Navbar from '../../components/Navbar';


const Home: React.FC = () => {

    const [authState, setInAuthState] = useState(false);

    return (
        <div id="home" className="container-fluid m-0 p-0">
           <Navbar />
           
        </div>
    );

}


export default Home;
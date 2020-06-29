import React from 'react'

import './Home.css'
import Navbar from '../../components/Navbar';
import GameTable from '../../components/GameTable';


const Home: React.FC = () => {

    return (
        <div id="home" className="container-fluid m-0 p-0">
           <Navbar />
           <GameTable />          
        </div>
    );

}

export default Home;
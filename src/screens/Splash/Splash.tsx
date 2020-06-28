import React, { useEffect } from 'react';

import logo from "../../assets/images/logo.svg"


const Splash = ({history}) => {

    useEffect(() => {
        setTimeout(() => history.push('/towers'), 3000)
      }, []);

    return (
        <div className="d-flex justify-content-center align-items-center" style={{
            backgroundColor: 'red',
            minHeight: '100vh'
        }}>
            <img src={logo} width="25%" alt="roobot logo"/>
        </div>
    )
}

export default Splash

import React from 'react';
import { connect } from 'react-redux';
import logo from "../assets/images/logo.svg"
// import bitcoin from "../assets/images/bit.png"
// import eth from "../assets/images/eth.png"
import './css/nav.css';
import Button from '../common/Button';

const Navbar = ({ user, score })  => {
    return (
        <nav className="navbar-light m-0">
            {/* TopBar */}
            <div id="topBar" className="d-none d-lg-flex row justify-content-between m-0">
                <div className="col-8 d-flex justify-content-start" >
                    <a href="/" className="mr-3 pt-2 text-muted" >About</a>
                    <a href="/" className="mr-3 pt-2 text-muted" >Twitter</a>
                    <div className="d-flex align-items-center">
                    <span className="mr-2 mb-2" id="navCircle"></span>
                    <a href="/" className="mr-3 mb-2 text-muted" >  Go Live</a>
                    </div>
                    <a href="/" className="mr-3 pt-2 text-muted" >Free Play</a>
                </div>
                <div className="col-4 pt-2 d-flex justify-content-end">
                    <p className="nav-item text-muted" >Wagers All Time Score</p>
    <p className="nav-item text-white px-3" >{score}</p>
                </div>
            </div>

            {/* DisplayBar */}
            <div id="displayBar" className="card rounded-0 shadow-sm m-0 row justify-content-between pt-3">
                <div className="ml-4 pb-3">
                    <img className="img-fluid" src={logo} alt="roobot logo" />
                </div>

                <div className="d-flex justify-content-start" >
                    <select className="custom-select mr-4">
                        <option value="1" selected>
                            Bitcion
                        </option>
                        <option value="3">
                            ETH Wallet
                        </option>
                    </select>
                    <button className="btn deposit">Deposit</button>
                </div>
                <div className="d-flex justify-content-end">
                    { user.email !== "" ? (<div className="mt-2">
                        <i className="fa fa-bell-slash"></i>
                        <i className="fa fa-ellipsis-v 2x"></i>
                    </div>) : (
                            <div>
                                <Button backgroundColor="transparent" textColor="white" borderColor="#e6bf49" actualText="Login"  />
                                <Button backgroundColor="#e6bf49" textColor="#fff" borderColor="#fff" actualText="Sign Up"  />
                               
                            </div>

                        )}
                </div>
            </div>


        </nav>
    )
}

const mapStateToProps = (state) => ({
    user: state.userData,
    score: state.score
})

const mapDispatchToProps = null



export default connect(mapStateToProps, mapDispatchToProps)(Navbar)




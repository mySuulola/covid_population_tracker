import React from 'react';
import { connect } from 'react-redux';
import './css/nav.css';
import { Button, ButtonModal } from '../common/Button';
import AddEventModal from './AddEventModal';
import { Login } from './Login';

const Navbar = ({ user, score }) => {
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
                    <p className="nav-item text-muted" >Live Event Count</p>
                    <p className="nav-item text-white px-3" >{score}</p>
                </div>
            </div>

            {/* DisplayBar */}
            <div id="displayBar" className="rounded-0 shadow-sm m-0 row justify-content-between pt-3">
                <div className="col-12 col-lg-3 ml-4 pb-3 mt-2 justify-content-center">
                    <h1 className="text-center">COVID-19 Population Check</h1>
                </div>

                <div className="col-12 col-lg-4 d-flex justify-content-center" >
                    <select defaultValue="lagos" className="custom-select mr-4">
                        <option value="lagos">
                            Lagos
                        </option>
                        <option value="oyo">
                            Oyo
                        </option>
                    </select>
                    <button className="btn deposit btn-sm">Search</button>
                </div>
                <div className="col-12 col-lg-4 d-flex justify-content-center py-2">
                    {user.email !== "" ? (
                        <div>
                            <ButtonModal
                                className="addEvent mx-2 btn"
                                backgroundColor="transparent" textColor="white" borderColor="#e6bf49" actualText="Add Event" dataTarget="#addEventModal" />

                            <AddEventModal />
                            <Button
                                className="mx-2 btn"
                                backgroundColor="#e6bf49" textColor="#fff" borderColor="#fff" actualText="Log out" />
                        </div>
                    ) : (
                            <div>
                                <ButtonModal
                                    className="login mx-2 btn"
                                    dataTarget="#login"
                                    backgroundColor="transparent" textColor="white" borderColor="#e6bf49" actualText="Login" />
                                <Login />
                                <ButtonModal
                                    className="register mx-2 btn"
                                    dataTarget="#registerModal"
                                    backgroundColor="#e6bf49" textColor="#fff" borderColor="#fff" actualText="Sign Up" />
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




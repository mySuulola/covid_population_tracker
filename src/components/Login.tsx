import React, {useState} from 'react';
import { connect } from 'react-redux';

import loginImg from '../assets/images/securelogin.svg';
import { updateUserDetail } from '../store/reducer/action';

export const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (loginDetail: React.FormEvent) => {
        props.updateUserDetail(loginDetail);
    }

    return (
        <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div style={{
                    marginTop: '15vh',
                    width: '350px',
                    backgroundColor: '#c9e4ff78'
                }} className="modal-content p-5">
                    <div className="d-flex justify-content-center px-4 pt-3">
                        <h5 className="display-3" id="loginLabel">Login</h5>
                    </div>
                    <div className="modal-body">
                        <div className="row justify-content-center">
                            <img src={loginImg} style={{
                                maxHeight: '80px',
                            }} alt="secure login illustration" />

                        </div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </form>
                        <div className="row justify-content-center mt-3">
                            <button type="button" className="btn btn-primary">Save changes</button>

                        </div>
                    </div>
                    <div className="d-flex justify-content-end p-3">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = null



export default connect(mapStateToProps, {updateUserDetail})(Login)

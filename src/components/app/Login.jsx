import React from "react";
import { useHistory } from "react-router-dom";

import URLMapping from "utils/routes";
import profileImage from "images/profile-image.png";
import "./Login.scss";

export default function Login(props) {
    let history = useHistory();

    const login = () => {
        localStorage.setItem("isLogged", true);
        history.push(URLMapping.HOME);
    };

    return (
        <div className="__project-login">
            <div className="card center-card">
                <img className="profile-image" src={profileImage} alt="Template icon" />
                <form>
                    <div className="form-group">
                        <input className="form-control" placeholder="Username" required autoFocus />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required />
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="remember-me" />
                            <label className="custom-control-label" htmlFor="remember-me">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-block" onClick={login}>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}

import React, { useState } from "react";

import profileImage from "images/profile-image.png";
import "./Login.scss";
import useAuth from "components/hooks/useAuth";

export default function Login(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [input, setInput] = useState({
        "remember-me": false
    });
    const { login } = useAuth();

    const handleInputChange = e => {
        let value;
        if (e.target.type === "checkbox") {
            value = !!e.target.checked;
        } else {
            value = e.target.value;
        }

        setInput({
            ...input,
            [e.currentTarget.name]: value
        });
    };

    const onLogin = async e => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(input["username"], input["password"], input["remember-me"]);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    return (
        <div className="__auth-login">
            <div className="card center-card">
                <img className="profile-image" src={profileImage} alt="Template icon" />
                <form name="login">
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="username"
                            placeholder="Username"
                            required
                            autoFocus
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                name="remember-me"
                                id="remember-me"
                                onChange={handleInputChange}
                            />
                            <label className="custom-control-label" htmlFor="remember-me">
                                Remember me
                            </label>
                        </div>
                    </div> */}
                    {error && (
                        <div className="alert alert-danger">
                            <button type="button" className="close" onClick={() => setError(null)}>
                                &times;
                            </button>
                            <strong>Error!</strong> Invalud user or password.
                        </div>
                    )}
                    <button className="btn btn-primary btn-block" onClick={onLogin}>
                        {loading ? "Loading ..." : "Sign in"}
                    </button>
                </form>
            </div>
        </div>
    );
}

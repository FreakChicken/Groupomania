import React, { useState } from "react";
import axios from "axios";

import "./UserSignup.scss";

function UserSignup() {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        e.preventDefault();

        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        e.preventDefault();

        setPassword(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:4200/api/user/signup`, { email, password })
            .then((res) => {
                // console.log(res);
                // console.log(res.data);
            });
    };

    return (
        <div>
            <h1>Inscription</h1>
            <div>
                <form id="signupForm" onSubmit={submitForm}>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            placeholder="Veuillez saisir votre email"
                            onChange={handleEmailChange}
                        />
                    </label>
                    <label>
                        Password :
                        <input
                            type="password"
                            name="password"
                            placeholder="Veuillez saisir un mot de passe"
                            onChange={handlePasswordChange}
                        />
                    </label>
                    <button type="submit">Valider</button>
                </form>
            </div>
        </div>
    );
}

export default UserSignup;

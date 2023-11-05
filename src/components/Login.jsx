import React, { useState } from "react";
import STATES from "../States";
import Input from "./Input";
import WideButton from "./WideButton";
import { isAuthenticated, login } from "../services/accountService";

const Login = ({ setDisplay }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-5xl text-primary m-10">Log In</div>
            <Input
                label="Email"
                onChange={(e) => {
                    setEmail(e.currentTarget.value);
                }}
            ></Input>
            <Input
                label="Password"
                onChange={(e) => {
                    setPassword(e.currentTarget.value);
                }}
            ></Input>
            {error && <div className="text-sm text-red-500">Wrong username or password</div>}
            <div className="m-10">
                <WideButton
                    text="Continue"
                    onclick={() => {
                        login(email, password);
                        setTimeout(() => {
                            if (isAuthenticated()) {
                                setDisplay(STATES.HOME);
                            } else {
                                setError(true);
                            }
                        }, 400);
                    }}
                ></WideButton>
            </div>
        </div>
    );
};

export default Login;

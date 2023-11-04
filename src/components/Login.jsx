import React from "react";
import STATES from "../States";
import Input from "./Input";
import WideButton from "./WideButton";

const Login = ({ setDisplay }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-5xl text-primary m-10">Log In</div>
            <Input label="Email"></Input>
            <Input label="Password"></Input>
            <div className="m-10">
                <WideButton
                    text="Continue"
                    onclick={() => {
                        setDisplay(STATES.HOME);
                    }}
                ></WideButton>
            </div>
        </div>
    );
};

export default Login;

import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import STATES from "../States";
import { createAccount, isAuthenticated } from "../services/accountService";

const CreateAccount = ({ setDisplay }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-5xl text-primary m-10">Create An Account</div>

            <div className="flex flex-row w-full justify-center space-x-28">
                <div className="flex flex-col">
                    <Input
                        label="First Name"
                        onChange={(e) => {
                            setFirstName(e.currentTarget.value);
                        }}
                    ></Input>
                    <Input
                        label="Last Name"
                        onChange={(e) => {
                            setLastName(e.currentTarget.value);
                        }}
                    ></Input>
                    <Input
                        label="Email"
                        onChange={(e) => {
                            setEmail(e.currentTarget.value);
                        }}
                    ></Input>
                </div>
                <div className="flex flex-col">
                    <Input
                        label="Password"
                        onChange={(e) => {
                            setPassword(e.currentTarget.value);
                        }}
                    ></Input>
                    <Input
                        label="Confirm Password"
                        onChange={(e) => {
                            setConfirmPassword(e.currentTarget.value);
                        }}
                    ></Input>
                </div>
            </div>
            {error == 1 && <div className="text-sm text-red-600">Please fill in all inputs</div>}
            {error == 2 && <div className="text-sm text-red-600">Passwords do not match</div>}
            {error == 3 && <div className="text-sm text-red-600">Email already used</div>}

            <div className="m-5">
                <Button
                    text="Create Account"
                    onclick={() => {
                        if (firstName == "" || (lastName == "") | (email == "") || password == "" || confirmPassword == "") {
                            setError(1);
                        } else if (password != confirmPassword) {
                            setError(2);
                        } else if (isAuthenticated()) {
                            setDisplay(STATES.CHOOSE_LEVEL);
                        } else {
                            createAccount(firstName, lastName, email, password, 0);
                            setTimeout(() => {
                                setError(3);
                            }, 200);
                        }
                    }}
                ></Button>
            </div>
        </div>
    );
};

export default CreateAccount;

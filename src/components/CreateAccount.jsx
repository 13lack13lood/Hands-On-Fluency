import React from "react";
import Input from "./Input";
import Button from "./Button";
import STATES from "../States";

const CreateAccount = ({ setDisplay }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-5xl text-primary m-10">Create An Account</div>

            <div className="flex flex-row w-full justify-center space-x-28">
                <div className="flex flex-col">
                    <Input label="First Name"></Input>
                    <Input label="Last Name"></Input>
                    <Input label="Email"></Input>
                </div>
                <div className="flex flex-col">
                    <Input label="Password"></Input>
                    <Input label="Confirm Password"></Input>
                </div>
            </div>

            <div className="m-5">
                <Button
                    text="Create Account"
                    onclick={() => {
                        setDisplay(STATES.CHOOSE_LEVEL);
                    }}
                ></Button>
            </div>
        </div>
    );
};

export default CreateAccount;

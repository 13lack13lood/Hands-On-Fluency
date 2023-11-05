import React from "react";
import STATES from "../States";
import Button from "./Button";
import icon from "../assets/mainImage.png";
import { isAuthenticated } from "../services/accountService";

const FrontPage = ({ setDisplay }) => {
    return (
        <div className="flex flex-row w-full h-full justify-center items-center">
            <div className="">
                <img src={icon} className="ml-20" alt="" />
            </div>
            <div className="flex flex-col w-full h-full justify-evenly items-center">
                <div className="text-6xl text-primary font-extrabold tracking-wide text-center leading-snug m-20 mb-24">The free, fun, and effective way to learn sign language!</div>

                <Button
                    text="Get Started"
                    onclick={() => {
                        if (isAuthenticated()) {
                            setDisplay(STATES.HOME);
                        } else {
                            setDisplay(STATES.CREATE_ACCOUNT);
                        }
                    }}
                ></Button>
            </div>
        </div>
    );
};

export default FrontPage;

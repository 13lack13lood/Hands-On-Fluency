import React from "react";
import STATES from "../States";
import Button from "./Button";

const FrontPage = ({ setDisplay }) => {
    return (
        <div className="flex flex-col w-full h-full justify-evenly items-center">
            <div className="text-6xl text-primary font-extrabold w-1/2 tracking-wide text-center leading-snug m-20">The free, fun, and effective way to learn language!</div>

            <Button text="Get Started" onclick={() => setDisplay(STATES.CREATE_ACCOUNT)}></Button>
        </div>
    );
};

export default FrontPage;

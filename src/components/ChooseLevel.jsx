import React from "react";
import WideButton from "./WideButton";
import STATES from "../States";

const ChooseLevel = ({ setDisplay }) => {
    return (
        <div className="flex flex-col flex-grow-0 flex-shrink-0  justify-center items-center min-w-full">
            <div className="text-5xl text-primary m-10">Choose Your Current Level</div>
            <div className="flex flex-row flex-grow-0 flex-shrink-0 justify-evenly w-full">
                <div className="flex flex-col items-start space-y-10 ">
                    <WideButton
                        text="Beginner"
                        onclick={() => {
                            setDisplay(STATES.HOME);
                        }}
                    ></WideButton>
                    <WideButton
                        text="Intermediate"
                        onclick={() => {
                            setDisplay(STATES.HOME);
                        }}
                    ></WideButton>
                    <WideButton
                        text="Advanced"
                        onclick={() => {
                            setDisplay(STATES.HOME);
                        }}
                    ></WideButton>
                </div>
                <div className="flex flex-col justify-evenly items-start text-xl text-primary font-medium space-y-10">
                    <div className="">I don't know any sign language at all.</div>
                    <div className="">I know the alphabet and some basic phrases.</div>
                    <div className="">I can somewhat communicate in sign language.</div>
                </div>
            </div>
        </div>
    );
};

export default ChooseLevel;

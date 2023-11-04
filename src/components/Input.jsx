import React from "react";
import "../styles/Input.css";

const Input = ({ label }) => {
    return (
        <div className="">
            <div className="text-md text-primary ">{label}</div>

            <div className="outside ">
                <input className="effect" type="text" placeholder=""></input>

                <span className="focus-border">
                    <i></i>
                </span>
            </div>
        </div>
    );
};

export default Input;

import React from "react";
import "../styles/Button.css";

const Button = ({ text, onclick }) => {
    return (
        <button className="button type1" onClick={() => onclick()}>
            <span className="text-xl font-semibold z-1 tracking-wider">{text}</span>
        </button>
    );
};

export default Button;

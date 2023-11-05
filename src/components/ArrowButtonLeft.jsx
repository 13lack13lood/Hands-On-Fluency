import React from "react";
import "../styles/ArrowButtonLeft.css";

const ArrowButtonLeft = ({ text, onclick }) => {
    return (
        <button className="arrow-button-left h-[40px]" onClick={() => onclick()}>
            <span className="arrow-left"></span>
            {text}
        </button>
    );
};

export default ArrowButtonLeft;

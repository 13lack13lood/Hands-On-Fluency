import React from "react";
import "../styles/ArrowButtonRight.css";

const ArrowButtonRight = ({ text, onclick }) => {
    return (
        <button className="arrow-button-right h-[40px] ml-5" onClick={() => onclick()}>
            {text}
            <span className="arrow-right"></span>
        </button>
    );
};

export default ArrowButtonRight;

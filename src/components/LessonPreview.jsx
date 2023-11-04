import React from "react";
import Button from "./Button";
import STATES from "../States";

const LessonPreview = ({ buttonText, description, completed }) => {
    return (
        <div className="grid grid-cols-3 gap-4 max-w-[80%]">
            <Button text={buttonText}></Button>
            <div className="flex flex-col justify-center items-center text-m">{description}</div>
            <div className="flex flex-col justify-center items-center text-6xl text-primary">{completed ? "✓" : "-"}</div>
        </div>
    );
};

export default LessonPreview;

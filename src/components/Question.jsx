import React from "react";

const Question = ({ questionNumber }) => {
    return (
        <div className="grid grid-cols-4 w-full h-full">
            <div className="grid col-span-1 border-r-[2.5px] border-primary">
                <div className="text-3xl text-primary text-center font-semibold my-8 transition ease-in-out hover:scale-125 duration-200">Video</div>
                <hr className="h-px bg-primary border-0 my-6 w-3/4 mx-auto"></hr>
                <div className="text-3xl text-primary text-center font-semibold my-8 transition ease-in-out hover:scale-125 duration-200">Flashcard</div>
                <hr className="h-px bg-primary border-0 my-6 w-3/4 mx-auto"></hr>
                <div className="text-3xl text-primary text-center font-semibold my-8 transition ease-in-out hover:scale-125 duration-200">Quiz</div>
            </div>
            <div className="grid col-span-3 border-l-[2.5px] border-primary"></div>
        </div>
    );
};

export default Question;

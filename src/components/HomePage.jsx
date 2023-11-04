import React from "react";
import Button from "./Button";
import STATES from "../States";
import WideButton from "./WideButton";
import LessonPreview from "./LessonPreview";

const HomePage = ({ setDisplay }) => {
    return (
        <div className="flex flex-col justify-evenly items-center m-10 space-y-10 h-full">
            <div className="text-6xl text-primary ">Welcome!</div>
            <WideButton text="Daily Excercise"></WideButton>
            <div className="text-3xl text-primary font-medium mt-10">Choose what to learn</div>
            <LessonPreview buttonText="Lesson 1" description="Learn the basic letters and the alphabet in sign language" completed={true}></LessonPreview>
            <LessonPreview buttonText="Lesson 2" description="Learn the basic letters and the alphabet in sign language" completed={false}></LessonPreview>
            <LessonPreview buttonText="Lesson 3" description="Learn the basic letters and the alphabet in sign language" completed={false}></LessonPreview>
        </div>
    );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import FlipCard from "./FlipCard";
import ArrowButtonRight from "./ArrowButtonRight";
import ArrowButtonLeft from "./ArrowButtonLeft";
import WebCamCapture from "./WebCamCapture";
import WideButton from "./WideButton";
import STATES from "../States";

const Lesson = ({ number, setDisplay }) => {
    const [selected, setSelected] = useState("video");
    const [currentFlashCard, setcurrentFlashCard] = useState(97);
    const [submitted, setSubmitted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState([]);

    const phraseList = ["hello", "no", "yes", "thanks", "i_love_you"];

    useEffect(() => {
        if (number == 1) {
            setcurrentFlashCard(970);
            setQuestions([
                "B",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "O",
                "P",
                "Q",
                "R",
                "T",
                "W",
                "Y",
            ]);
        } else if (number == 2) {
            setcurrentFlashCard(100);
            setQuestions(["Hello", "Thanks", "I Love You"]);
        }
    }, []);

    const flashCardText = (number) => {
        if (number == 1) {
            return String.fromCharCode(((currentFlashCard - 1) % 26) + 97);
        } else if (number == 2) {
            return phraseList[currentFlashCard % 5];
        } else {
        }
    };

    const renderFlashCards = () => {
        return (
            <div className="grid grid-cols-5 w-full h-full">
                {" "}
                <div className="grid col-span-1 ml-7">
                    {" "}
                    <div className="flex flex-col items-center justify-center">
                        {" "}
                        <ArrowButtonLeft
                            text="Previous"
                            onclick={() => {
                                setcurrentFlashCard(currentFlashCard - 1);
                            }}
                        ></ArrowButtonLeft>{" "}
                    </div>{" "}
                </div>{" "}
                <div className="grid col-span-3">
                    {" "}
                    <div className="flex flex-col items-center justify-center">
                        {" "}
                        <FlipCard text={flashCardText(number)}></FlipCard>{" "}
                    </div>{" "}
                </div>{" "}
                <div className="grid col-span-1 mr-7">
                    {" "}
                    <div className="flex flex-col items-center justify-center">
                        {" "}
                        <ArrowButtonRight
                            text="Next"
                            onclick={() => {
                                setcurrentFlashCard(currentFlashCard + 1);
                            }}
                        ></ArrowButtonRight>{" "}
                    </div>{" "}
                </div>
            </div>
        );
    };

    const renderVideo = () => {
        if (number == 1) {
            return (
                <iframe
                    className="w-[80%] h-full"
                    src="https://www.youtube.com/embed/dhWk-nkdeck?list=TLGGanepkpWsvT0wNTExMjAyMw"
                ></iframe>
            );
        } else {
            return (
                <iframe
                    className="w-[80%] h-full"
                    src="https://www.youtube.com/embed/v1desDduz5M"
                ></iframe>
            );
        }
    };

    return (
        <div className="flex flex-col justify-center items-center w-full h-full m-10 space-y-8">
            {" "}
            <div className="text-4xl text-primary text-center font-semibold tracking-wider">
                Lesson {number}
            </div>{" "}
            <div className="grid grid-cols-4 w-full h-full">
                {" "}
                <div className="grid col-span-1 border-r-[2.5px] border-primary">
                    {" "}
                    <div
                        className="text-3xl text-primary text-center font-semibold my-8 transition ease-in-out hover:scale-125 duration-200"
                        onClick={() => {
                            setSelected("video");
                        }}
                    >
                        {" "}
                        Video{" "}
                    </div>{" "}
                    <hr className="h-px bg-primary border-0 my-6 w-3/4 mx-auto"></hr>{" "}
                    <div
                        className="text-3xl text-primary text-center font-semibold my-8 transition ease-in-out hover:scale-125 duration-200"
                        onClick={() => {
                            setSelected("flashcard");
                        }}
                    >
                        {" "}
                        Flashcard{" "}
                    </div>{" "}
                    <hr className="h-px bg-primary border-0 my-6 w-3/4 mx-auto"></hr>{" "}
                    <div
                        className="text-3xl text-primary text-center font-semibold my-8 transition ease-in-out hover:scale-125 duration-200"
                        onClick={() => {
                            setSelected("quiz");
                            setSubmitted(null);
                        }}
                    >
                        {" "}
                        Quiz{" "}
                    </div>{" "}
                </div>{" "}
                <div className="grid col-span-3 border-l-[2.5px] border-primary">
                    {" "}
                    <div className="flex justify-center">
                        {console.log(typeof submitted)}
                        {console.log()}
                        {selected == "video" && renderVideo()}{" "}
                        {selected == "flashcard" && renderFlashCards()}{" "}
                        {selected == "quiz" &&
                            (typeof submitted == typeof "B" ? (
                                <div className="flex flex-col h-full items-center text-5xl font-medium text-primary mt-24">
                                    {submitted == questions[currentQuestion]
                                        ? "Correct"
                                        : `Wrong, you put ${submitted}`}
                                    <div className="mt-20">
                                        <WideButton
                                            text={
                                                currentQuestion + 1 <
                                                questions.length
                                                    ? "Next"
                                                    : "Finish"
                                            }
                                            onclick={() => {
                                                setSubmitted(null);

                                                if (
                                                    currentQuestion + 1 <
                                                    questions.length
                                                ) {
                                                    setCurrentQuestion(
                                                        currentQuestion + 1
                                                    );
                                                } else {
                                                    setDisplay(STATES.HOME);
                                                }
                                            }}
                                        ></WideButton>
                                    </div>
                                </div>
                            ) : (
                                <div className="">
                                    <div className="flex flex-col text-primary text-4xl items-center font-semibold mr-32">{`What is ${questions[currentQuestion]}`}</div>
                                    <WebCamCapture
                                        setSubmitted={setSubmitted}
                                    ></WebCamCapture>
                                </div>
                            ))}{" "}
                    </div>{" "}
                </div>{" "}
            </div>
        </div>
    );
};

export default Lesson;

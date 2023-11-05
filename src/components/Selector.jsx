import React from "react";
import STATES from "../States";
import CreateAccount from "./CreateAccount";
import FrontPage from "./FrontPage";
import { useState } from "react";
import ChooseLevel from "./ChooseLevel";
import Login from "./Login";
import HomePage from "./HomePage";
import Lesson from "./Lesson";

const Selector = ({ display, setDisplay }) => {
    if (display == STATES.CREATE_ACCOUNT) {
        return <CreateAccount setDisplay={setDisplay}></CreateAccount>;
    } else if (display == STATES.CHOOSE_LEVEL) {
        return <ChooseLevel setDisplay={setDisplay}></ChooseLevel>;
    } else if (display == STATES.SIGN_IN) {
        return <Login setDisplay={setDisplay}></Login>;
    } else if (display == STATES.HOME) {
        return <HomePage setDisplay={setDisplay}></HomePage>;
    } else if (display >= STATES.LESSON_1) {
        return <Lesson number={display - STATES.LESSON_1 + 1} setDisplay={setDisplay}></Lesson>;
    } else {
        return <FrontPage setDisplay={setDisplay}></FrontPage>;
    }
};

export default Selector;

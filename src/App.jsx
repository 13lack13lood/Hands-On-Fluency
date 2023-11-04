import { useState } from "react";
import Button from "./components/Button";
import STATES from "./States";
import NavBar from "./components/NavBar";
import Selector from "./components/Selector";

function App() {
    const [display, setDisplay] = useState(STATES.FRONT_PAGE);

    return (
        <div className=" min-w-fit w-full h-full">
            <NavBar setDisplay={setDisplay}></NavBar>
            <div className="flex justify-center items-center min-h-[85%] w-full">
                <Selector display={display} setDisplay={setDisplay}></Selector>
            </div>
        </div>
    );
}

export default App;

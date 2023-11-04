import { useState } from "react";
import Button from "./components/Button";
import STATES from "./States";
import NavBar from "./components/NavBar";

function App() {
    const [currentDisplay, setCurrentDisplay] = useState(STATES.FRONT_PAGE);

    return (
        <div className=" min-w-fit w-full h-full absolute">
            <NavBar></NavBar>
            <div className="flex flex-col w-full h-[70%] justify-evenly items-center">
                <div className="text-6xl text-primary font-extrabold w-1/2 tracking-wide text-center leading-snug">The free, fun, and effective way to learn language!</div>

                <Button text="Get Started"></Button>
            </div>
        </div>
    );
}

export default App;

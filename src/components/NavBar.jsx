import React from "react";
import STATES from "../States";
import icon from "../assets/icon.png";
import { isAuthenticated } from "../services/accountService";

const NavBar = ({ setDisplay }) => {
    return (
        <nav className="border-gray-200 bg-primary">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div
                    onClick={() => {
                        setDisplay(STATES.FRONT_PAGE);
                    }}
                    className="flex items-center"
                >
                    <img src={icon} className="h-16 mr-6 mb-0" alt="Logo" />
                    <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">Hands-On Fluency</span>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col text-xl font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-12 md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <div
                                onClick={() => {
                                    if (isAuthenticated()) {
                                        setDisplay(STATES.HOME);
                                    } else {
                                        setDisplay(STATES.FRONT_PAGE);
                                    }
                                }}
                                className="block py-4 px-3 text-white  transition ease-in-out hover:scale-125 duration-200"
                            >
                                Home
                            </div>
                        </li>

                        <li>
                            <div className="block py-4 px-3 text-white  transition ease-in-out hover:scale-125 duration-200">Contact</div>
                        </li>
                        <li>
                            <div
                                onClick={() => {
                                    setDisplay(STATES.SIGN_IN);
                                }}
                                className="block py-4 px-3 text-white  transition ease-in-out hover:scale-125 duration-200"
                            >
                                Login
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

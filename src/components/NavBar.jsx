import React from "react";

const NavBar = () => {
    return (
        <nav className="border-gray-200 bg-primary">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                <div className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Logo" />
                    <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">Title</span>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col text-lg font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-12 md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <div className="block py-4 pl-6 pr-6 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Home</div>
                        </li>

                        <li>
                            <div className="block py-4 pl-6 pr-6 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</div>
                        </li>
                        <li>
                            <div className="block py-4 pl-6 pr-6 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Login</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

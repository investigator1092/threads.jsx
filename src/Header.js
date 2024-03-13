import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/" className="no-underline text-black">
                <h1 className="text-xl p-4 border-b-4 border border-gray-800 border- font-bold">Threads.jsx</h1>
            </Link>
        </header>
    );
};

export default Header;
"use client";

import React from "react";
import Navigation from "../Navigation";

const HomeComponent = () => {
    return (
        <section className="w-full">
            <Navigation />
            <h1 className="font-bold text-black leading-5 text-2xl bg-white px-5 py-3 rounded mt-40">
                This is
                <span className="text-pink-400 ml-2">Home</span>
            </h1>
        </section>
    );
};
export default HomeComponent;

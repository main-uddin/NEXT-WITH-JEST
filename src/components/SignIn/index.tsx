"use client";

import React from "react";
import Navigation from "../Navigation";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignIn = () => {
    const { push } = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            userName: event?.currentTarget?.userName?.value,
            password: event?.currentTarget?.password?.value,
        };

        try {
            const { data } = await axios.post("/api/auth/signin", payload);
            // alert(JSON.stringify(data));
            push('/protected')
        } catch (e) {
            alert(JSON.stringify(e));
        }
    };

    return (
        <section className="w-full">
            <Navigation />
            <div className="w-full flex justify-center items-center mt-20">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 w-96 bg-gray-400 py-5 px-2 rounded-md"
                >
                    <h3 className="text-center text-2xl font-bold">Sign in</h3>
                    <input
                        className="text-black rounded px-2 py-2"
                        type="text"
                        placeholder="Name here"
                        name="userName"
                        id="userName"
                    />
                    <input
                        className="text-black rounded px-2 py-2"
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                    />
                    <div className="w-full flex justify-center items-center">
                        <button
                            type="submit"
                            className="bg-pink-400 w-6/12 rounded-md py-2"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
export default SignIn;

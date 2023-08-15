"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

interface Props {
    children: ReactNode;
}

interface UserResponse {
    user: string | null;
    error: AxiosError | null;
}

const getUser = async (): Promise<UserResponse> => {
    try {
        const { data } = await axios.get("/api/auth/me");
        return {
            user: data,
            error: null,
        };
    } catch (e) {
        const error = e as AxiosError;
        return {
            user: null,
            error,
        };
    }
};

const AuthLayout: React.FC<Props> = ({ children }) => {
    const [loading] = useState(false);
    const { push } = useRouter();
    useEffect(() => {
        const getUserData = async () => {
            const { error } = await getUser();
            if (error) {
                push("sign-in");
            }
        };
        getUserData();
    }, []);

    if (!loading)
        return (
            <div className="flex justify-center items-center mt-[40%]">
                <h1>LOADING.....</h1>{" "}
            </div>
        );

    return <>{children}</>;
};

export default AuthLayout;

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navigation = () => {
    const { push } = useRouter();

    return (
        <section className="flex justify-between items-center bg-gray-700 px-3 py-4">
            <div className="text-2xl font-black">TESTING...</div>
            <ul className="flex justify-start items-center gap-2">
                <li className="cursor-pointer hover:text-gray-300 ease-linear">
                    <Link href="/">HOME</Link> |
                </li>
                <li className="cursor-pointer hover:text-gray-300 ease-linear">
                    <Link href="/testing-components">TESTING-COMPONENTS</Link> |
                </li>
                <li className="cursor-pointer hover:text-gray-300 ease-linear">
                    <Link href="/protected">PROTECTED</Link>
                </li>
            </ul>
            <div className="">
                <button
                    className="bg-gray-400 py-1 px-2 rounded text-white"
                    onClick={() => {
                        push("/sign-in");
                    }}
                >
                    SIGN IN
                </button>
            </div>
        </section>
    );
};
export default Navigation;

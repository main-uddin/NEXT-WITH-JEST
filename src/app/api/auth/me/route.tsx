import { verify } from "jsonwebtoken";
import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = cookies();
    const token = cookieStore.get("OutSiteJWT");

    if (!token) {
        return NextResponse.json(
            {
                message: "Unauthenticated!",
            },
            { status: 401 }
        );
    }

    const secret = process.env.JWT_SECRET || "";
    const { value } = token;

    try {
        verify(value, secret);
        const respose = {
            user: "Authenticated user!",
        };

        return new Response(JSON.stringify(respose), { status: 200 });
    } catch (error) {
        return NextResponse.json(
            {
                message: "Unauthenticated!",
            },
            { status: 401 }
        );
    }
}

import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const MAX_AGE = 60 * 60 * 24 * 30;

export async function POST(request: Request) {
    const body = await request.json();
    const { userName, password } = body;

    if (userName !== "admin" || password !== "admin") {
        return NextResponse.json(
            {
                message: "Unauthenticated!",
            },
            { status: 401 }
        );
    }

    const secret = process.env.JWT_SECRET || "";

    const token = sign({ userName }, secret, { expiresIn: MAX_AGE });

    const serialized = serialize("OutSiteJWT", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: MAX_AGE,
        path: "/",
    });

    // or we can use res object
    return new Response(JSON.stringify({ message: "Authenticated!" }), {
        status: 200,
        headers: { "Set-Cookie": serialized },
    });
}

// res.setHeader('Set-Cookie', serialize('OutSiteJWT', req.query.token as string, { path: '/' }));
// res.status(200).json({ message: 'Cookies set successfully' });

import { NextRequest } from "next/server";
import { verify } from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try {
        const secret = process.env.JWT_SECRET || "";
        const token = request.cookies.get("OutSiteJWT")?.value || "";
        const decodedToken = verify(token, secret);
        return decodedToken;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

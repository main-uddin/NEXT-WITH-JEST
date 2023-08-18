import { getDataFromToken } from "@/helper/getTokenData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const userData: any = await getDataFromToken(request);
        return NextResponse.json({
            message: "user found",
            data: { userName: userData?.userName },
            status: 200,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}

import { google } from "googleapis";
import { NextResponse } from "next/server";

type SheetForm = {
    name: string;
    email: string;
    message: string;
};

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as SheetForm;

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(
                    /\\n/g,
                    "\n"
                ),
            },
            scopes: [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
                "https://www.googleapis.com/auth/spreadsheets",
            ],
        });

        const sheet = google.sheets({ auth, version: "v4" });

        const response = await sheet.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "A1:D1",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        body.name,
                        body.email,
                        body.message,
                        new Date().toISOString(),
                    ],
                ],
            },
        });

        return NextResponse.json({ success: true, data: response.data });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Something went wrong";
        return NextResponse.json({ success: false, message }, { status: 500 });
    }
}

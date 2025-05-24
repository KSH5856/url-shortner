import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db('linkslicer')
    const collection = db.collection('url')
    const data = await collection.findOne({
        shortUrl: body.shortUrl
    })

    if (data) {
        return NextResponse.json({ success: false, error: true, message: 'URL already present' })
    }
    await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    })

    return NextResponse.json({ success: true, error: false, message: 'URL generated successfully' })
}
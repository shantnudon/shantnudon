import { uri } from "@/utils/db";
import { Bookmarks } from "@/utils/model/bookmarks";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(uri)
    const data = await Bookmarks.find()
    return NextResponse.json(data);
}
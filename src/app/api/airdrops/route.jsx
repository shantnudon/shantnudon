import { uri } from "@/utils/db";
import { Airdrops } from "@/utils/model/airdrops";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(uri)
    const data = await Airdrops.find()
    return NextResponse.json(data);
}
import mongoose from "mongoose";

const airdropsModel = new mongoose.Schema({ name: String, url: String, image:String });

export const Airdrops = mongoose.models.airdrops || mongoose.model("airdrops", airdropsModel);

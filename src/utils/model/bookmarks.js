import mongoose from "mongoose";

const bookmarksModel = new mongoose.Schema({ name: String, url: String, image:String });

export const Bookmarks = mongoose.models.bookmarks || mongoose.model("bookmarks", bookmarksModel);

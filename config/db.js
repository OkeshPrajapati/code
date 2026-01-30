import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    let res = await mongoose.connect("mongodb://okeshprajapati920_db_user:v49rIHgfEsjDYBds@crud.b7zskmf.mongodb.net/day-1");
    // let res = await mongoose.connect("mongodb://localhost:27017/day-1");
    if (res) {
      console.log("mongodb Connected");
    }
  } catch (error) {
    console.log("error while connecting db", error);
  }
};
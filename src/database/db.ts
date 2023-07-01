import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const db = mongoose.connect('mongodb://127.0.0.1:27017/school')
  .then(() => console.log("Connect"))
  .catch(() => console.log("not connected"));

export default db;

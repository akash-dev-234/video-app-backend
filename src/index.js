//connect db using mongoose
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

//this is immediately invoked function common syntax used for connecting db(old way)

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error:", (err) => {
//       console.log("ERR", err);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (err) {
//     console.log("ERROR:", err);
//   }
// })();

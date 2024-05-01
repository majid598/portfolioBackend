const express = require("express");
const Router = require("./Routes/Contact");
const connectDB = require("./utils/Db");
const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://portfolio-nine-snowy-67.vercel.app",
      "https://codewithraju.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", Router);

connectDB();
app.listen(PORT, () => {
  console.log(`server is running at port number ${PORT}`);
});

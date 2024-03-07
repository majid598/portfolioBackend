const express = require("express");
const Router = require("./Routes/Contact");
const connectDB = require("./utils/Db");
const app = express();
const PORT = 5000;
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.use("/api/auth", Router);

connectDB()
  app.listen(PORT, () => {
    console.log(`server is running at port number ${PORT}`);
  });


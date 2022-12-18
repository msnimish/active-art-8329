let express = require("express");
let cors = require("cors");
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/user.routes");

let app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Testing");
});

app.use("/user", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connection to DB successful!");
    console.log(
      `listening to port ${process.env.PORT} at http://localhost:${process.env.PORT}`
    );
  } catch (err) {
    console.log(err);
    console.log("Connection to DB failed");
  }
});

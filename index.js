const express = require("express");
const cors = require("cors");
const database = require("./databaseConnection/database");
const userRouter = require("./routes/user.routes");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.listen(PORT, () => console.log("server started on post ${PORT}"));
database.initialize();
app.use(express.json());
app.use("/api", userRouter);
app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://romanpolianski.github.io", "http://127.0.0.1:5173"],
  })
);
app.use("/api", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

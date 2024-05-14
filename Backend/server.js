const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB (replace YOUR_MONGODB_URI with your actual MongoDB URI)
mongoose
  .connect(
    "mongodb+srv://abdullahbinrafique945:sF37JBI2Lnp2TCFp@cluster0.onavzhy.mongodb.net/demo-sapp?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello, World!" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

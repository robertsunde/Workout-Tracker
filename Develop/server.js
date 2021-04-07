const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/workout", {
// useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/apiroutes"));
app.use(require("./routes/main"));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// 
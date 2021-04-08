const router = require("express").Router();
const path = require("path");


// router for connecting exercise.html to /exercise route.
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// router for connecting stats.html too /stats route.
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
module.exports = router;
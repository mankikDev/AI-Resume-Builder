const express = require("express");
const router = express.Router();

const {
  createResume,
  getUserResumes,
} = require("../controllers/resumeController");

router.post("/create", createResume);

router.get(
  "/user/:userId",
  getUserResumes
);

module.exports = router;
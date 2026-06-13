const Resume = require("../models/Resume");

const createResume = async (req, res) => {
  try {
    const resume = await Resume.create(req.body);

    res.status(201).json({
      message: "Resume Saved",
      resume,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUserResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({
      user: req.params.userId,
    });

    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createResume,
  getUserResumes,
};
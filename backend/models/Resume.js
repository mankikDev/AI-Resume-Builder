const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    fullName: String,
    email: String,
    phone: String,
    linkedin: String,
    github: String,
    summary: String,
    education: String,
    skills: String,
    experience: String,
    projects: String,
    certifications: String,
    languages: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Resume",
  resumeSchema
);
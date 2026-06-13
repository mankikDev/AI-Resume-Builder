import { useState, useEffect } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import toast from "react-hot-toast";

function ResumeForm() {
 const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  summary: "",
  education: "",
  skills: "",
  experience: "",
  projects: "",
  certifications: "",
  languages: "",
  photo: "",
  career: "",
};

const [formData, setFormData] = useState(() => {
  const saved = localStorage.getItem("resume");
  return saved ? JSON.parse(saved) : initialFormData;
});

  const [resume, setResume] = useState(null);
  const [score, setScore] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [template, setTemplate] = useState("modern");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 useEffect(() => {
  const isEmpty =
    !formData.fullName &&
    !formData.email &&
    !formData.phone;

  if (!isEmpty) {
    localStorage.setItem(
      "resume",
      JSON.stringify(formData)
    );
  }
}, [formData]);

  const handleSubmit = async (e) => {
    const user = JSON.parse(
  localStorage.getItem("user")
);
    e.preventDefault();

    try {
      const res = await axios.post(
  "http://localhost:5000/api/resume/create",
  {
    ...formData,
    user: user._id,
  }
);
  const existingResumes =
  JSON.parse(localStorage.getItem("resumes")) || [];

existingResumes.push(formData);

localStorage.setItem(
  "resumes",
  JSON.stringify(existingResumes)
);

     toast.success("Resume Saved Successfully");

      setResume(formData);

      console.log(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Error Saving Resume");
    }
  };
  const calculateScore = () => {
  let total = 0;

  if (formData.fullName) total += 10;
  if (formData.email) total += 10;
  if (formData.phone) total += 10;
  if (formData.summary) total += 15;
  if (formData.education) total += 10;
  if (formData.skills) total += 15;
  if (formData.experience) total += 10;
  if (formData.projects) total += 10;
  if (formData.linkedin) total += 5;
  if (formData.github) total += 5;

  setScore(total);
};

const downloadPDF = () => {
  const input = document.getElementById("resume-pdf");

  html2canvas(input, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save(`${formData.fullName}_Resume.pdf`);
  });
};

 return (
  <>
    {/* Navbar Start */}
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">
        ResumeAI
      </h1>

      <div className="space-x-6">
        <button className="hover:text-blue-600">
          Templates
        </button>

        <button className="hover:text-blue-600">
          Contact
        </button>
      </div>
    </nav>
    {/* Navbar End */}
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-10 mb-10 text-center">
  <h1 className="text-5xl font-bold">
    Create ATS Friendly Resume
  </h1>

  <p className="mt-4 text-lg">
    Build Professional Resumes in Minutes
  </p>
</div>
    <div className="max-w-7xl mx-auto">
    <div className="min-h-screen bg-gray-100 p-10">
   <div className="grid grid-cols-3 gap-4 mb-6">

  <button
    onClick={() => setTemplate("modern")}
    className={`p-4 rounded-lg border transition ${
      template === "modern"
        ? "bg-blue-600 text-white"
        : "bg-white"
    }`}
  >
    Modern
  </button>

  <button
    onClick={() => setTemplate("professional")}
    className={`p-4 rounded-lg border transition ${
      template === "professional"
        ? "bg-black text-white"
        : "bg-white"
    }`}
  >
    Professional
  </button>

  <button
    onClick={() => setTemplate("creative")}
    className={`p-4 rounded-lg border transition ${
      template === "creative"
        ? "bg-purple-600 text-white"
        : "bg-white"
    }`}
  >
    Creative
  </button>

</div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side Form */}
<div className="bg-white p-6 rounded-xl shadow">
        
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border p-4 rounded mb-5"
        />
        <input
  type="email"
  name="email"
  placeholder="Email"
  value={formData.email}
  onChange={handleChange}
  className="w-full border p-4 rounded mb-5"
/>

<input
  type="text"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
  className="w-full border p-4 rounded mb-5"
/>

<input
  type="text"
  name="linkedin"
  placeholder="LinkedIn URL"
  value={formData.linkedin}
  onChange={handleChange}
  className="w-full border p-4 rounded mb-5"
/>

<input
  type="text"
  name="github"
  placeholder="GitHub URL"
  value={formData.github}
  onChange={handleChange}
  className="w-full border p-4 rounded mb-5"
/>

<textarea
  name="summary"
  placeholder="Professional Summary"
  value={formData.summary}
  onChange={handleChange}
  className="w-full border p-4 rounded mb-5 h-24"
/>
<button
  type="button"
  onClick={() => {
    setFormData({
      ...formData,
      summary: `Motivated and enthusiastic professional with skills in ${formData.skills}. Experienced in ${formData.projects || "software development projects"} and passionate about learning new technologies, problem-solving, and delivering quality solutions.`
    });
  }}
  className="bg-purple-600 text-white px-4 py-2 rounded mb-5"
>
  Generate AI Summary
</button>
        <input
          type="text"
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          className="w-full border p-4 rounded mb-5"
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full border p-4 rounded mb-5"
        />

        <textarea
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full border p-4 rounded mb-5 h-32"
        />
        <textarea
  name="projects"
  placeholder="Projects"
  value={formData.projects}
  onChange={handleChange}
  className="w-full border p-4 rounded mb-5 h-24"
/>

<textarea
  name="certifications"
  placeholder="Certifications"
  value={formData.certifications}
  onChange={handleChange}
  className="w-full border p-4 rounded mb-5 h-24"
/>

<input
  type="text"
  name="languages"
  placeholder="Languages"
  value={formData.languages}
  onChange={handleChange}
  className="w-full border p-4 rounded mb-5"
/>
<input
  type="file"
  accept="image/*"
  onChange={(e) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  }
}}
  className="w-full border p-3 rounded mb-5"
/>
<select
  name="career"
  value={formData.career}
  onChange={handleChange}
  className="w-full border p-4 rounded mb-5"
>
  <option value="">Select Career Field</option>
  <option value="Software Development">Software Development</option>
  <option value="Marketing">Marketing</option>
  <option value="Finance">Finance</option>
  <option value="HR">Human Resources</option>
  <option value="Sales">Sales</option>
  <option value="UI/UX Design">UI/UX Design</option>
</select>

        
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white p-4 rounded text-lg"
        >
          Save Resume
        </button>
      </div>

    <div
  id="resume-preview"
  className={`sticky top-5 p-8 rounded-lg border ${
    template === "modern"
      ? "bg-blue-50"
      : template === "professional"
      ? "bg-gray-100"
      : "bg-purple-50"
  }`}
>
 <div
  id="resume-pdf"
  className="bg-white p-10 max-w-4xl mx-auto text-black"
>
  <div className="text-center border-b pb-4 mb-6">
    <h1 className="text-4xl font-bold">
      {formData.fullName || "Your Name"}
    </h1>

    <p className="mt-2">
      {formData.email} | {formData.phone}
    </p>

    <div className="flex justify-center gap-6 mt-2">

  {formData.linkedin && (
    <a
      href={formData.linkedin}
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 font-medium"
    >
      LinkedIn
    </a>
  )}

  {formData.github && (
    <a
      href={formData.github}
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 font-medium"
    >
      GitHub
    </a>
  )}

</div>
  </div>

  {/* Summary */}
  <div className="mb-5">
    <h2 className="text-xl font-bold border-b mb-2">
      PROFESSIONAL SUMMARY
    </h2>

    <p>{formData.summary}</p>
  </div>

  {/* Education */}
  <div className="mb-5">
    <h2 className="text-xl font-bold border-b mb-2">
      EDUCATION
    </h2>

    <p>{formData.education}</p>
  </div>

  {/* Skills */}
  <div className="mb-5">
    <h2 className="text-xl font-bold border-b mb-2">
      TECHNICAL SKILLS
    </h2>

    <p>{formData.skills}</p>
  </div>

  {/* Experience */}
  <div className="mb-5">
    <h2 className="text-xl font-bold border-b mb-2">
      EXPERIENCE
    </h2>

    <p className="whitespace-pre-line">
      {formData.experience}
    </p>
  </div>

  {/* Projects */}
  <div className="mb-5">
    <h2 className="text-xl font-bold border-b mb-2">
      PROJECTS
    </h2>

    <p className="whitespace-pre-line">
      {formData.projects}
    </p>
  </div>

  {/* Certifications */}
  <div className="mb-5">
    <h2 className="text-xl font-bold border-b mb-2">
      CERTIFICATIONS
    </h2>

    <p>{formData.certifications}</p>
  </div>

  {/* Languages */}
  <div className="mb-5">
    <h2 className="text-xl font-bold border-b mb-2">
      LANGUAGES
    </h2>

    <p>{formData.languages}</p>
  </div>

  {/* Career Interest */}
  <div>
    <h2 className="text-xl font-bold border-b mb-2">
      CAREER INTEREST
    </h2>

    <p>{formData.career}</p>
  </div>
</div>

<button
  onClick={calculateScore}
  className="bg-blue-600 text-white px-6 py-3 rounded mt-4 mr-4"
>
  Analyze Resume
</button>

<button
  onClick={downloadPDF}
  className="bg-green-600 text-white px-6 py-3 rounded mt-4"
>
  Download PDF
</button>

{score > 0 && (
  <div className="mt-4 p-4 border rounded bg-gray-100">
    <h3
  className={`font-bold text-xl ${
    score >= 80 ? "text-green-600" : "text-red-600"
  }`}
>
  ATS Resume Score: {score}/100
</h3>
{score >= 90 && (
  <p className="text-green-600 font-bold mt-2">
    🚀 Ready for Job Applications
  </p>
)}

    <ul className="mt-2 list-disc pl-5">
      {formData.summary ? (
        <li>✅ Professional Summary Added</li>
      ) : (
        <li>❌ Add Professional Summary</li>
      )}

      {formData.projects ? (
        <li>✅ Projects Added</li>
      ) : (
        <li>❌ Add Projects</li>
      )}

      {formData.linkedin ? (
        <li>✅ LinkedIn Profile Added</li>
      ) : (
        <li>❌ Add LinkedIn Profile</li>
      )}

      {formData.github ? (
        <li>✅ GitHub Profile Added</li>
      ) : (
        <li>❌ Add GitHub Profile</li>
      )}
    </ul>
  </div>
)}
<div className="w-full bg-gray-300 rounded-full h-4 mt-3">
  <div
    className="bg-green-500 h-4 rounded-full"
    style={{ width: `${score}%` }}
  ></div>
</div>

<p className="font-bold mt-3">
  Resume Completion: {score}%
</p>
          </div>
      </div>
      </div>
      </div>
   </>
  );
}

export default ResumeForm;
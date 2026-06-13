import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    return;
  }

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

  const fetchResumes = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/resume/user/${currentUser._id}`
      );

      setResumes(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  fetchResumes();

}, [navigate]);

  const deleteResume = (index) => {
    const updatedResumes = [...resumes];

    updatedResumes.splice(index, 1);

    localStorage.setItem(
      "resumes",
      JSON.stringify(updatedResumes)
    );

    setResumes(updatedResumes);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">

        <h1 className="text-5xl font-extrabold">
  Welcome Back 👋{" "}
  {JSON.parse(
    localStorage.getItem("user")
  )?.name}
</h1>

        <div className="flex gap-4">

          <Link
            to="/"
            className="bg-gray-700 text-white px-5 py-2 rounded-lg"
          >
            Home
          </Link>

          <Link
            to="/builder"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Build Resume
          </Link>

          <button
            onClick={() => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("isLoggedIn");

  navigate("/");
}}
            className="bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow hover:-translate-y-2 duration-300">
          <h2 className="text-3xl font-bold">
            {resumes.length}
          </h2>

          <p className="text-gray-500">
            Total Resumes
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:-translate-y-2 duration-300">
          <h2 className="text-3xl font-bold">
            85%
          </h2>

          <p className="text-gray-500">
            Average ATS Score
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:-translate-y-2 duration-300">
          <h2 className="text-3xl font-bold">
            {resumes.length * 4}
          </h2>

          <p className="text-gray-500">
            Downloads
          </p>
        </div>

      </div>

      {/* Resume List */}

      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-6">
          My Resumes
        </h2>

        {resumes.length === 0 ? (
          <div className="bg-white p-6 rounded-2xl shadow">
            No Resume Found
          </div>
        ) : (
          resumes.map((resume, index) => (
            <div
              key={index}
              className="
                bg-white
                p-6
                rounded-2xl
                shadow
                mb-4
              "
            >
              <h3 className="text-2xl font-bold">
                {resume.fullName}
              </h3>

              <p className="text-sm text-blue-600">
                Resume #{index + 1}
              </p>

              <p className="text-gray-500">
                {resume.email}
              </p>

              <p className="text-gray-500">
                {resume.phone}
              </p>

              <div className="flex gap-3 mt-4">

                <button
                  className="
                    bg-blue-600
                    text-white
                    px-4
                    py-2
                    rounded-lg
                  "
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteResume(index)}
                  className="
                    bg-red-600
                    text-white
                    px-4
                    py-2
                    rounded-lg
                  "
                >
                  Delete
                </button>

                <button
                  className="
                    bg-green-600
                    text-white
                    px-4
                    py-2
                    rounded-lg
                  "
                >
                  Download
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Dashboard;
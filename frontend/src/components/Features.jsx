import {
  FaFilePdf,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

function Features() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">

      <h2 className="text-6xl font-extrabold text-center mb-5">
        Why Choose ResumeAI?
      </h2>

      <p className="text-center text-gray-500 text-lg mb-16">
        Everything you need to create a job-winning resume.
      </p>

      <div className="grid md:grid-cols-3 gap-10">

        {/* ATS Score */}
        <div
          className="
          group
          bg-white
          p-8
          rounded-3xl
          shadow-lg
          hover:-translate-y-4
          hover:shadow-2xl
          duration-300
          cursor-pointer
          border
          border-transparent
          hover:border-blue-300
          "
        >
          <FaChartLine className="text-6xl text-blue-600 mb-6 group-hover:scale-125 duration-300" />

          <h3 className="text-3xl font-bold mb-3">
            ATS Score
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Instantly analyze your resume and improve your chances of passing ATS systems.
          </p>
        </div>

        {/* PDF Export */}
        <div
          className="
          group
          bg-white
          p-8
          rounded-3xl
          shadow-lg
          hover:-translate-y-4
          hover:shadow-2xl
          duration-300
          cursor-pointer
          border
          border-transparent
          hover:border-red-300
          "
        >
          <FaFilePdf className="text-6xl text-red-600 mb-6 group-hover:scale-125 duration-300" />

          <h3 className="text-3xl font-bold mb-3">
            PDF Export
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Download professional resumes in a clean PDF format ready for job applications.
          </p>
        </div>

        {/* AI Summary */}
        <div
          className="
          group
          bg-white
          p-8
          rounded-3xl
          shadow-lg
          hover:-translate-y-4
          hover:shadow-2xl
          duration-300
          cursor-pointer
          border
          border-transparent
          hover:border-purple-300
          "
        >
          <FaRobot className="text-6xl text-purple-600 mb-6 group-hover:scale-125 duration-300" />

          <h3 className="text-3xl font-bold mb-3">
            AI Summary
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Generate powerful professional summaries tailored for recruiters.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;
import { Link } from "react-router-dom";

function TemplatePreview() {
  const templates = [
    {
      name: "Modern",
      color: "bg-blue-500",
      desc: "Clean ATS friendly layout",
      tag: "Most Popular",
    },
    {
      name: "Professional",
      color: "bg-black",
      desc: "Corporate style resume",
      tag: "Recruiter Choice",
    },
    {
      name: "Creative",
      color: "bg-purple-600",
      desc: "Designer focused template",
      tag: "Premium",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <h2 className="text-center text-5xl font-bold mb-4">
        Resume Templates
      </h2>

      <p className="text-center text-gray-500 mb-14 text-lg">
        Choose from recruiter-approved resume designs
      </p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-5">
        {templates.map((template) => (
          <div
            key={template.name}
            className="
              bg-white/90
              backdrop-blur-md
              shadow-2xl
              rounded-3xl
              overflow-hidden
              hover:-translate-y-3
              hover:shadow-blue-200
              transition-all
              duration-500
              border
              border-gray-100
            "
          >
            {/* Template Preview */}
            <div className="p-6">
              <div className="flex justify-end mb-4">
                <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-semibold">
                  {template.tag}
                </span>
              </div>

              <div className="border rounded-2xl p-5 bg-gray-50">
                <div
                  className={`h-10 rounded-lg mb-5 ${template.color}`}
                ></div>

                <div className="h-3 bg-gray-300 rounded mb-3"></div>
                <div className="h-3 bg-gray-300 rounded mb-3"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>

                <div className="mt-8 h-3 bg-gray-300 rounded"></div>
                <div className="mt-3 h-3 bg-gray-300 rounded"></div>
                <div className="mt-3 h-3 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-3xl font-bold">
                {template.name}
              </h3>

              <p className="text-gray-600 mt-3">
                {template.desc}
              </p>

              <Link
                to="/builder"
                className="
                  inline-block
                  mt-6
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  hover:scale-105
                  duration-300
                  shadow-lg
                "
              >
                Use Template
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TemplatePreview;
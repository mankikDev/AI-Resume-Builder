function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Template",
      desc: "Select a professional ATS-friendly resume template.",
    },
    {
      number: "02",
      title: "Fill Details",
      desc: "Enter your education, skills, projects and experience.",
    },
    {
      number: "03",
      title: "Download Resume",
      desc: "Get your resume instantly in PDF format.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <h2 className="text-center text-5xl font-bold mb-4">
        How It Works
      </h2>

      <p className="text-center text-gray-500 mb-16">
        Create your resume in just 3 simple steps
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-5">
        {steps.map((step) => (
          <div
            key={step.number}
            className="
              bg-white
              rounded-3xl
              shadow-xl
              p-8
              text-center
              hover:-translate-y-3
              hover:shadow-2xl
              duration-500
            "
          >
            <div className="
              w-20
              h-20
              mx-auto
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              text-white
              flex
              items-center
              justify-center
              text-2xl
              font-bold
              mb-6
            ">
              {step.number}
            </div>

            <h3 className="text-2xl font-bold mb-3">
              {step.title}
            </h3>

            <p className="text-gray-600">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
function FAQ() {
  return (
    <section className="py-24">

      <h2 className="text-5xl font-bold text-center mb-16">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold text-xl">
            Is ResumeAI free?
          </h3>
          <p className="mt-2 text-gray-600">
            Yes, you can build and download resumes for free.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold text-xl">
            Is it ATS friendly?
          </h3>
          <p className="mt-2 text-gray-600">
            Yes, all templates are ATS optimized.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold text-xl">
            Can I edit later?
          </h3>
          <p className="mt-2 text-gray-600">
            Yes, your data is saved locally.
          </p>
        </div>

      </div>

    </section>
  );
}

export default FAQ;
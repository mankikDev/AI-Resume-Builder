function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-5xl font-bold text-blue-600">
            10000+
          </h2>
          <p className="mt-2 text-gray-500">
            Resumes Created
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-5xl font-bold text-green-600">
            95%
          </h2>
          <p className="mt-2 text-gray-500">
            ATS Success Rate
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-5xl font-bold text-purple-600">
            4.9
          </h2>
          <p className="mt-2 text-gray-500">
            User Rating
          </p>
        </div>

      </div>
    </section>
  );
}

export default Stats;
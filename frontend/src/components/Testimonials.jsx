function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      text: "Got interview calls within 2 weeks after updating my resume.",
    },
    {
      name: "Priya Verma",
      role: "MCA Student",
      text: "ATS score analysis helped me improve my resume significantly.",
    },
    {
      name: "Aman Gupta",
      role: "Fresh Graduate",
      text: "Best free resume builder I've used. Very professional templates.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <h2 className="text-center text-5xl font-bold mb-4">
        What Users Say
      </h2>

      <p className="text-center text-gray-500 mb-16">
        Trusted by students and professionals
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-5">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-xl
              hover:-translate-y-3
              duration-500
            "
          >
            <div className="text-yellow-400 text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-600 mb-6">
              "{review.text}"
            </p>

            <h3 className="font-bold text-xl">
              {review.name}
            </h3>

            <p className="text-gray-500">
              {review.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
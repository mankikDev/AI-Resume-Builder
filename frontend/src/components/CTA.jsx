import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-28">

      <div className="
      max-w-5xl
      mx-auto
      rounded-3xl
      p-16
      text-center
      text-white
      bg-gradient-to-r
      from-blue-600
      to-purple-600
      ">

        <h2 className="text-6xl font-bold">
          Ready To Get Hired?
        </h2>

        <p className="mt-6 text-xl">
          Build your ATS friendly resume today.
        </p>

        <Link
          to="/builder"
          className="
          inline-block
          mt-8
          bg-white
          text-black
          px-8
          py-4
          rounded-xl
          font-bold
          hover:scale-105
          duration-300
          "
        >
          Create Resume
        </Link>

      </div>

    </section>
  );
}

export default CTA;
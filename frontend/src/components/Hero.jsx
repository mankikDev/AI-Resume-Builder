import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-32 text-center relative overflow-hidden">
      <div className="absolute -left-20 top-20 w-96 h-96 bg-blue-400 opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute right-0 top-10 w-96 h-96 bg-purple-500 opacity-20 blur-[150px] rounded-full"></div>

      <motion.h1
  initial={{ opacity: 0, y: -80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-7xl font-bold relative z-10"
>
  Create ATS Friendly Resume
</motion.h1>

      <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="mt-6 text-xl relative z-10"
>
  Build professional resumes in minutes.
</motion.p>

      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  className="relative z-10"
>
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
      shadow-xl
      hover:scale-105
      duration-300
    "
  >
    Start Building
  </Link>
</motion.div>

    </section>
  );
}

export default Hero;
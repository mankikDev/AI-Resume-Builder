import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");

    window.location.href = "/";
  };

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        border-b
        ${
          darkMode
            ? "bg-gray-900/80 border-gray-700 text-white"
            : "bg-white/70 border-gray-200"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <Link to="/">
          <h1 className="text-3xl font-bold text-blue-600">
            ResumeAI
          </h1>
        </Link>

        <div className="flex items-center gap-4">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              px-4
              py-2
              rounded-lg
              border
              font-semibold
            "
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <Link
            to="/builder"
            className="
              bg-blue-600
              text-white
              px-5
              py-2
              rounded-lg
            "
          >
            Build Resume
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="
                  px-5
                  py-2
                  rounded-lg
                  border
                  font-semibold
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                className="
                  bg-green-600
                  text-white
                  px-5
                  py-2
                  rounded-lg
                "
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="
                  font-semibold
                  hover:text-blue-600
                "
              >
                Dashboard
              </Link>

              <div
                className="
                  bg-blue-600
                  text-white
                  px-4
                  py-2
                  rounded-full
                  font-semibold
                "
              >
                👤 {user.name}
              </div>

              <button
                onClick={handleLogout}
                className="
                  bg-red-600
                  text-white
                  px-4
                  py-2
                  rounded-lg
                "
              >
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
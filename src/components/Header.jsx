import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-lg">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <h1
            onClick={() => scrollToSection("home")}
            className="cursor-pointer text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide hover:scale-105 duration-300"
          >
            BlogSphere
          </h1>

          {/* Desktop Menu */}

          <nav className="hidden md:flex items-center gap-8">

            {["home", "blog-form", "blogs", "about"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-gray-300 hover:text-cyan-400 transition duration-300 font-medium relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all"
              >
                {item === "blog-form"
                  ? "Write"
                  : item}
              </button>
            ))}

            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-red-500/30 transition duration-300 hover:-translate-y-1"
            >
              Logout
            </button>

          </nav>

          {/* Mobile Button */}

          <button
            className="md:hidden text-3xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <div className="flex flex-col py-5 px-6 gap-5">

            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-gray-300 hover:text-cyan-400"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("blog-form")}
              className="text-left text-gray-300 hover:text-cyan-400"
            >
              Write
            </button>

            <button
              onClick={() => scrollToSection("blogs")}
              className="text-left text-gray-300 hover:text-cyan-400"
            >
              Blogs
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-gray-300 hover:text-cyan-400"
            >
              About
            </button>

            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl py-3 font-semibold"
            >
              Logout
            </button>

          </div>

        </div>
      )}

    </header>
  );
}

export default Header;
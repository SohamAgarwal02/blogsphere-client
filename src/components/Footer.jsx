function Footer() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      id="about"
      className="mt-20 bg-gray-950 border-t border-gray-800"
    >

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              BlogSphere
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              BlogSphere is a modern blogging platform where
              users can create, edit, search and manage blogs
              with a beautiful UI built using React, Express
              and Tailwind CSS.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Quick Links
            </h2>

            <div className="flex flex-col gap-4 text-gray-400">

              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-cyan-400 text-left"
              >
                🏠 Home
              </button>

              <button
                onClick={() => scrollToSection("blog-form")}
                className="hover:text-cyan-400 text-left"
              >
                ✍️ Write Blog
              </button>

              <button
                onClick={() => scrollToSection("blogs")}
                className="hover:text-cyan-400 text-left"
              >
                📚 Blogs
              </button>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h2 className="text-2xl font-bold mb-5">
              About Project
            </h2>

            <p className="text-gray-400 leading-7">
              This project demonstrates CRUD Operations,
              React Hooks, Tailwind CSS, Express.js,
              Search, Filter and Responsive UI.
            </p>

          </div>

        </div>

        <hr className="border-gray-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500">

          <p>
            © 2026 BlogSphere. All Rights Reserved.
          </p>

          <button
            onClick={() => scrollToSection("home")}
            className="mt-5 md:mt-0 bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg text-white"
          >
            ⬆ Back to Top
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
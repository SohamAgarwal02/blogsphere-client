function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black py-28"
    >
      {/* Background Glow */}

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">

        <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 shadow-lg">
          🚀 MERN Stack • JWT Authentication • MongoDB
        </span>

        <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">

          Write.

          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Share.
          </span>

          Inspire.

        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-8">

          A modern blogging platform where you can create,
          manage and publish your thoughts with a beautiful,
          responsive interface powered by React, Express,
          MongoDB and JWT Authentication.

        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <button
            onClick={() => scrollToSection("blog-form")}
            className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold shadow-xl shadow-cyan-500/30 hover:scale-105 duration-300"
          >
            ✍️ Start Writing
          </button>

          <button
            onClick={() => scrollToSection("blogs")}
            className="rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-xl px-8 py-4 text-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 duration-300"
          >
            📚 Explore Blogs
          </button>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 hover:border-cyan-500 duration-300">

            <div className="text-5xl mb-5">⚡</div>

            <h3 className="text-2xl font-bold text-white">
              Fast Performance
            </h3>

            <p className="mt-4 text-slate-400">
              Built with React and Express for a smooth and
              lightning-fast user experience.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 hover:border-purple-500 duration-300">

            <div className="text-5xl mb-5">🔒</div>

            <h3 className="text-2xl font-bold text-white">
              Secure Login
            </h3>

            <p className="mt-4 text-slate-400">
              JWT Authentication ensures secure access to
              protected blog routes.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 hover:border-pink-500 duration-300">

            <div className="text-5xl mb-5">☁️</div>

            <h3 className="text-2xl font-bold text-white">
              Cloud Storage
            </h3>

            <p className="mt-4 text-slate-400">
              Blogs are stored securely using MongoDB Atlas
              with permanent cloud storage.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
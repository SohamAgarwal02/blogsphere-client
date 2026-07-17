function Dashboard({ blogs }) {
  const totalBlogs = blogs.length;

  const publishedBlogs = blogs.filter(
    (blog) => blog.status === "Published"
  ).length;

  const draftBlogs = blogs.filter(
    (blog) => blog.status === "Draft"
  ).length;

  const totalAuthors = new Set(
    blogs
      .map((blog) => blog.author)
      .filter((author) => author && author.trim() !== "")
  ).size;

  const cards = [
    {
      title: "Total Blogs",
      value: totalBlogs,
      icon: "📝",
      color:
        "from-cyan-500 to-blue-600",
    },
    {
      title: "Published",
      value: publishedBlogs,
      icon: "✅",
      color:
        "from-green-500 to-emerald-600",
    },
    {
      title: "Draft",
      value: draftBlogs,
      icon: "📄",
      color:
        "from-yellow-400 to-orange-500",
    },
    {
      title: "Authors",
      value: totalAuthors,
      icon: "👤",
      color:
        "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

      <div className="flex items-center justify-between mb-10">

        <div>

          <h2 className="text-4xl font-black text-white">
            Dashboard
          </h2>

          <p className="text-slate-400 mt-2">
            Quick overview of your blogging platform.
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

        {cards.map((card, index) => (

          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 shadow-xl hover:-translate-y-2 hover:border-cyan-500 duration-300"
          >

            <div
              className={`absolute inset-0 opacity-10 bg-gradient-to-br ${card.color}`}
            />

            <div className="relative">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-400">
                    {card.title}
                  </p>

                  <h2 className="mt-4 text-5xl font-black text-white">

                    {card.value}

                  </h2>

                </div>

                <div
                  className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-3xl shadow-lg`}
                >

                  {card.icon}

                </div>

              </div>

              <div className="mt-8 h-2 rounded-full bg-slate-800 overflow-hidden">

                <div
                  className={`h-full w-full bg-gradient-to-r ${card.color}`}
                />

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Dashboard;
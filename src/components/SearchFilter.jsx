import { useEffect, useState } from "react";

function SearchFilter({ blogs, setFilteredBlogs }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  useEffect(() => {
    let filtered = [...blogs];

    if (search.trim() !== "") {
      filtered = filtered.filter(
        (blog) =>
          blog.title
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          blog.author
            ?.toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    if (status !== "All") {
      filtered = filtered.filter(
        (blog) => blog.status === status
      );
    }

    setFilteredBlogs(filtered);
  }, [blogs, search, status]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl shadow-xl p-8">

        <div className="flex flex-col lg:flex-row gap-6">

          {/* Search */}

          <div className="flex-1">

            <label className="text-slate-400 font-medium mb-3 block">
              🔍 Search Blogs
            </label>

            <input
              type="text"
              placeholder="Search by title or author..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-2xl bg-slate-950 border border-slate-700 px-5 py-4 text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
            />

          </div>

          {/* Filter */}

          <div className="lg:w-64">

            <label className="text-slate-400 font-medium mb-3 block">
              📂 Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="w-full rounded-2xl bg-slate-950 border border-slate-700 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
            >
              <option value="All">All Blogs</option>
              <option value="Published">
                Published
              </option>
              <option value="Draft">
                Draft
              </option>
            </select>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400">

            Showing

            <span className="mx-2 text-cyan-400 font-bold text-lg">
              {blogs.length}
            </span>

            Blogs

          </p>

          <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold shadow-lg">
            🚀 Keep Writing & Inspiring
          </div>

        </div>

      </div>

    </section>
  );
}

export default SearchFilter;
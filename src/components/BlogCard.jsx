import axios from "axios";

function BlogCard({
  blogs,
  fetchBlogs,
  setEditingBlog,
  isMyBlogs,
}) {
  const token = localStorage.getItem("token");

  async function deleteBlog(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://blogsphere-5590.onrender.com/blogs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Blog Deleted Successfully ✅");

      fetchBlogs();
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Delete Failed"
      );
    }
  }

  return (
    <section
      id="blogs"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="text-center mb-14">
        <h2 className="text-5xl font-black">
          {isMyBlogs
            ? "👤 My Blogs"
            : "🌍 Public Blogs"}
        </h2>

        <p className="text-gray-400 mt-3">
          {isMyBlogs
            ? "Manage your own blogs."
            : "Explore blogs shared by everyone."}
        </p>
      </div>

      {blogs.length === 0 ? (
        <div className="bg-slate-900 rounded-3xl p-16 text-center border border-slate-800">
          <div className="text-7xl mb-5">
            📭
          </div>

          <h2 className="text-3xl font-bold">
            No Blogs Found
          </h2>

          <p className="text-gray-400 mt-4">
            Nothing to display.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog) => {
            const isNew =
              blog.createdAt &&
              new Date() - new Date(blog.createdAt) <
                24 * 60 * 60 * 1000;

            return (
              <div
                key={blog._id}
                className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl hover:-translate-y-2 hover:border-cyan-500 duration-300"
              >
                <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl"></div>

                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">
                    {blog.title}
                  </h2>

                  {isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-xs px-3 py-1 rounded-full font-bold">
                      NEW
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-lg">
                    {blog.author
                      ?.charAt(0)
                      ?.toUpperCase()}
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Author
                    </p>

                    <p className="text-cyan-400 font-semibold">
                      {blog.author}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 leading-8 mt-6 line-clamp-4">
                  {blog.content}
                </p>

                <div className="flex justify-between items-center mt-8">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold ${
                      blog.status === "Published"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {blog.status}
                  </span>

                  <span className="text-gray-500 text-sm">
                    {blog.createdAt
                      ? new Date(
                          blog.createdAt
                        ).toLocaleDateString()
                      : ""}
                  </span>
                </div>

                {isMyBlogs && (
                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => {
                        setEditingBlog(blog);

                        document
                          .getElementById(
                            "blog-form"
                          )
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                      className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-xl font-bold hover:scale-105 duration-300"
                    >
                      ✏️ Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteBlog(blog._id)
                      }
                      className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 py-3 rounded-xl font-bold hover:scale-105 duration-300"
                    >
                      🗑 Delete
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default BlogCard;
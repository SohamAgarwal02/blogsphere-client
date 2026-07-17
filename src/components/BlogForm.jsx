import { useState, useEffect } from "react";
import axios from "axios";

function BlogForm({
  fetchBlogs,
  editingBlog,
  setEditingBlog,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("Draft");
  const [visibility, setVisibility] = useState("Public");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setContent(editingBlog.content);
      setStatus(editingBlog.status);
      setVisibility(editingBlog.visibility || "Public");
    } else {
      setTitle("");
      setContent("");
      setStatus("Draft");
      setVisibility("Public");
    }
  }, [editingBlog]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (editingBlog) {
        await axios.put(
          `https://blogsphere-5590.onrender.com/blogs/${editingBlog._id}`,
          {
            title,
            content,
            status,
            visibility,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert("Blog Updated Successfully ✅");
        setEditingBlog(null);
      } else {
        await axios.post(
          "https://blogsphere-5590.onrender.com/blogs",
          {
            title,
            content,
            status,
            visibility,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert("Blog Added Successfully ✅");
      }

      setTitle("");
      setContent("");
      setStatus("Draft");
      setVisibility("Public");

      fetchBlogs();
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <section
      id="blog-form"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="relative overflow-hidden rounded-[32px] border border-slate-700/60 bg-slate-900/70 backdrop-blur-2xl shadow-2xl p-6 md:p-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>

        <h2 className="text-4xl md:text-5xl font-black text-center text-white">
          {editingBlog ? "✏️ Update Blog" : "📝 Create New Blog"}
        </h2>

        <p className="text-center text-slate-400 mt-4 mb-12 text-lg">
          Create beautiful blogs with a premium writing experience.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-3 text-slate-300 font-semibold">
              Blog Title
            </label>

            <input
              type="text"
              placeholder="Enter blog title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-2xl bg-slate-950/70 border border-slate-700 px-5 py-4 text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
            />
          </div>

          <div>
            <label className="block mb-3 text-slate-300 font-semibold">
              Blog Content
            </label>

            <textarea
              rows="7"
              placeholder="Write your thoughts..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-2xl bg-slate-950/70 border border-slate-700 px-5 py-4 text-white placeholder-slate-500 outline-none resize-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-3 text-slate-300 font-semibold">
                Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-2xl bg-slate-950/70 border border-slate-700 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>

            <div>
              <label className="block mb-3 text-slate-300 font-semibold">
                Visibility
              </label>

              <select
                value={visibility}
                onChange={(e) => setVisibility(e.target.value)}
                className="w-full rounded-2xl bg-slate-950/70 border border-slate-700 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
              >
                <option value="Public">🌍 Public</option>
                <option value="Private">🔒 Private</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
          >
            {editingBlog ? "Update Blog ✨" : "Publish Blog 🚀"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default BlogForm;
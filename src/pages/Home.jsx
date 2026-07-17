import { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BlogForm from "../components/BlogForm";
import BlogCard from "../components/BlogCard";
import SearchFilter from "../components/SearchFilter";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  const [activeTab, setActiveTab] = useState("public");

  useEffect(() => {
    fetchPublicBlogs();
  }, []);

  async function fetchPublicBlogs() {
    try {
      const res = await axios.get(
        "https://blogsphere-5590.onrender.com/blogs/public"
      );

      setBlogs(res.data);
      setFilteredBlogs(res.data);
      setActiveTab("public");
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchMyBlogs() {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://blogsphere-5590.onrender.com/blogs/my",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBlogs(res.data);
      setFilteredBlogs(res.data);
      setActiveTab("my");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      <Hero blogs={blogs} />

      {/* Tabs */}

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex justify-center">
          <div className="bg-slate-900 rounded-2xl p-2 flex gap-3 shadow-xl">
            <button
              onClick={fetchPublicBlogs}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "public"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              🌍 Public Blogs
            </button>

            <button
              onClick={fetchMyBlogs}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "my"
                  ? "bg-gradient-to-r from-purple-500 to-pink-600"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              👤 My Blogs
            </button>
          </div>
        </div>
      </div>

      {/* Show only in My Blogs */}

      {activeTab === "my" && (
        <>
          <Dashboard blogs={blogs} />

          <BlogForm
            fetchBlogs={fetchMyBlogs}
            editingBlog={editingBlog}
            setEditingBlog={setEditingBlog}
          />
        </>
      )}

      <SearchFilter
        blogs={blogs}
        setFilteredBlogs={setFilteredBlogs}
      />

      <BlogCard
        blogs={filteredBlogs}
        fetchBlogs={
          activeTab === "my"
            ? fetchMyBlogs
            : fetchPublicBlogs
        }
        setEditingBlog={setEditingBlog}
        isMyBlogs={activeTab === "my"}
      />

      <FAQ />

      <Footer />
    </div>
  );
}

export default Home;
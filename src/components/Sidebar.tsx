"use client";

import React, { useState } from "react";
import { posts } from "../data/posts";
import AmaModal from "./AmaModal";

const Sidebar: React.FC = () => {
  const [category, setCategory] = useState<string>("all");
  const [showAma, setShowAma] = useState(false);

  const filteredPosts = posts.filter(p => category === "all" || p.category === category);

  return (
    <aside className="w-64 bg-white p-4 border-r overflow-y-auto">
      <header className="flex items-center mb-4">
        <h1 className="text-2xl font-bold">Zeynebin Kaleminden</h1>
      </header>
      {/* Totoro SVG mascot */}
      <div className="mb-4 flex justify-center">
        <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Simplified Totoro shape */}
          <circle cx="32" cy="32" r="30" fill="#6B8E23" />
          <circle cx="22" cy="24" r="5" fill="white" />
          <circle cx="42" cy="24" r="5" fill="white" />
          <path d="M22 40c4 4 12 4 16 0" stroke="white" strokeWidth="3" />
        </svg>
      </div>
      {/* Category filter buttons */}
      <nav className="mb-4">
        <button
          className={`block w-full text-left py-1 ${category === "all" ? "font-semibold" : ""}`}
          onClick={() => setCategory("all")}
        >
          All Posts
        </button>
        <button
          className={`block w-full text-left py-1 ${category === "welcome" ? "font-semibold" : ""}`}
          onClick={() => setCategory("welcome")}
        >
          Welcome
        </button>
        <button
          className={`block w-full text-left py-1 ${category === "art" ? "font-semibold" : ""}`}
          onClick={() => setCategory("art")}
        >
          Art
        </button>
        <button
          className={`block w-full text-left py-1 ${category === "philosophy" ? "font-semibold" : ""}`}
          onClick={() => setCategory("philosophy")}
        >
          Philosophy
        </button>
      </nav>
      {/* Post list */}
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id} className="mb-2">
            <a href="#" className="text-blue-600 hover:underline" onClick={(e) => e.preventDefault()}>{post.title}</a>
          </li>
        ))}
      </ul>
      {/* AmA modal toggle */}
      <button
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded"
        onClick={() => setShowAma(true)}
      >
        Ask Me Anything
      </button>
      {showAma && <AmaModal onClose={() => setShowAma(false)} />}
    </aside>
  );
};

export default Sidebar;

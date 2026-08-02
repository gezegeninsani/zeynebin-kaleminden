"use client";

import React, { useState } from "react";
import { posts } from "../data/posts";

const PostView: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(posts[0].id);
  const selected = posts.find(p => p.id === selectedId) || posts[0];

  return (
    <section className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: "#fffaf0" }}>
      <h2 className="text-3xl font-semibold mb-4" style={{ color: "#6B8E23" }}>{selected.title}</h2>
      <article className="prose" style={{ backgroundColor: "#fff0f5", padding: "1rem", borderRadius: "0.5rem" }}>
        <p>{selected.content}</p>
      </article>
    </section>
  );
};

export default PostView;

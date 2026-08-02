"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import PostView from "../components/PostView";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-pink-50">
      <Sidebar />
      <PostView />
    </div>
  );
}

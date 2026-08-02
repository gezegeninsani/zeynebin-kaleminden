"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const activeTab = pathname.startsWith('/ama') ? 'ama' : 'blog';
  return (
    <aside className="w-64 bg-sakura p-4 flex flex-col justify-between h-screen">
      <div>
        <nav className="flex space-x-2 mb-4">
          <Link href="/" className={`px-3 py-1 rounded ${activeTab === 'blog' ? 'bg-pink-300' : ''}`}>YAZILAR</Link>
          <Link href="/ama" className={`px-3 py-1 rounded ${activeTab === 'ama' ? 'bg-pink-300' : ''}`}>SON CEVAPLANANLAR</Link>
        </nav>
        <div className="mt-4">
          <p className="text-sm text-gray-600">Categories (placeholder)</p>
        </div>
      </div>
    </aside>
  );
};
import React from 'react';
import { posts } from '@/data/posts';

export const BlogFeed: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>
    <ul className="space-y-2">
      {posts.map((post, idx) => (
        <li key={idx} className="p-2 border rounded">
          <h3 className="text-lg font-medium">{post.title}</h3>
          <p className="text-sm text-inkchar/50">{post.date} • {post.category} • {post.excerpt}</p>
        </li>
      ))}
    </ul>
  </div>
);

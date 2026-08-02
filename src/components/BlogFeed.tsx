import React from 'react';

export const BlogFeed: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>
    <ul className="space-y-2">
      <li className="p-2 border rounded">Sample Blog Post 1</li>
      <li className="p-2 border rounded">Sample Blog Post 2</li>
      <li className="p-2 border rounded">Sample Blog Post 3</li>
    </ul>
  </div>
);
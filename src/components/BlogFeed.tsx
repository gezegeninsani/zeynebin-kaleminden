import React from 'react';
import { posts } from '@/data/posts';

/**
 * BlogFeed renders a simple list of blog posts.
 *
 * The original implementation expected each post object to contain
 * `date` and `excerpt` fields, but the current `posts` data only provides
 * `id`, `title`, `category`, and `content`. Attempting to read the missing
 * properties caused a TypeScript compile error.
 *
 * To resolve the error we display only the information that is actually
 * available. The post's `content` is shown as a short preview – the first
 * 100 characters followed by an ellipsis if it is longer.
 */
export const BlogFeed: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>
    <ul className="space-y-2">
      {posts.map((post, idx) => (
        <li key={idx} className="p-2 border rounded">
          <h3 className="text-lg font-medium">{post.title}</h3>
          {/* Show a brief excerpt derived from the content field. */}
          <p className="text-sm text-inkchar/50">
            {post.category} •{' '}
            {post.content.length > 100
              ? `${post.content.slice(0, 100)}…`
              : post.content}
          </p>
        </li>
      ))}
    </ul>
  </div>
);
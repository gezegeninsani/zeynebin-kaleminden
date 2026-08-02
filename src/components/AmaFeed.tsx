import React from 'react';

export const AmaFeed: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">AmA (Answered Questions)</h2>
    <ul className="space-y-2">
      <li className="p-2 border rounded">
        <p className="font-bold">@anon asked: What is your favorite book?</p>
        <p className="mt-1">Answer: I love \"The Little Prince\".</p>
      </li>
      <li className="p-2 border rounded">
        <p className="font-bold">@user123 asked: How do you stay productive?</p>
        <p className="mt-1">Answer: By using a strict schedule and taking short breaks.</p>
      </li>
    </ul>
  </div>
);
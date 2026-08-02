import React from 'react';

export const Header: React.FC = () => (
  <header className="bg-sakura p-4 flex justify-between items-center shadow-md">
    <h1 className="text-2xl font-bold">Zeynepin Kaleminden</h1>
    <button className="px-4 py-2 bg-pink-200 rounded">Giriş Yap</button>
  </header>
);
import React from 'react';
import { BiLoaderCircle } from 'react-icons/bi';

const GlobalLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60">
    <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-2xl border border-blue-100">
      <BiLoaderCircle className="text-blue-600" size={60} />
      <p className="text-blue-700 font-semibold text-lg">
        Setting things up for you...
      </p>
    </div>
  </div>
);

export default GlobalLoader;

import Link from "next/link";
import React from "react";

const navbar = () => {
  return (
    <nav className="glass1">
      <div className="hidden sm:ml-6 sm:block p-2">
        <div className="flex space-x-4">
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/html-css-js/index.html"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            HTML-CSS-JS
          </Link>
          <Link
            href="/minifyHTML/index.html"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            MinifyHTML
          </Link>
          <Link
            href="/resume/index.html"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Resume
          </Link>
          <Link
            href="/list"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            List of Movies & Series
          </Link>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/html-css-js/index.html"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            HTML-CSS-JS
          </Link>
          <Link
            href="/minifyHTML/index.html"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            MinifyHTML
          </Link>
          <Link
            href="/resume/index.html"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default navbar;

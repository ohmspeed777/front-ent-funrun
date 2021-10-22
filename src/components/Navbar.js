import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar shadow-lg bg-neutral text-neutral-content sticky top-0 z-40">
      <div className="flex-1 hidden px-2 mx-2 lg:flex">
        <span className="text-lg font-bold"> daisyUI </span>
      </div>
      <div className="flex-1 lg:flex-none">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-ghost"
          />
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="flex-none px-4">
        <Link to="/register">register |</Link>
        <Link to="/login">&nbsp;login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

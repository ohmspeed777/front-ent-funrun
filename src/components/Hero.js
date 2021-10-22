import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1526676037777-05a232554f77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80")',
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
           Welcome to FunRun festival. Click button below, You can join to this is event Right now !!!
          </p>
          <Link to="/regisFunRun" className="btn btn-primary">Join here</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

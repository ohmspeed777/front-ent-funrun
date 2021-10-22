import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="p-10 footer bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Services</span>
        <Link to="/" className="link link-hover">Branding</Link>
        <Link to="/" className="link link-hover">Design</Link>
        <Link to="/" className="link link-hover">Marketing</Link>
        <Link to="/" className="link link-hover">advertisement</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/" className="link link-hover">about us</Link>
        <Link to="/" className="link link-hover">Contact</Link>
        <Link to="/" className="link link-hover">Jobs</Link>
        <Link to="/" className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="footer-title">LegLinkl</span>
        <Link to="/" className="link link-hover">Terms of use</Link>
        <Link to="/" className="link link-hover">PrivLinkcy policy</Link>
        <Link to="/" className="link link-hover">Cookie policy</Link>
      </div>
    </footer>
  );
};

export default Footer;

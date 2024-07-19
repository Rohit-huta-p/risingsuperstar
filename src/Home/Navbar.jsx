import React, { useState } from "react";
import logo from '../assets/images/logo_school.png';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-700 text-white">
        <h3>Working Hours</h3>
      </div>
      <div className="flex items-center justify-between border-b border-gray-400">
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-[5rem]" />
          <p className="text-sm font-normal">Rising superstar school</p>
        </a>
        <nav>
          <section className=" flex lg:hidden">
            <div
              className="space-y-1.5 mr-3"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-10 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-7 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-300 my-8 uppercase">
                  <Link to="about-us" smooth={true} duration={500} onClick={() => setIsNavOpen(false)}>About</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="activities" smooth={true} duration={500} onClick={() => setIsNavOpen(false)}>Activities</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="gallery" smooth={true} duration={500} onClick={() => setIsNavOpen(false)}>Gallery</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="contact-form" smooth={true} duration={500} onClick={() => setIsNavOpen(false)}>Contact Form</Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className="hidden space-x-3 lg:flex">
            <li>
              <Link to="about-us" smooth={true} duration={500}>About</Link>
            </li>
            <li>
              <Link to="activities" smooth={true} duration={500}>Activities</Link>
            </li>
            <li>
              <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
            </li>
            <li>
              <Link to="contact-form" smooth={true} duration={500}>Contact Form</Link>
            </li>
          </ul>
        </nav>
        <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}</style>
      </div>
    </>
  );
}

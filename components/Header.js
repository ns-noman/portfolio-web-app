"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaGlobe } from "react-icons/fa";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="header" className="w-full">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">

          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div className="logo--img">
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            <div className="logo--content leading-tight">
              <h1 className="text-lg font-medium">
                Nowab <strong className="font-bold">Shorif</strong>
              </h1>
              <p className="text-sm">
                <strong>Full Stack Software</strong> Developer
              </p>
            </div>
          </Link>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#hireMeModal"
              className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm"
            >
              <i className="fa fa-user-plus" />
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="p-2 border rounded-md"
            >
              ☰
            </button>
          </div>

          {/* Nav Menu */}
          <div
            className={`${
              open ? "block" : "hidden"
            } lg:flex lg:items-center lg:gap-6 w-full lg:w-auto mt-4 lg:mt-0`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 ml-auto">
              <li><Link href="/banner" className="hover:text-blue-600">HOME</Link></li>
              <li><Link href="/about" className="hover:text-blue-600">ABOUT</Link></li>
              <li><Link href="/services" className="hover:text-blue-600">SERVICES</Link></li>
              <li><Link href="/gallery" className="hover:text-blue-600">PROJECTS</Link></li>
              <li><Link href="/feedback" className="hover:text-blue-600">FEEDBACK</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600">BLOG</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">CONTACT</Link></li>
            </ul>

           {/* Social Links */}
          <div className="hidden lg:flex ml-4 items-center gap-2">

            {/* GitHub */}
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center border border-gray-300 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:shadow-lg hover:scale-110"
            >
              <FaGithub size={16} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center border border-gray-300 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:shadow-lg hover:scale-110"
            >
              <FaLinkedin size={16} />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center border border-gray-300 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:shadow-lg hover:scale-110"
            >
              <FaFacebook size={16} />
            </a>

            {/* Website */}
            <a
              href="https://your-website.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="w-9 h-9 flex items-center justify-center border border-gray-300 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:shadow-lg hover:scale-110"
            >
              <FaGlobe size={16} />
            </a>

          </div>

            {/* Desktop Hire Me */}
            {/* <div className="hidden lg:block ml-4">
              <Link
                href="#hireMeModal"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                HIRE ME
              </Link>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
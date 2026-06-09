"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaGlobe, FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", href: "/" },
    {
      label: "ABOUT",
      submenu: [
        { label: "Profile", href: "/profile" },
        { label: "Interests", href: "/interests" },
        { label: "Achievements", href: "/achievements" },
        { label: "Activities", href: "/activities" },
      ],
    },
    {
      label: "CAREER",
      submenu: [
        { label: "Professional Experience", href: "/experience" },
        { label: "Education", href: "/education" },
        { label: "Skills", href: "/skills" },
      ],
    },
    {
      label: "PORTFOLIO",
      submenu: [
        { label: "Projects", href: "/projects" },
        { label: "YouTube", href: "/youtube" },
        { label: "Blog", href: "/blog" },
      ],
    },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header id="header" className={`w-full sticky top-0 z-50 transition-shadow duration-300 ${
      hasScrolled ? "shadow-md" : "shadow-sm"
    }`}>
      <nav className="bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">

          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2">
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
            <Link
              href="#hireMeModal"
              className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm"
            >
              <i className="fa fa-user-plus" />
            </Link>
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
              {menuItems.map((item) => (
                <li key={item.label} className="relative group pt-2">
                  {item.submenu ? (
                    <span className="hover:text-blue-600 cursor-pointer font-medium flex items-center gap-1.5 px-2 py-1 block">
                      {item.label}
                      <FaChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-200" />
                    </span>
                  ) : (
                    <Link href={item.href} className="hover:text-blue-600 font-medium px-2 py-1 block">
                      {item.label}
                    </Link>
                  )}

                  {item.submenu && (
                    <ul className="hidden group-hover:block absolute left-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-max z-50 top-full py-1 -mt-2 pt-3">
                      {item.submenu.map((subitem) => (
                        <li key={subitem.href}>
                          <Link
                            href={subitem.href}
                            className="hover:text-blue-600 block px-4 py-2.5 hover:bg-blue-50 text-gray-700 whitespace-nowrap"
                          >
                            {subitem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="hidden lg:flex ml-4 items-center gap-2">
              <Link
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 flex items-center justify-center border border-gray-300 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:shadow-lg hover:scale-110"
              >
                <FaGithub size={16} />
              </Link>
              <Link
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center border border-gray-300 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:shadow-lg hover:scale-110"
              >
                <FaLinkedin size={16} />
              </Link>
              <Link
                href="https://facebook.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center border border-gray-300 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:shadow-lg hover:scale-110"
              >
                <FaFacebook size={16} />
              </Link>
              <Link
                href="https://your-website.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="w-9 h-9 flex items-center justify-center border border-gray-300 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:shadow-lg hover:scale-110"
              >
                <FaGlobe size={16} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
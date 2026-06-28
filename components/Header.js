"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaChevronDown,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  email: FaEnvelope,
};

export default function Header({ siteInfo }) {
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click
  const handleMenuClose = () => {
    setOpen(false);
    setExpandedMenu(null);
  };

  // Handle submenu toggle on mobile
  const handleSubmenuToggle = (label) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  const menuItems = [
    { label: "HOME", href: "/" },
    {
      label: "ABOUT",
      submenu: [
        { label: "Profile", href: "/profile" },
        { label: "Interest", href: "/interested" },
      ],
    },
    {
      label: "CAREER",
      submenu: [
        { label: "Experience", href: "/experience" },
        { label: "Education & Courses", href: "/education" },
        { label: "Skills & Expertise", href: "/skills" },
      ],
    },
    {
      label: "PORTFOLIO",
      submenu: [
        { label: "Projects", href: "/projects" },
        { label: "Extracurricular Activities & Event", href: "/blog" },
        { label: "YouTube", href: "/youtube" },
      ],
    },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header
      id="header"
      className={`sticky top-0 left-0 right-0 z-40 bg-white transition-shadow duration-300 ${
        hasScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src={siteInfo.profilePic}
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="leading-tight hidden xs:block sm:block">
              <h1 className="text-lg font-medium">
                {siteInfo.first_name}{" "}
                <strong className="font-bold">{siteInfo.last_name}</strong>
              </h1>
              <p className="text-xs sm:text-sm">
                <strong>{siteInfo.title_1}</strong> {siteInfo.title_2}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8 ml-auto">
            <ul className="flex items-center gap-6">
              {menuItems.map((item) => (
                <li key={item.label} className="relative group">
                  {item.submenu ? (
                    <span className="hover:text-blue-600 cursor-pointer font-medium flex items-center gap-1.5 px-2 py-1">
                      {item.label}
                      <FaChevronDown
                        size={12}
                        className="group-hover:rotate-180 transition-transform duration-200"
                      />
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-blue-600 font-medium px-2 py-1 block"
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.submenu && (
                    <ul className="hidden group-hover:block absolute left-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-max top-full py-1 -mt-2 pt-3">
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

            {/* Desktop Social Links */}
            <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
              {Object.entries(siteInfo.links).map(([key, url]) => {
                const Icon = socialIcons[key];
                if (!Icon) return null;

                return (
                  <Link
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="w-9 h-9 flex items-center justify-center border border-gray-300 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:shadow-lg hover:scale-110"
                  >
                    <Icon size={16} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={handleMenuClose}
          style={{ top: "60px" }}
        />
      )}

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="fixed top-[60px] right-0 bottom-0 w-80 bg-white shadow-xl lg:hidden z-40 overflow-y-auto">
          {/* Close Button */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between z-50">
            <h2 className="font-semibold text-gray-800">Menu</h2>
            <button
              onClick={handleMenuClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <FaTimes size={20} className="text-gray-700" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="px-4 py-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => handleSubmenuToggle(item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-blue-50 rounded-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                      >
                        <span>{item.label}</span>
                        <FaChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            expandedMenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedMenu === item.label && (
                        <ul className="mt-2 pl-4 space-y-2 border-l-2 border-blue-200">
                          {item.submenu.map((subitem) => (
                            <li key={subitem.href}>
                              <Link
                                href={subitem.href}
                                onClick={handleMenuClose}
                                className="block px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                {subitem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleMenuClose}
                      className="block px-4 py-3 hover:bg-blue-50 rounded-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Social Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-700 mb-4 px-4">
                Follow
              </p>
              <div className="flex gap-3 px-4">
                {Object.entries(siteInfo.links).map(([key, url]) => {
                  const Icon = socialIcons[key];
                  if (!Icon) return null;

                  return (
                    <Link
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key}
                      className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-lg transition-all duration-300"
                    >
                      <Icon size={18} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
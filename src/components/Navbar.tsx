import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      submenu: [
        { name: "About Us", href: "/about#about-us" },
        { name: "Experience Power", href: "/about#experience-power" },
        { name: "Accredited Partners", href: "/about#accreditedpartners" },
        { name: "Success Stories", href: "/about#testimonials" },
      ],
    },
    { name: "Services", href: "/services", },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-900 rounded-2xl flex items-center justify-center transform rotate-12">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-10 h-10 object-contain transform -rotate-12"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full animate-ping"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              VKMS CONSULTANTS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.submenu ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    {link.name} <ChevronDown className="w-4 h-4 ml-1" />
                  </button>

                  {/* Submenu with gradient border */}
                  {isAboutOpen && (
                    <div className="absolute left-0 w-48 rounded-lg border-2 border-transparent bg-clip-border bg-gradient-to-r from-blue-300 to-blue-700 p-[2px] shadow-lg">
                      <div className="bg-white rounded-lg flex flex-col">
                        {link.submenu.map((sub) => (
                          <HashLink
                            key={sub.name}
                            smooth
                            to={sub.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
                          >
                            {sub.name}
                          </HashLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.name} className="flex flex-col">
                    <button
                      className="flex items-center justify-between w-full text-gray-700 font-medium hover:text-blue-600"
                      onClick={() => setIsAboutOpen(!isAboutOpen)}
                    >
                      {link.name}
                      <ChevronDown
                        className={`ml-2 w-4 h-4 transform transition ${
                          isAboutOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isAboutOpen && (
                      <div className="ml-4 mt-2 flex flex-col space-y-2">
                        {link.submenu.map((sub) => (
                          <HashLink
                            key={sub.name}
                            smooth
                            to={sub.href}
                            className="block text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </HashLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle hash navigation for About sections
  const handleHashNavigation = (path: string) => {
    const [pathname, hash] = path.split("#");
    if (location.pathname !== pathname) {
      navigate(pathname); // Navigate to /about first
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Wait for page render
    } else {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileOpen(false);
  };

  // Scroll to Featured Products
  const scrollToFeatured = () => {
    const section = document.getElementById("featured-products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSaleClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToFeatured, 300);
    } else {
      scrollToFeatured();
    }
    setMobileOpen(false);
  };

  // Submenus
  const subMenus = {
    about: [
      { name: "About Us", path: "/about#about-us" },
      { name: "Experience Power", path: "/about#experience-power" },
      { name: "Certification Process", path: "/about#process" },
      { name: "Trusted Partners", path: "/about#accreditedpartners" },
      { name: "Success Stories", path: "/about#testimonials" },
    ],
    services: [
      { name: "ISO Services", 
        path: "/iso-services",
       },
      { name: "Regulatory Practice", path: "/regulatory-practice" },
    ],
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
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
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium relative">
          <Link to="/" className="hover:text-blue-600">Home</Link>

          {/* About Dropdown */}
          <div className="group relative">
            <button className="hover:text-blue-600 flex items-center">
              About <FiChevronDown className="ml-1" />
            </button>
            <div className="absolute left-0 hidden group-hover:block">
              <div className="absolute left-0 w-56 rounded-lg border-2 border-transparent bg-clip-border bg-gradient-to-r from-blue-300 to-blue-700 p-[2px] shadow-lg">
                <div className="bg-white rounded-lg flex flex-col">
                  {subMenus.about.map((item) => (
                    <div
                      key={item.name}
                      onClick={() => handleHashNavigation(item.path)}
                      className="block px-4 py-2 hover:bg-blue-50  last:border-b-0 cursor-pointer"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="group relative">
            <Link to="/services" className="hover:text-blue-600 flex items-center">
              Services <FiChevronDown className="ml-1" />
            </Link>
            <div className="absolute left-0 hidden group-hover:block">
              <div className="absolute left-0 w-56 rounded-lg border-2 border-transparent bg-clip-border bg-gradient-to-r from-blue-300 to-blue-700 p-[2px] shadow-lg">
                <div className="bg-white rounded-lg flex flex-col">
                  {subMenus.services.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 hover:bg-blue-50  last:border-b-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link to="/team" className="hover:text-blue-600">Team</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            to="/"
            className="block px-6 py-3 hover:bg-blue-50"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Submenus */}
          {Object.entries(subMenus).map(([key, items]) => (
            <div key={key}>
              <div className="flex justify-between items-center ">
                <span
                  className="px-6 py-3 hover:bg-blue-50 flex-1 cursor-pointer"
                  onClick={() => setOpenMenu(openMenu === key ? "" : key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
                <button
                  className="px-6 py-3 hover:bg-blue-50"
                  onClick={() => setOpenMenu(openMenu === key ? "" : key)}
                >
                  <FiChevronDown
                    className={`transform transition-transform ${
                      openMenu === key ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {openMenu === key && (
                <div className="pl-8 border-l border-r  w-full bg-white">
                  <div className="rounded-lg border-2 border-transparent  p-[2px] shadow-lg">
                    <div className="bg-white flex flex-col">
                      {items.map((item) => (
                        <div
                          key={item.name}
                          onClick={() => handleHashNavigation(item.path)}
                          className="block px-4 py-2 hover:bg-blue-50  last:border-b-0 cursor-pointer"
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            to="/team"
            className="block px-6 py-3 hover:bg-blue-50"
            onClick={() => setMobileOpen(false)}
          >
            Team
          </Link>

          <Link
            to="/contact"
            className="block px-6 py-3 hover:bg-blue-50"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          {/* Sale button */}
          <div
            onClick={handleSaleClick}
            className="px-6 py-3 hover:bg-blue-50 flex items-center justify-between cursor-pointer font-medium text-blue-700"
          >
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

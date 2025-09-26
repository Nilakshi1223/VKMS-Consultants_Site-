import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Logo from "../assets/logo.png";

// ---------- Types ----------
interface AboutSubSection {
  name: string;
  id: string;
  path: string;
}

interface ISOItem {
  title: string;
  route: string;
}

interface SubService {
  title: string;
  route: string;
  submenu?: ISOItem[];
}

interface Section {
  name: string;
  id: string;
  path?: string;
  submenu?: AboutSubSection[] | SubService[];
}

// ---------- Data ----------
const aboutSubSections: AboutSubSection[] = [
  { name: "About Us", id: "about-us", path: "/about#about-us" },
  { name: "Experience Power", id: "experience-power", path: "/about#experience-power" },
  { name: "Certification Process", id: "process", path: "/about#process" },
  { name: "Trusted Partners", id: "accreditedpartners", path: "/about#accreditedpartners" },
  { name: "Success Stories", id: "testimonials", path: "/about#testimonials" },
];

const subServices: SubService[] = [
  {
    title: "ISO Services",
    route: "/iso-services",
    submenu: [
      { title: "ISO 9001:2015", route: "/iso9001" },
      { title: "ISO 13485:2016", route: "/iso13485" },
      { title: "ISO 14001:2015", route: "/iso14001" },
      { title: "ISO 15189:2012", route: "/iso15189" },
      { title: "ISO 17025:2017", route: "/iso17025" },
      { title: "ISO 2000:2018", route: "/iso20001" },
      { title: "ISO 22000:2018", route: "/iso22000" },
      { title: "ISO 22301:2019", route: "/iso22301" },
      { title: "ISO 27001:2013", route: "/iso27001" },
      { title: "ISO 37001:2019", route: "/iso37001" },
      { title: "ISO 45001:2018", route: "/iso45001" },
      { title: "ISO 50001:2018", route: "/iso50001" },
    ],
  },
  {
    title: "Regulatory Practice",
    route: "/regulatory-practice",
    submenu: [
      { title: "GLP", route: "/glp" },
      { title: "GMP", route: "/gmp" },
      { title: "HACCP", route: "/haccp" },
    ],
  },
];

const sections: Section[] = [
  { name: "Home", id: "home", path: "/" },
  { name: "About", id: "about", path: "/about", submenu: aboutSubSections },
  { name: "Services", id: "services", path: "/services", submenu: subServices },
  { name: "Team", id: "team", path: "/team" },
  { name: "Contact", id: "contact", path: "/contact" },
];

// ---------- Navbar ----------
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [expanded, setExpanded] = useState<string | null>(null); // for mobile accordion

  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  // Update active link on path change
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveLink("home");
    else if (path.startsWith("/about")) setActiveLink("about");
    else if (path.startsWith("/team")) setActiveLink("team");
    else if (path.startsWith("/contact")) setActiveLink("contact");
    else setActiveLink("services");
  }, [location]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNavClick = (id: string, path?: string) => {
    setActiveLink(id);
    setIsOpen(false);
    navigate(path || (id === "home" ? "/" : `/${id}`));
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
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
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              VKMS (PVT) LTD
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-base">
          {sections.map((section) => {
            const isActive = activeLink === section.id;

            if (section.submenu) {
              return (
                <div key={section.id} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-2 py-1 rounded-md transition ${
                      isActive
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    {section.name}
                    <FiChevronDown className="text-sm" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition w-64">
                    {"id" in section.submenu[0] ? (
                      (section.submenu as AboutSubSection[]).map((item) => (
                        <Link
                          key={item.id}
                          to={item.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))
                    ) : (
                      (section.submenu as SubService[]).map((service) => (
                        <div
                          key={service.title}
                          className="relative group/item px-4 py-2 hover:bg-blue-50"
                        >
                          <Link
                            to={service.route}
                            className="block text-gray-700"
                          >
                            {service.title}
                          </Link>
                          {service.submenu && (
                            <div className="absolute top-0 left-full ml-1 bg-white rounded-lg shadow-lg w-64 opacity-0 group-hover/item:opacity-100 invisible group-hover/item:visible transition">
                              {service.submenu.map((sub) => (
                                <Link
                                  key={sub.title}
                                  to={sub.route}
                                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                                >
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id, section.path)}
                className={`px-2 py-1 rounded-md transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                {section.name}
              </button>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#003B73]">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 animate-slideDown">
          {sections.map((section) => {
            const isExpanded = expanded === section.id;

            if (section.submenu) {
              return (
                <div key={section.id} className="border-b">
                  <button
                    onClick={() =>
                      setExpanded(isExpanded ? null : section.id)
                    }
                    className="w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-blue-50"
                  >
                    {section.name}
                    <FiChevronDown
                      className={`transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="pl-6 bg-gray-50">
                      {"id" in section.submenu[0] ? (
                        (section.submenu as AboutSubSection[]).map((item) => (
                          <Link
                            key={item.id}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-gray-600 hover:text-blue-700"
                          >
                            {item.name}
                          </Link>
                        ))
                      ) : (
                        (section.submenu as SubService[]).map((service) => (
                          <div key={service.title} className="border-t">
                            <Link
                              to={service.route}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-gray-700 font-medium hover:text-blue-700"
                            >
                              {service.title}
                            </Link>
                            {service.submenu && (
                              <div className="pl-4">
                                {service.submenu.map((sub) => (
                                  <Link
                                    key={sub.title}
                                    to={sub.route}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-2 text-gray-600 hover:text-blue-700"
                                  >
                                    {sub.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={section.id}
                to={section.path || "/"}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50"
              >
                {section.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

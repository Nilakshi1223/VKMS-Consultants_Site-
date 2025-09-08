import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Side - Logo & Description */}
          <div className="space-y-4">
            <Link to="/">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-900 rounded-2xl flex items-center justify-center transform rotate-12">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-10 h-10 object-contain transform -rotate-12"
                />
              </div>
              <span className="text-xl font-bold">VKMS CONSULTANTS</span>
            </div> </Link>
            <p className="text-gray-400  mt-6 leading-relaxed">
              Empowering businesses with ISO & Management Consultancy Excellence – helping organizations achieve global standards with ease.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">f</div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">w</div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">in</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="grid grid-cols-1 gap-2 text-gray-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/team" className="hover:text-blue-400 transition-colors">Team</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-400">
              <li><Link to="/iso9001" className="hover:text-blue-400 transition-colors">ISO 9001</Link></li>
              <li><Link to="/iso13485" className="hover:text-blue-400 transition-colors">ISO 13485</Link></li>
              <li><Link to="/iso14001" className="hover:text-blue-400 transition-colors">ISO 14001</Link></li>
              <li><Link to="/iso15189" className="hover:text-blue-400 transition-colors">ISO 15189</Link></li>
              <li><Link to="/iso17025" className="hover:text-blue-400 transition-colors">ISO 17025</Link></li>
              <li><Link to="/iso20000" className="hover:text-blue-400 transition-colors">ISO 20000</Link></li>
              <li><Link to="/iso22000" className="hover:text-blue-400 transition-colors">ISO 22000</Link></li>
              <li><Link to="/iso22301" className="hover:text-blue-400 transition-colors">ISO 22301</Link></li>
              <li><Link to="/iso27001" className="hover:text-blue-400 transition-colors">ISO 27001</Link></li>
              <li><Link to="/iso37001" className="hover:text-blue-400 transition-colors">ISO 37001</Link></li>
              <li><Link to="/iso45001" className="hover:text-blue-400 transition-colors">ISO 45001</Link></li>
              <li><Link to="/iso50001" className="hover:text-blue-400 transition-colors">ISO 50001</Link></li>
              <li><Link to="/glp" className="hover:text-blue-400 transition-colors">GLP</Link></li>
              <li><Link to="/gmp" className="hover:text-blue-400 transition-colors">GMP</Link></li>
              <li><Link to="/haccp" className="hover:text-blue-400 transition-colors">HACCP</Link></li>
              {/* Add more ISO services if needed */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2025  IDET (Private) Limited. All rights reserved.</p>
          <p className="text-gray-400 mt-4 md:mt-0">Made with ❤️ by VKMS Team</p>
        </div>
      </div>
    </footer>
  );
}

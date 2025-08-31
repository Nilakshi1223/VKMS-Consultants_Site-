import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Side - Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-900 rounded-2xl flex items-center justify-center transform rotate-12">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-10 h-10 object-contain transform -rotate-12"
                />
              </div>
              <span className="text-xl font-bold">VKMS CONSULTANTS</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
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
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/team" className="hover:text-blue-400 transition-colors">Team</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-400">
              <li><a href="/iso9001" className="hover:text-blue-400 transition-colors">ISO 9001</a></li>
              <li><a href="/iso13485" className="hover:text-blue-400 transition-colors">ISO 13485</a></li>
              <li><a href="/iso14001" className="hover:text-blue-400 transition-colors">ISO 14001</a></li>
              <li><a href="/iso15189" className="hover:text-blue-400 transition-colors">ISO 15189</a></li>
              <li><a href="/iso17025" className="hover:text-blue-400 transition-colors">ISO 17025</a></li>
              <li><a href="/iso20000" className="hover:text-blue-400 transition-colors">ISO 20000</a></li>
              <li><a href="/iso22000" className="hover:text-blue-400 transition-colors">ISO 22000</a></li>
              <li><a href="/iso22301" className="hover:text-blue-400 transition-colors">ISO 22301</a></li>
              <li><a href="/iso27001" className="hover:text-blue-400 transition-colors">ISO 27001</a></li>
              <li><a href="/iso37001" className="hover:text-blue-400 transition-colors">ISO 37001</a></li>
              <li><a href="/iso45001" className="hover:text-blue-400 transition-colors">ISO 45001</a></li>
              <li><a href="/iso50001" className="hover:text-blue-400 transition-colors">ISO 50001</a></li>
              <li><a href="/glp" className="hover:text-blue-400 transition-colors">GLP</a></li>
              <li><a href="/gmp" className="hover:text-blue-400 transition-colors">GMP</a></li>
              <li><a href="/haccp" className="hover:text-blue-400 transition-colors">HACCP</a></li>
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

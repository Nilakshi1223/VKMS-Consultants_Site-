import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Services from "./pages/Services";

import IsoServices from "./pages/ISOServices/IsoServices";
import RegulatoryPractice from "./pages/RegulatoryPractice/RegulatoryPractice";

// ISO Pages
import Iso9001 from "./pages/ISOServices/iso9001";
import Iso13485 from "./pages/ISOServices/iso13485";
import Iso14001 from "./pages/ISOServices/iso14001";
import Iso15189 from "./pages/ISOServices/iso15189";
import Iso17025 from "./pages/ISOServices/iso17025";
import Iso20001 from "./pages/ISOServices/iso20001";
import Iso22000 from "./pages/ISOServices/iso22000";
import Iso22301 from "./pages/ISOServices/iso22301";
import Iso27001 from "./pages/ISOServices/iso27001";
import Iso37001 from "./pages/ISOServices/iso37001";
import Iso45001 from "./pages/ISOServices/iso45001";
import Iso50001 from "./pages/ISOServices/iso50001";

// Other Standards
import GLP from "./pages/RegulatoryPractice/GLP";
import GMP from "./pages/RegulatoryPractice/GMP";
import HACCP from "./pages/RegulatoryPractice/HACCP";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ fixes scroll behavior */}

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services />} />

            <Route path="/iso-services" element={<IsoServices />} />
            <Route path="/regulatory-practice" element={<RegulatoryPractice />} />

            {/* ISO Routes */}
            <Route path="/iso9001" element={<Iso9001 />} />
            <Route path="/iso13485" element={<Iso13485 />} />
            <Route path="/iso14001" element={<Iso14001 />} />
            <Route path="/iso15189" element={<Iso15189 />} />
            <Route path="/iso17025" element={<Iso17025 />} />
            <Route path="/iso20001" element={<Iso20001 />} />
            <Route path="/iso22000" element={<Iso22000 />} />
            <Route path="/iso22301" element={<Iso22301 />} />
            <Route path="/iso27001" element={<Iso27001 />} />
            <Route path="/iso37001" element={<Iso37001 />} />
            <Route path="/iso45001" element={<Iso45001 />} />
            <Route path="/iso50001" element={<Iso50001 />} />

            {/* Other Standards */}
            <Route path="/glp" element={<GLP />} />
            <Route path="/gmp" element={<GMP />} />
            <Route path="/haccp" element={<HACCP />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

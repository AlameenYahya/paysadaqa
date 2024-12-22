// No need for the import statement
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Donate from "./pages/Donate";
import Login from "./pages/Login";
import RegisterMasjid from "./pages/RegisterMasjid";
import MasjidDetails from "./pages/MasjidDetails";
import Home from "./components/Home";
import AdminDashboard from "./pages/AdminDashboard";

import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
       

        {/* Main Content */}
        <div className="flex-1 min-h-screen bg-gray-100">
          <Header />
          <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <a
          href="/donate"
          className="bg-tertiary text-primary font-semibold px-6 py-3 rounded-r-lg shadow-lg hover:bg-primary hover:text-tertiary transition-all duration-300"
        >
          Donate Now
        </a>
      </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                 
                  <Features />
                </>
              }
            />
            
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register-masjid" element={<RegisterMasjid />} />
            <Route path="/home" element={<Home />} />
            <Route path="/masjid/:slug" element={<MasjidDetails />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route 
         
        />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

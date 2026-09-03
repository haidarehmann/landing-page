import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/header/header";
import CustomCursor from "./pages/customcursor/customcursor";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Features from "./pages/features/features";

import Footer from "./components/footer/footer";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Header />
      <CustomCursor />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
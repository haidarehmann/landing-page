import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from "./components/Header.jsx";
import AIFeatures from "./components/AIFeatures.jsx";
import PPTFeatures from "./components/PPTFeatures.jsx";
import Testimonials from "./components/Testimonials.jsx";
import ClientLogos from "./components/ClientLogos.jsx";
import Software from "./components/Software.jsx";
import Coast from "./components/Coast.jsx";
import CTA from "./components/CTA.jsx";
import Footer from './components/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AIFeatures />
      <PPTFeatures />
      <Testimonials />
      <ClientLogos />
      <Software />
      <Coast />
      <CTA />
      <Footer />
    </>
  )
}

export default App;

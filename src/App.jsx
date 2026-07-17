import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from "./components/Header.jsx";
import AIFeatures from "./components/AIFeatures.jsx";
import Accreditation from "./components/Accreditation.jsx";
import PPTFeatures from "./components/PPTFeatures.jsx";
import Counters from "./components/Counters.jsx";
import Software from "./components/Software.jsx";
import Coast from "./components/Coast.jsx";
import ClientLogos from "./components/ClientLogos.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import Competitor from "./components/Competitor.jsx";
import Pricing from "./components/Pricing.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from './components/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AIFeatures />
       <Accreditation />
      <PPTFeatures />
      <Counters />
      <Software />
      <Coast />
      <ClientLogos />
      <Testimonials />
      <CTA />
      <Competitor />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App;

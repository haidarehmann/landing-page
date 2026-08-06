import AIFeatures from "../../sections/aifeatures/aifeatures";
import Accreditation from "../../sections/accrediation/accrediation";
import PPTFeatures from "../../sections/pptfeatures/pptfeatures";
import Counters from "../../sections/counters/counters";
import Software from "../../sections/software/software";
import Coast from "../../sections/coast/coast";
import ClientLogos from "../../sections/clientlogos/clientlogos";
import Testimonials from "../../sections/testimonials/testimonials";
import CTA from "../../sections/cta/cta";
import Competitor from "../../sections/competitor/competitor";
import Pricing from "../../sections/pricing/pricing";
import FAQ from "../../sections/faq/faq";
import Contact from "../../sections/contact/contact";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
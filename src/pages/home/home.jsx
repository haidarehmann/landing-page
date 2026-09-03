import AIFeatures from "../../sections/aifeatures/aifeatures";
import Counters from "../../sections/counters/counters";
import Coast from "../../sections/coast/coast";
import CTA from "../../sections/cta/cta";
import Testimonials from "../../sections/testimonials/testimonials";
import MetricsSection from "../../sections/metricssection/metricssection";
import Pricing from "../../sections/pricing/pricing";
import FAQ from "../../sections/faq/faq";
import Contact from "../../sections/contact/contact";

function Home() {
  return (
    <>
      <AIFeatures />
      <Counters />
      <Coast />
      <CTA />
      <Testimonials />
      {/*<MetricsSection />
      <Pricing />
      <FAQ />
      <Contact />*/}
    </>
  );
}

export default Home;
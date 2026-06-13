import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import TemplatePreview from "../components/TemplatePreview";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import TrustedBy from "../components/TrustedBy";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <>
     <Navbar />
<Hero />
<Features />
<HowItWorks />
<Stats />
<Testimonials />
<TemplatePreview />
<Footer />
<TrustedBy />
<FAQ />
<CTA />
    </>
  );
}

export default Home;
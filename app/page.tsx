import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import SignatureProducts from "@/components/SignatureProducts";
import ProductShowcase from "@/components/ProductShowcase";
import Gallery from "@/components/Gallery";
import MeetOwner from "@/components/MeetOwner";
import Reviews from "@/components/Reviews";
import VisitUs from "@/components/VisitUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Legacy />
      <About />
      <WhyChooseUs />
      <SignatureProducts />
      <ProductShowcase />
      <Gallery />
      <MeetOwner />
      <Reviews />
      <VisitUs />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}

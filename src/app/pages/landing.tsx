"use client"
import NavBar from "../components/navbar";
import Hero from "../components/hero";
import Logo from "../components/logo";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import Footer from "../components/footer";




export default function Landing() {
  return (
    <main className="container mx-auto">
      <NavBar />
      <div className="Logo">
      </div>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}


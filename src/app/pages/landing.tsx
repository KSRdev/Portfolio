"use client"
import NavBar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Portfolio from "../components/portfolio";




export default function Landing() {
  return (
    <main className="container mx-auto">
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
    </main>
  );
}


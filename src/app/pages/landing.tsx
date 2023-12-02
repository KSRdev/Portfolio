import NavBar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";




export default function Landing() {
  return (
    <main className="container mx-auto">
      <NavBar />
      <Hero />
      <About />
    </main>
  );
}


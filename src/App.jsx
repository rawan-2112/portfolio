import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#fdf6ec] text-[#4b2e2e] font-sans">
      <Navbar />
      <main className="space-y-20">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

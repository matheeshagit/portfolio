import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section id="about" className="min-h-screen bg-slate-950 text-white p-10">
        About Section Content
      </section>

      <section id="skills" className="min-h-screen bg-slate-900 text-white p-10">
        Skills Section Content
      </section>

      <section id="projects" className="min-h-screen bg-slate-950 text-white p-10">
        Projects Section Content
      </section>

      <section id="contact" className="min-h-screen bg-slate-900 text-white p-10">
        Contact Section Content
      </section>
    </>
  );
}

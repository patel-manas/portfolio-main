import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Landing from "@/components/Landing";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-background">
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

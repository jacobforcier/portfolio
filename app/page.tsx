import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Pricing />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 px-6 text-center text-white/25 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Jake Forcier. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/jacobforcier"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00f5d4] transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:jacob.forcier@gmail.com"
              className="hover:text-[#00f5d4] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

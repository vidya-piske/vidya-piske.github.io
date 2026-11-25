import { Nav } from "@/components/Nav";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Hero,
  Playground,
  Skills,
  Work,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Playground />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

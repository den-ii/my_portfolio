import { default as Hero } from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Pad from "./components/pad";

function Home() {
  return (
    <div>
      <Hero />
      <Pad />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;

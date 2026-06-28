import Profile from "@/components/Profile";
import Service from "@/components/Service";
import Project from "@/components/Project";
import Blog from "@/components/Blog";
import Counter from "@/components/Counter";
import Contact from "@/components/Contact";
import Slider from "@/components/Slider";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Interested from "@/components/Interested";

export default function Home() {

  return (
  <main>
      <Slider />
      <Profile />
      <Education />
      <Experience />
      <Skills />
      <Project />
      <Interested />
      <Blog />
      <Counter />
      <Service />
      <Contact />
  </main>
  );
}
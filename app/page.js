import AboutUs from "@/components/AboutMe";
import Service from "@/components/Service";
import Project from "@/components/Project";
import Blog from "@/components/Blog";
import Counter from "@/components/Counter";
import Contact from "@/components/Contact";
import Slider from "@/components/Slider";
import Skills from "@/components/Skills";
import EducationAndExperience from "@/components/EducationAndExperience";

export default function Home() {

  return (
    <main>
        <Slider/>
        <AboutUs/>
        <EducationAndExperience/>
        <Skills/>
        <Project/>
        <Blog/>
        <Service/>
        <Counter/>
        <Contact/>
    </main>
  );
}
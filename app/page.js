
import Link from "next/link";
import AboutUs from "@/components/AboutMe";
import Service from "@/components/Service";
import Gallary from "@/components/Project";
import Blog from "@/components/Blog";
import Counter from "@/components/Counter";
import Contact from "@/components/Contact";
import LocationMap from "@/components/LocationMap";
import Slider from "@/components/Slider";

export default function Home() {

  return (
    <main>
        <Slider/>
        <AboutUs/>
        <Service/>
        <Gallary/>
        <Blog/>
        <Counter/>
        <Contact/>
        <LocationMap/>
    </main>
  );
}
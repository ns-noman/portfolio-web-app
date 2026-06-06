"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "Cyber Security Mindset",
    desc: "Protecting systems, data, and digital infrastructure with modern security practices.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    title: "Hacker Workflow",
    desc: "Thinking like a developer and attacker to build secure applications.",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
  },
  {
    title: "Code. Break. Improve.",
    desc: "Writing clean code while understanding vulnerabilities and system weaknesses.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Dark Terminal Environment",
    desc: "Working inside Linux, terminals, APIs, and backend systems.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  },
  {
    title: "Future Software Engineer",
    desc: "Building scalable, secure, and intelligent software systems.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  },
];

export default function HackerSlider() {
  return (
    <section className="w-full h-screen relative">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >

        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">

              {/* Background Image */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* Dark Hacker Overlay */}
              <div className="absolute inset-0 bg-black/70" />

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

                <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wider">
                  {item.title}
                </h1>

                <p className="text-gray-300 mt-4 max-w-2xl text-sm md:text-lg">
                  {item.desc}
                </p>

                {/* Hacker line effect */}
                <div className="mt-6 w-40 h-[2px] bg-green-500 shadow-[0_0_20px_#00ff88]" />

              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  );
}
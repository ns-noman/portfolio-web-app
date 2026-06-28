"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

// ─── HOOKS ───────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}



// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function Profile() {
  const [titleRef, titleInView] = useInView(0.1);

  return (
    <section id="gallery" className="py-4">
      <div className="container mx-auto px-4"> 
      {/* ── Section Title ── */}
      <div
        ref={titleRef}
        className={`section--title mb-14 transition-all duration-700 ${
          titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl font-bold tracking-tight">
          <strong>ABOUT ME</strong>
        </h2>
        <div
          className={`mt-3 h-[3px] bg-blue-600 rounded-full transition-all duration-700 delay-300 ${
            titleInView ? "w-14 opacity-100" : "w-0 opacity-0"
          }`}
        />
      </div>

      {/* ── Who Am I + Skills ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-4">

        {/* Left – Who Am I */}
        <div
          className={`transition-all duration-700 delay-150 ${
            titleInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 tracking-tight">
            WHO <strong>AM I</strong>?
          </h3>

          <div className="relative mb-8 pl-5 border-l-2 border-blue-100">
            <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-2 ring-white" />
            <p className="text-justify leading-[1.95] text-gray-600 text-sm">
              I am <strong className="text-gray-900">Nowab Shorif</strong>, a passionate Web
              Application Developer from Bangladesh with over{" "}
              <strong className="text-gray-900">{((new Date() - new Date('2023-01-01')) / (86400000 * 365.25)).toFixed(2)}+ years</strong> of experience in building
              modern, scalable, and user-friendly web solutions. I specialize in technologies
              like Laravel, PHP, JavaScript, React, Next.js, CodeIgniter, MySQL, HTML, CSS, and
              Bootstrap, and I enjoy turning complex problems into clean and efficient
              applications. I completed my <strong className="text-gray-900">BSc in Computer Science and Engineering</strong> from{" "}
              <strong className="text-gray-900">Dhaka International University in 2025</strong>, while
              simultaneously working on real-world projects such as ERP systems, e-commerce
              platforms, and management software. Currently, I work as a{" "}
              <strong className="text-gray-900">Software Developer at Bangladesh Advanced Technology Ltd.</strong>, where I
              continue to build scalable and innovative solutions. My goal is to continuously
              improve my skills, explore new technologies, and contribute to impactful software
              solutions in both local and global markets.
            </p>
          </div>

          <a 
            href="/documents/Curriculum Vitae-Nowab Shorif.pdf" 
            className="inline-flex items-center gap-2 border-2 border-gray-900 bg-transparent text-gray-900 px-[30px] py-[15px] font-bold text-lg leading-[22px] no-underline hover:text-gray-900 hover:border-gray-900 focus:outline-none group whitespace-nowrap" 
            download="Curriculum Vitae-Nowab Shorif.pdf"
          > 
            DOWNLOAD MY CV 
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 flex-shrink-0" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2} 
            > 
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              /> 
            </svg> 
          </a>
        </div>

        {/* Video CV */}
        <div
          className={`transition-all duration-700 delay-200 ${
            titleInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 tracking-tight">
            Video <strong>CV</strong>
          </h3>

          {/* <p className="mb-8 leading-7 text-gray-600 text-sm">
            Watch a quick introduction to my background, skills, and experience as a full-stack developer. This personal video covers my technical expertise, key projects, and what I bring to the table.
          </p> */}

          <div className="relative w-full max-w-3xl">
            {/* Video Container */}
            <div className="relative w-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-black flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/gyFaBZ_BQhc?modestbranding=1&rel=0"
                  title="Video CV"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Video Info Card */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Play className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Duration
                    </p>
                    <p className="text-lg font-bold text-gray-900">1 mins</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Play className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Published
                    </p>
                    <p className="text-lg font-bold text-gray-900">2024</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Play className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      HD Quality
                    </p>
                    <p className="text-lg font-bold text-gray-900">1080p</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
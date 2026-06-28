"use client";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const INTERESTS = {
  technical: [
    { label: "Research", icon: "🔬" },
    { label: "Machine Learning", icon: "🤖" },
    { label: "Data Science", icon: "📊" },
    { label: "Software Engineering", icon: "⚙️" },
    // { label: "Cloud Computing", icon: "☁️" },
    { label: "DevOps", icon: "🔄" },
    { label: "System Design", icon: "🏗️" },
    { label: "Cybersecurity", icon: "🔐" },
  ],
  content: [
    { label: "YouTube", icon: "▶️" },
    { label: "Podcasts", icon: "🎙️" },
    { label: "Tech Blogs", icon: "📝" },
    { label: "Books", icon: "📚" },
    { label: "Online Courses", icon: "🎓" },
    { label: "Tech News", icon: "📰" },
    { label: "GitHub", icon: "🐙" },
  ],
  sports: [
    { label: "Basketball", icon: "🏀" },
    { label: "Badminton", icon: "🏸" },
    { label: "Cricket", icon: "🏏" },
    { label: "Gym & Fitness", icon: "💪" },
    { label: "Swimming", icon: "🏊" },
    { label: "Cycling", icon: "🚴" },
  ],
};

function SectionDivider({ label }) {
  const [ref, inView] = useInView(0.2);
  return (
    <div ref={ref} className={`flex items-center gap-4 my-12 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-200" />
      <span className="text-xs tracking-[0.15em] text-blue-500 font-bold uppercase px-4">{label}</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-200" />
    </div>
  );
}

function InterestTag({ label, icon, delay, inView }) {
  return (
    <div className={`inline-block transition-all duration-500 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800 border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 cursor-default group">
        <span className="text-lg transition-transform group-hover:scale-110 duration-300">{icon}</span>
        {label}
      </div>
    </div>
  );
}

function InterestCategory({ title, interests, delay = 0 }) {
  const [ref, inView] = useInView(0.15);
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${delay}ms` }}>
      <h3 className="text-lg font-bold mb-5 tracking-tight text-gray-800">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {interests.map((interest, i) => (
          <InterestTag key={interest.label} label={interest.label} icon={interest.icon} delay={i * 50} inView={inView} />
        ))}
      </div>
    </div>
  );
}

export default function Interested() {
  const [titleRef, titleInView] = useInView(0.1);
  return (
    <section id="interested" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`mb-16 transition-all duration-700 ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">I'm Interested In</h2>
          <div className={`h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-700 ${titleInView ? "w-16 opacity-100" : "w-0 opacity-0"}`} style={{ transitionDelay: "200ms" }} />
          <p className="text-gray-600 text-base mt-4 leading-relaxed">Passionate about exploring emerging technologies, data-driven insights, and staying engaged with current trends through various learning channels.</p>
        </div>
        <SectionDivider label="Technical Interests" />
        <div className="mb-12">
          <InterestCategory title="Research & AI" interests={INTERESTS.technical} delay={0} />
        </div>
        <SectionDivider label="Learning & Content" />
        <div className="mb-12">
          <InterestCategory title="Content Platforms" interests={INTERESTS.content} delay={0} />
        </div>
        <SectionDivider label="Sports & Recreation" />
        <div>
          <InterestCategory title="Activities" interests={INTERESTS.sports} delay={0} />
        </div>
      </div>
    </section>
  );
}
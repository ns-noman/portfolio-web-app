"use client";
import { useEffect, useRef, useState } from "react";

// ─── HOOKS ────────────────────────────────────────────────────────────────────
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

// ─── DATA ────────────────────────────────────────────────────────────────────
const PROGRAMMING_LANGUAGES = [
  { label: "PHP", value: 95 },
  { label: "JAVASCRIPT", value: 85 },
  { label: "TYPESCRIPT", value: 75 },
  { label: "HTML5", value: 90 },
  { label: "CSS3 / TAILWIND", value: 90 },
  { label: "MYSQL / DATABASE", value: 92 },
];

const FRAMEWORKS = [
  { label: "NEXT.JS", value: 85 },
  { label: "REACT.JS", value: 85 },
  { label: "LARAVEL", value: 95 },
  { label: "CODEIGNITER", value: 78 },
  { label: "BOOTSTRAP", value: 80 },
  { label: "ERP SYSTEMS", value: 92 },
];

const BACKEND_SKILLS = [
  "REST API Development",
  "MVC Architecture",
  "Authentication & Authorization",
  "Multi-Tenant Application Development",
  "Server-Side Development",
  "Laravel Eloquent ORM",
];

const FRONTEND_SKILLS = [
  "Responsive Web Design",
  "UI Implementation",
  "Component-Based Development",
  "State Management",
  "Performance Optimization",
  "Accessibility",
];

const DATABASE_SKILLS = [
  "MySQL",
  "MongoDB",
  "Database Design",
  "Query Optimization",
  "Indexing & Performance",
  "Data Modeling",
];

const ERP_SKILLS = [
  "ERP Development",
  "Inventory Management Systems",
  "POS Systems",
  "Attendance Management Systems",
  "E-commerce Solutions",
  "Logistics Management Systems",
];

const TOOLS_SKILLS = [
  "Git & GitHub",
  "VS Code",
  "Postman",
  "Laragon",
  "cPanel",
  "Docker Basics",
];

const SOFTWARE_SKILLS = [
  "Software Architecture",
  "System Analysis & Design",
  "CRUD Application Development",
  "API Integration",
  "Debugging & Troubleshooting",
  "Code Refactoring",
];

const PROFESSIONAL_SKILLS = [
  "Problem Solving",
  "Analytical Thinking",
  "Team Collaboration",
  "Communication",
  "Project Management",
  "Requirement Analysis",
];

// ─── COMPONENTS ────────────────────────────────────────────────────────────────────
function SectionDivider({ label }) {
  const [ref, inView] = useInView(0.2);
  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 my-12 transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-200" />
      <span className="text-xs tracking-[0.15em] text-blue-500 font-bold uppercase px-4">
        {label}
      </span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-200" />
    </div>
  );
}

function SkillBar({ label, value, delay }) {
  const [ref, inView] = useInView(0.2);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-xs tracking-widest text-gray-700 uppercase">
          {label}
        </h4>
        <span
          className={`text-xs font-bold text-blue-600 transition-all duration-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
          style={{ transitionDelay: `${delay + 500}ms` }}
        >
          {value}%
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${value}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

function SkillTag({ label, delay, inView }) {
  return (
    <div
      className={`inline-block transition-all duration-500 ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors">
        {label}
      </span>
    </div>
  );
}

function SkillCategory({ title, skills, isPercentage = false, delay = 0 }) {
  const [ref, inView] = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-lg font-bold mb-5 tracking-tight text-gray-800">
        {title}
      </h3>

      {isPercentage ? (
        <div className="space-y-5">
          {skills.map((skill, i) => (
            <SkillBar
              key={skill.label}
              label={skill.label}
              value={skill.value}
              delay={i * 60}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill, i) => (
            <SkillTag
              key={skill}
              label={skill}
              delay={i * 40}
              inView={inView}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Skills() {
  const [titleRef, titleInView] = useInView(0.1);

  return (
    <section id="activities" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* ── Section Title ── */}
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            My Skills & Expertise
          </h2>
          <div
            className={`h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-700 ${
              titleInView ? "w-16 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          />
          <p className="text-gray-600 text-base mt-4 leading-relaxed">
            Experienced Full-Stack Developer specializing in enterprise ERP systems, web
            applications, and scalable solutions using modern technologies.
          </p>
        </div>

        {/* ── Programming Languages & Frameworks Row 1 ── */}
        <SectionDivider label="Core Competencies" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <SkillCategory
            title="Programming Languages"
            skills={PROGRAMMING_LANGUAGES}
            isPercentage={true}
            delay={0}
          />
          <SkillCategory
            title="Frameworks & Libraries"
            skills={FRAMEWORKS}
            isPercentage={true}
            delay={100}
          />
        </div>

        {/* ── Backend & Frontend Row 2 ── */}
        <SectionDivider label="Development Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <SkillCategory
            title="Backend Development"
            skills={BACKEND_SKILLS}
            isPercentage={false}
            delay={0}
          />
          <SkillCategory
            title="Frontend Development"
            skills={FRONTEND_SKILLS}
            isPercentage={false}
            delay={100}
          />
        </div>

        {/* ── Database & ERP Row 3 ── */}
        <SectionDivider label="Specialized Systems" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <SkillCategory
            title="Database Management"
            skills={DATABASE_SKILLS}
            isPercentage={false}
            delay={0}
          />
          <SkillCategory
            title="ERP & Business Solutions"
            skills={ERP_SKILLS}
            isPercentage={false}
            delay={100}
          />
        </div>

        {/* ── Tools & Software Row 4 ── */}
        <SectionDivider label="Tools & Methodologies" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <SkillCategory
            title="Tools & Platforms"
            skills={TOOLS_SKILLS}
            isPercentage={false}
            delay={0}
          />
          <SkillCategory
            title="Software Engineering"
            skills={SOFTWARE_SKILLS}
            isPercentage={false}
            delay={100}
          />
        </div>

        {/* ── Professional Skills Row 5 ── */}
        <SectionDivider label="Professional Attributes" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SkillCategory
            title="Professional Skills"
            skills={PROFESSIONAL_SKILLS}
            isPercentage={false}
            delay={0}
          />
          <div className="flex items-center justify-center md:justify-start">
          
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const EDUCATION = [
  {
    period: "2022 – 2025",
    org:    "DHAKA INTERNATIONAL UNIVERSITY",
    url:    "https://diu.ac/",
    title:  "BSc in Computer Science & Engineering",
    desc:   "Pursuing BSc in CSE with a CGPA of <strong>3.40 / 4.00</strong>. Focused on software development, web technologies, database management, and system design.",
  },
  {
    period: "2016 – 2020",
    org:    "FENI POLYTECHNIC INSTITUTE",
    url:    "https://feni.polytech.gov.bd/",
    title:  "Diploma in Computer Technology",
    desc:   "Completed Diploma in Computer Technology with a GPA of <strong>3.64 / 4.00</strong>. Gained practical knowledge in programming, networking, hardware, and database systems.",
  },
  {
    period: "2016",
    org:    "SECONDARY SCHOOL CERTIFICATE",
    url:    "https://www.sohopathi.com/hazari-hat-high-school-and-b-m-college-2/",
    title:  "SSC (Vocational – Computer Technology)",
    desc:   "Successfully completed SSC (Vocational) in Computer Technology with a GPA of <strong>4.61 / 5.00</strong>, building a strong foundation in computer applications.",
  },
];

const EXPERIENCE = [
  {
    period: "Aug 2024 – Present",
    org:    "BANGLADESH ADVACED TECHNOLOGY LIMITED",
    url:    "https://batlbd.com/",
    title:  "PHP / LARAVEL PROGRAMMER",
    desc:   "Developing and maintaining enterprise-level ERP systems using Laravel, MySQL, Oracle 12c, JavaScript, and RESTful APIs — covering logistics, inventory, HRM, accounting, and business automation.",
  },
  {
    period: "Jan 2023 – Jul 2024",
    org:    "SYS DEV LTD",
    url:    "https://sysdevltd.com",
    title:  "SOFTWARE DEVELOPER",
    desc:   "Developed web applications and ERP solutions using Laravel, React.js, PHP, JavaScript, and MySQL. Participated in system analysis, API integration, debugging, and performance optimization.",
  },
];

const COURSES = [
  {
    period: "Jul 2022 – Dec 2022",
    org:    "IsDB-BISEW",
    url:    "https://www.isdb-bisew.org/",
    title:  "Web Application Development",
    desc:   "Professional training on Web Application Development using Laravel and React under the IsDB-BISEW IT Scholarship Programme. Covered PHP, Laravel, React.js, REST APIs, MySQL, Git, and best practices.",
  },
  {
    period: "Jan 2018 – Jun 2018",
    org:    "SKILLED BASED IT",
    url:    "https://sbit.com.bd/",
    title:  "Core Java with OOP",
    desc:   "Core Java training focusing on OOP, Swing GUI Development, event handling, database connectivity, and desktop application development.",
  },
  {
    period: "2017 – Present",
    org:    "SELF LEARNING",
    url:    "",
    title:  "Advanced Software Development",
    desc:   "Continuously learning Laravel, React.js, Next.js, Node.js, ERP architecture, API integration, SaaS development, scalable system design, and modern engineering practices.",
  },
];

const VOLUNTEER = [
  {
    period: "Feb 2023 – Present",
    org:    "BD CLEAN",
    url:    "https://bdclean.org/",
    title:  "Volunteer Member",
    desc:   "Actively participating in environmental awareness campaigns, community cleaning programs, and social development activities aimed at creating a cleaner and more sustainable Bangladesh.",
  },
  {
    period: "Aug 2024 – Present",
    org:    "ASSUNNA FOUNDATION",
    url:    "https://assunnahfoundation.org/",
    title:  "Social Volunteer",
    desc:   "Contributing to charitable initiatives, social welfare activities, community support programs, and humanitarian projects that benefit underprivileged people.",
  },
  {
    period: "Sep 2024 – Present",
    org:    "BLOOD DONATING ORGANIZATION",
    url:    "https://blood.quantummethod.org.bd/en/",
    title:  "Community Volunteer",
    desc:   "Supporting blood donation awareness initiatives, coordinating donor networks, and assisting individuals in emergency blood requirements.",
  },
];

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


function TimelineItem({ period, org, url, title, desc, index }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`about--info-item mb-8 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        {/* Left meta */}
        <div className="sm:col-span-4">
          <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mb-1.5 tracking-wide">
            {period}
          </span>
          <h5 className="font-bold uppercase text-xs tracking-wider text-gray-500 leading-snug">
            {url ? (
              <Link href={url} target='_blank' rel='noopener noreferrer' className="text-blue-600 underline">
                {org}
              </Link>
            ) : (
              org
            )}
          </h5>
        </div>

        {/* Right content */}
        <div className="sm:col-span-8 about--info-border border-l-0 sm:border-l-2 border-blue-100 sm:pl-5 relative">
          {/* Timeline dot */}
          <span className="hidden sm:block absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-500 ring-2 ring-white" />
          <h4 className="text-sm font-bold mb-1.5 text-gray-900 uppercase tracking-wide">
            {title}
          </h4>
          <p className="text-gray-500 text-sm leading-7" dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
      </div>
    </div>
  );
}

function InfoSection({ heading, boldPart, rest, items }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div className="about--info-wrapper">
      <h3
        ref={ref}
        className={`text-2xl font-bold mb-8 tracking-tight transition-all duration-700 ${
          inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
        }`}
      >
        <strong>{boldPart}</strong>
        {rest}
      </h3>
      {items.map((item, i) => (
        <TimelineItem key={i} index={i} {...item} />
      ))}
    </div>
  );
}

function SectionDivider({ label }) {
  const [ref, inView] = useInView(0.2);
  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 my-14 transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-100" />
      <span className="text-xs tracking-[0.2em] text-blue-400 font-bold uppercase px-3">
        {label}
      </span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-100" />
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function EducationAndExperience() {
  const [titleRef, titleInView] = useInView(0.1);

  return (
    <section className="py-4">
      <div className="container mx-auto px-4"> 
      {/* ── Section Title ── */}
      <div
        ref={titleRef}
        className={`section--title mb-14 transition-all duration-700 ${
          titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl font-bold tracking-tight">
          <strong>Education & Experience</strong>
        </h2>
      </div>

      {/* ── About Info ── */}
      <div className="about--info">
        <SectionDivider label="Experience & Education" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-2">
          <InfoSection boldPart="EDU" rest="CATION"           items={EDUCATION}   />
          <InfoSection boldPart="PROFESSIONAL WORK " rest="EXPERIENCE" items={EXPERIENCE} />
        </div>

        <SectionDivider label="Courses & Community" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <InfoSection boldPart="PROFESSIONAL" rest=" COURSES"           items={COURSES}   />
          <InfoSection boldPart="VOLUNTEER "   rest="EXPERIENCE"         items={VOLUNTEER} />
        </div>
      </div>

      </div>
    </section>
  );
}
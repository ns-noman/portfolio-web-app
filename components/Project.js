"use client";

import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const FILTER_TABS = [
  { label: "ALL PROJECTS",  value: "all"               },
  { label: "WEBSITE",       value: "website-item"      },
  { label: "LOGO",          value: "logo-item"         },
  { label: "APPLICATION",   value: "application-item"  },
  { label: "ILLUSTRATION",  value: "illustation-item"  },
  { label: "PRINT DESIGN",  value: "print-design-item" },
];

const projects = [
  {
    id: 1,
    title: "Multi Tenant Bike Dealership ERP With E-Commerce",
    image: "/img/projects-img/bike-dealership-erp/thumbnail.png",
    desc: "A full-featured ERP system for bike dealerships with multi-tenant architecture and integrated e-commerce platform.",
    
    tech: ["Laravel", "React", "MySQL", "Tailwind", "REST API"],

    highlights: [
      "Multi-tenant architecture",
      "Inventory & sales management",
      "E-commerce integration",
      "Role-based authentication",
      "Admin dashboard with analytics"
    ],

    cats: ["erp", "ecommerce", "web-app"],

    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
    caseStudy: false,
  },

  {
    id: 2,
    title: "Brand Identity Kit",
    image: "/img/gallery-img/gallery-photo-2.png",
    desc: "Complete brand identity system including logo design, typography, and brand guidelines for a tech startup.",

    tech: ["Adobe Illustrator", "Photoshop"],

    highlights: [
      "Logo system design",
      "Color palette creation",
      "Typography system",
      "Brand guideline documentation"
    ],

    cats: ["branding", "logo", "design"],

    live: "",
    github: "",
    caseStudy: true,
  },

  {
    id: 3,
    title: "Minimal Logo Redesign",
    image: "/img/gallery-img/gallery-photo-3.png",
    desc: "A modern minimalist logo redesign for a consulting firm focusing on clean identity and strong typography.",

    tech: ["Illustrator", "Figma"],

    highlights: [
      "Minimalist design approach",
      "Typography refinement",
      "Brand modernization"
    ],

    cats: ["logo", "branding"],

    live: "",
    github: "",
    caseStudy: false,
  },

  {
    id: 4,
    title: "Inventory Management System",
    image: "/img/gallery-img/gallery-photo-4.png",
    desc: "ERP-based inventory system with real-time stock tracking, reporting, and admin control panel.",

    tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],

    highlights: [
      "Real-time inventory tracking",
      "Stock alerts system",
      "Sales & purchase modules",
      "Advanced reporting dashboard"
    ],

    cats: ["erp", "application", "admin-panel"],

    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
    caseStudy: false,
  },
];

const MODAL_DETAILS = {
  tags: ["UX Design", "UI Design", "Prototype", "Design", "Identity"],
  image: "img/gallery-img/project-01.jpg",
  desc: [
    "I created a full e-commerce web template for a client planning their launch. The design followed the latest UX principles — structured hierarchy, clear conversion paths, and accessible components throughout.",
    "Following that, I built a companion admin dashboard optimised for the administrator's workflow. The project wrapped with a full handoff including design tokens and a component library.",
  ],
};

// ─── HOOK ────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── GALLERY CARD ─────────────────────────────────────────────────────────────

function GalleryCard({ item, index, onOpen }) {
  const [ref, inView] = useInView(0.05);

  return (
    <div
      ref={ref}
      data-cat={item.cats.join(" ")}
      className={`thumbnail gallery-item w-full transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${(index % 4) * 90}ms` }}
    >
      {/* ── Image Area ── */}
      <div className="relative overflow-hidden group cursor-pointer bg-gray-100 aspect-[4/3]"
           onClick={() => onOpen(item)}>

        <img
          src={item.image}
          alt={item.title}
          className="img-fluid w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Case study badge */}
        {item.caseStudy && (
          <span className="gallery--case-study absolute top-0 left-0 z-10 bg-blue-600 text-white text-[9px] font-bold tracking-[0.18em] px-2.5 py-1 uppercase">
            Case Study
          </span>
        )}

        {/* Hover overlay */}
        <div className="gallery-overlay absolute inset-0 bg-gray-900/80 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          {/* Corner brackets */}
          <span className="absolute top-3 left-3  w-4 h-4 border-t-2 border-l-2 border-white/70 group-hover:w-7 group-hover:h-7 transition-all duration-300" />
          <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/70 group-hover:w-7 group-hover:h-7 transition-all duration-300" />
          <span className="absolute bottom-3 left-3  w-4 h-4 border-b-2 border-l-2 border-white/70 group-hover:w-7 group-hover:h-7 transition-all duration-300" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/70 group-hover:w-7 group-hover:h-7 transition-all duration-300" />

          <div className="translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400 text-center px-4">
            {item.caseStudy && (
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/50 text-white mb-3 icon-link">
                <i className="icon fa fa-file-text-o text-xs" />
              </span>
            )}
            <button className="btn gallery--window block mx-auto text-[10px] font-bold tracking-[0.16em] uppercase px-5 py-2 border border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-200">
              View Project
            </button>
          </div>
        </div>
      </div>

      {/* ── Text Below Image ── */}
      <div className="pt-3 pb-1 px-0.5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-sm font-bold tracking-wide text-gray-900 uppercase leading-snug">
            {item.title}
          </h3>
          {/* Category pill — first cat */}
          <span className="shrink-0 text-[9px] font-semibold tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 uppercase mt-0.5">
            {item.cats[0].replace("-item", "")}
          </span>
        </div>
        <p className="text-xs text-gray-500 leading-5 line-clamp-2">{item.desc}</p>
      </div>
    </div>
  );
}

// ─── MODAL ───────────────────────────────────────────────────────────────────

function Modal({ isOpen, onClose, item }) {
  useEffect(() => {
    if (!isOpen) return;
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <>
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .modal-animate {
          animation: modalIn 0.3s ease-out both;
        }
      `}</style>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden modal-animate flex flex-col max-h-[90vh]">

          {/* HEADER */}
          <div className="flex items-start justify-between px-6 py-5 border-b">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {item.title}
              </h2>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-2">
                {(item.tech || ["Laravel", "React", "MySQL"]).map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100 text-gray-500 text-xl"
            >
              ×
            </button>
          </div>

          {/* BODY */}
          <div className="overflow-y-auto">

            {/* Image */}
            <div className="relative w-full h-[260px] md:h-[350px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="px-6 py-5 space-y-5">

              {/* Description */}
              <p className="text-gray-600 leading-7 text-sm">
                {item.description}
              </p>

              {/* Highlights */}
              <div>
                <h4 className="font-semibold mb-2 text-gray-900">
                  Key Highlights
                </h4>

                <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                  {(item.highlights || [
                    "Clean architecture",
                    "Responsive UI",
                    "REST API integration",
                  ]).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">

                {/* Live Preview */}
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition"
                  >
                    🔗 Live Preview
                  </a>
                )}

                {/* GitHub */}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-black transition"
                  >
                    💻 GitHub
                  </a>
                )}

                {/* Case Study */}
                {item.caseStudy && (
                  <a
                    href={item.caseStudy}
                    target="_blank"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                  >
                    📘 Case Study
                  </a>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function Project() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animKey,      setAnimKey]      = useState(0);
  const [modalOpen,    setModalOpen]    = useState(false);
  const [activeItem,   setActiveItem]   = useState(null);

  const [titleRef,  titleInView]  = useInView(0.1);
  const [filterRef, filterInView] = useInView(0.1);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((it) => it.cats.includes(activeFilter));

  const handleFilter = (value) => {
    if (value === activeFilter) return;
    setActiveFilter(value);
    setAnimKey((k) => k + 1);
  };

  const openModal  = (item) => { setActiveItem(item); setModalOpen(true); };
  const closeModal = ()     => setModalOpen(false);

  return (
    <section id="gallery" className="py-4">
      <div className="container mx-auto px-4">

        {/* ── Title ── */}
        <div
          ref={titleRef}
          className={`section--title mb-10 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight">
            <strong>My Projects</strong>
          </h2>
          <div
            className={`mt-3 h-[3px] bg-blue-600 rounded-full transition-all duration-700 delay-300 ${
              titleInView ? "w-14 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* ── Filter Tabs ── */}
        <div
          ref={filterRef}
          className={`gallery-filter-menu mb-10 transition-all duration-700 delay-100 ${
            filterInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-wrap gap-2 list-none p-0 m-0">
          </div>
        </div>

        {/* ── Grid — 4 columns ── */}
        <div
          key={animKey}
          className="gallery-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8"
        >
          {filtered.map((item, idx) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={idx}
              onOpen={openModal}
            />
          ))}

          {filtered.length === 0 && (
            <div className="col-span-4 py-20 text-center text-gray-400 text-xs tracking-[0.2em] uppercase animate-pulse">
              No projects found
            </div>
          )}
        </div>

      </div>

      {/* ── Modal ── */}
      <Modal isOpen={modalOpen} onClose={closeModal} item={activeItem} />
    </section>
  );
}
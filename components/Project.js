"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ─── DATA ────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "Multi-Tenant Bike Dealership ERP & E-Commerce Platform",
    subtitle: "Sales, Service, Inventory, Accounting & Loan Management",
    image: "/img/projects-img/bike-dealership-erp/img.png",

    desc: "A comprehensive multi-tenant ERP and e-commerce solution for motorcycle dealerships, integrating sales, purchases, inventory, servicing, accounting, loan processing, investment management, and online bike sales into a centralized business platform.",

    fullDesc: ` <h3 style="margin-bottom:15px;color:#222;font-size:18px;font-weight:600;">
    Multi-Tenant Bike Dealership ERP & E-Commerce Platform </h3>

    
    <p style="margin-bottom:15px;color:#555;line-height:1.8;">
      A comprehensive multi-tenant business management platform developed for motorcycle dealerships, service centers, and retail operations. The system centralizes bike sales, purchases, inventory control, servicing, accounting, financing, investments, and customer management into a single ERP solution.
    </p>

    <p style="margin-bottom:15px;color:#555;line-height:1.8;">
      The ERP includes advanced modules for bike management, spare parts inventory, service operations, customer and supplier accounting, expense tracking, loan processing, and investor profit-sharing. Real-time inventory updates, financial reporting, and role-based access control help streamline daily operations and improve business efficiency.
    </p>

    <p style="margin-bottom:15px;color:#555;line-height:1.8;">
      The platform also includes a customer-facing e-commerce storefront built with Next.js, allowing users to browse new and used motorcycles, spare parts, and accessories, submit purchase requests, and place online orders. The storefront seamlessly integrates with the ERP through REST APIs to provide real-time inventory visibility and order management.
    </p>

    <p style="margin-bottom:15px;color:#555;line-height:1.8;">
      Designed with scalability in mind, the system supports multiple dealerships, branches, and tenants while providing comprehensive business analytics, operational reporting, and centralized management capabilities.
    </p>

    `,

    tech: [
      "Laravel",
      "Next.js",
      "PHP",
      "MySQL",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Bootstrap",
      "JavaScript",
      "Ajax",
    ],

    highlights: [
      "Multi-tenant SaaS architecture",
      "Bike sales, purchase & inventory management",
      "Service center & job card management",
      "Spare parts & accessories inventory tracking",
      "Loan processing & installment management",
      "Investment & profit-sharing management",
      "Accounting, ledger & expense tracking",
      "Role-based access control (RBAC)",
      "Real-time inventory synchronization",
      "Customer-facing e-commerce storefront",
      "REST API integration between ERP & storefront",
      "Multi-branch business support",
    ],

    cats: ["erp", "saas", "ecommerce", "enterprise"],

    liveFrontend: "https://bikelya.com/",
    liveBackend: "https://demo.bikelya.com/",

    githubBackend:
      "https://github.com/ns-noman/multi-tenant-bike-dealership-erp",
    githubFrontend:
      "https://github.com/ns-noman/multi-tenant-bike-dealership-storefront",

    caseStudy: null,
  },

  {
    id: 2,
    title: "Hub-Based Logistics ERP System",
    subtitle: "Multi-Branch Logistics, Freight & Accounting Platform",
    image: "/img/projects-img/logistics-ms/img.png",
    desc: "Enterprise-grade logistics ERP system designed for hub-and-spoke operations, enabling parcel management, multi-branch transfers, shipment tracking, air freight operations, accounting, CRM, and inventory control.",

    fullDesc: `
    <h3 style="margin-bottom:15px;color:#222;font-size:18px;font-weight:600;">
      Hub-Based Multi-Branch Logistics ERP System
    </h3>

    <p style="margin-bottom:15px;color:#555;line-height:1.8;">
      A comprehensive enterprise logistics management platform built to streamline parcel handling, branch operations, shipment processing, freight forwarding, accounting, and inventory management. The system follows a hub-and-spoke logistics model where parcels collected from multiple branches are transferred to a central hub for verification, sorting, shipment preparation, and final dispatch.
    </p>

    <p style="margin-bottom:15px;color:#555;line-height:1.8;">
      Developed using Laravel, Next.js, MySQL, and REST APIs, the platform provides centralized operational control, real-time shipment tracking, branch-level financial management, air freight handling, customer relationship management, and detailed reporting capabilities.
    </p>

    <p style="margin-bottom:15px;color:#555;line-height:1.8;">
      The ERP includes dedicated modules for parcel booking, shipment management, branch transfers, airline and freight operations, accounting, inventory control, CRM, investor management, and role-based access control, making it suitable for logistics companies operating across multiple locations.
    </p>
  `,

    tech: [
      "Laravel",
      "Next.js",
      "MySQL",
      "Tailwind CSS",
      "REST API",
      "Laravel Sanctum",
    ],

    highlights: [
      "Hub-and-spoke logistics workflow",
      "Multi-branch parcel collection & transfer",
      "Real-time parcel & shipment tracking",
      "Air freight & airline management",
      "Branch financial & ledger management",
      "Double-entry accounting system",
      "Inventory & stock management",
      "Customer, supplier & investor CRM",
      "Role-based access control (RBAC)",
      "Comprehensive reporting dashboard",
    ],

    cats: ["erp", "logistics", "freight", "enterprise"],

    liveFrontend: "https://airship.com.bd/",
    liveBackend: "https://airshipdemo.bikelya.com/",
    githubFrontend: "https://github.com/ns-noman/airship.com.bd.git",
    githubBackend: "https://github.com/ns-noman/airship.com.bd.git",
    caseStudy: "",
  },

  {
    id: 3,
    title: "Restaurant Management ERP System",
    subtitle: "Production, Inventory, HR & Payroll Management",
    image: "/img/projects-img/rms/img.png",
    desc: "Enterprise Resource Planning (ERP) system for production-driven businesses, integrating production planning, inventory management, procurement, sales, HR, payroll, and accounting operations into a unified platform.",

    fullDesc: `
  <h3 style="margin-bottom:15px;color:#222;font-size:18px;font-weight:600;">
    Restaurant Management ERP System
  </h3>

  <p style="margin-bottom:15px;color:#555;line-height:1.8;">
    A comprehensive ERP solution developed for production-focused businesses such as food manufacturing, central kitchens, FMCG operations, and inventory-intensive enterprises. The platform centralizes production, inventory, procurement, sales, human resources, payroll, and administrative workflows into a single integrated system.
  </p>

  <p style="margin-bottom:15px;color:#555;line-height:1.8;">
    The system includes production planning and recipe management modules that enable organizations to control raw material consumption, track production activities, and monitor finished goods. Integrated inventory management provides real-time stock visibility, stock movement history, supplier tracking, and procurement control.
  </p>

  <p style="margin-bottom:15px;color:#555;line-height:1.8;">
    Additional modules cover employee management, attendance processing, leave administration, payroll automation, loan management, purchasing, sales order processing, expense tracking, and role-based access control, creating a complete operational ecosystem for growing enterprises.
  </p>
`,

    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Laravel Sanctum",
    ],

    highlights: [
      "Recipe & production planning management",
      "Raw material issuance & production tracking",
      "Real-time inventory & stock monitoring",
      "Purchase requisition & procurement workflow",
      "Supplier & ledger management",
      "Sales order & payment processing",
      "HR, attendance & leave management",
      "Payroll, loans & installment processing",
      "Expense tracking & reporting",
      "Role-based access control (RBAC)",
    ],

    cats: ["erp", "production", "manufacturing", "enterprise"],

    liveFrontend: "",
    liveBackend: "https://rmsdemo.bikelya.com/",
    githubFrontend: "",
    githubBackend: "https://github.com/ns-noman/rms-production-erp.git",
    caseStudy: "",
  },
  {
    id: 4,
    title: "Digital Newspaper Management System",
    subtitle: "Media Publishing, Editorial Workflow & Advertisement Platform",
    image: "/img/projects-img/news/img.png",
    desc: "Enterprise-grade digital publishing platform for news organizations, featuring editorial workflow management, content publishing, advertisement operations, audience engagement, and real-time news delivery.",

    fullDesc: `
  <h3 style="margin-bottom:15px;color:#222;font-size:18px;font-weight:600;">
    Digital Newspaper & Media Publishing Platform
  </h3>

  <p style="margin-bottom:15px;color:#555;line-height:1.8;">
    A comprehensive content management and publishing platform developed for modern news organizations and online media portals. The system streamlines editorial operations, news publishing workflows, advertisement management, audience engagement, and real-time content distribution through a centralized administration panel.
  </p>

  <p style="margin-bottom:15px;color:#555;line-height:1.8;">
    The platform enables editors and journalists to create, review, approve, schedule, and publish articles while maintaining structured editorial workflows. It supports multi-author collaboration, category and topic management, media attachments, breaking news coverage, trending content monitoring, and archive management.
  </p>

  <p style="margin-bottom:15px;color:#555;line-height:1.8;">
    Additional modules include advertisement order processing, ad placement management, customer subscriptions, polls and voting, election result reporting, event coverage, SEO configuration, social media integration, analytics tracking, and location-based content organization, providing a complete ecosystem for digital media operations.
  </p>
`,

    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "CSS",
    ],

    highlights: [
      "Editorial workflow & content moderation",
      "Multi-author article publishing system",
      "Breaking news & live update management",
      "Advertisement order & placement control",
      "Customer subscriptions & news feeds",
      "Polls, voting & audience engagement",
      "Election results & statistical reporting",
      "SEO & metadata management",
      "Social media integration",
      "Content analytics & article tracking",
    ],

    cats: ["cms", "media", "publishing", "enterprise"],

    liveFrontend: "https://bangladesherkhabor.net/",
    liveBackend: "demobkhabor.bikelya.com",
    githubFrontend:
      "https://github.com/ns-noman/digital-newspaper-management-system.git",
    githubBackend:
      "https://github.com/ns-noman/digital-newspaper-management-system.git",
    caseStudy: "",
  },
];

// Get all unique categories
const ALL_CATEGORIES = ["all", ...new Set(projects.flatMap((p) => p.cats))];

// ─── HOOK ────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
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
      className={`group transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      {/* ── Card Container ── */}
      <div
        onClick={() => onOpen(item)}
        className="h-full flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden 
                   hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
      >
        {/* ── Image Container ── */}
        <div className="relative overflow-hidden bg-slate-100 aspect-video">
          <div className="relative w-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* ── Case Study Badge ── */}
          {item.caseStudy && (
            <div className="absolute top-3 right-3 z-10">
              <span
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-700 
                             text-white text-[11px] font-semibold tracking-wide px-2.5 py-1.5 rounded-full
                             shadow-md"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path d="M4 5a2 2 0 012-2 1 1 0 000 2H6a1 1 0 000-2H5a1 1 0 000 2H4z" />
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 000 2h16a1 1 0 000-2H3z"
                    clipRule="evenodd"
                  />
                </svg>
                Case Study
              </span>
            </div>
          )}

          {/* ── Overlay ── */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          flex items-end justify-center pb-4"
          >
            <button
              className="px-4 py-2 bg-white text-gray-900 text-sm font-semibold 
                             rounded-lg hover:bg-gray-100 transition-all transform scale-95 
                             group-hover:scale-100"
            >
              View Details
            </button>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex-1 p-4 flex flex-col">
          {/* ── Category Badge ── */}
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-[10px] font-bold tracking-wider uppercase text-blue-600 
                           bg-blue-50 px-2 py-0.5 rounded"
            >
              {item.cats[0] || "Project"}
            </span>
          </div>

          {/* ── Title & Subtitle ── */}
          <h3 className="text-sm font-bold text-gray-900 mb-1 leading-snug line-clamp-2 text-justify">
            {item.title}
          </h3>
          <p className="text-xs text-gray-500 mb-3 line-clamp-2 text-justify">
            {item.subtitle}
          </p>

          {/* ── Description ── */}
          <p className="text-xs text-gray-600 line-clamp-2 flex-1 mb-3 text-justify">
            {item.desc}
          </p>

          {/* ── Tech Stack ── */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
            {item.tech.slice(0, 2).map((t, i) => (
              <span
                key={i}
                className="text-[10px] font-medium text-slate-600 bg-slate-50 px-1.5 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
            {item.tech.length > 2 && (
              <span className="text-[10px] font-medium text-slate-500 px-1.5 py-0.5">
                +{item.tech.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MODAL ───────────────────────────────────────────────────────────────────

function Modal({ isOpen, onClose, item }) {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!isOpen) return;

    // Lock scroll
    scrollYRef.current = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = "8px"; // Prevent layout shift

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
      document.body.style.marginRight = "";
      window.scrollTo(0, scrollYRef.current);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <>
      <style>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .modal-animate {
          animation: modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .modal-content::-webkit-scrollbar {
          width: 6px;
        }
        .modal-content::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .modal-content::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .modal-content::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

      {/* ── Backdrop ── */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        style={{ animation: "fadeIn 0.3s ease-out" }}
      />

      {/* ── Modal ── */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl 
                     overflow-hidden flex flex-col modal-animate"
        >
          {/* ── STICKY HEADER ── */}
          <div
            className="sticky top-0 z-20 bg-white border-b border-slate-200 px-6 py-4
                       shadow-sm backdrop-blur-sm bg-white/95"
          >
            {/* ── Top Row: Title & Close Button ── */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </div>

              {/* ── Close Button ── */}
              <button
                onClick={onClose}
                className="flex-shrink-0 w-10 h-10 rounded-full border border-slate-300 
                         flex items-center justify-center text-gray-600 hover:bg-slate-100 
                         hover:border-slate-400 transition-all duration-200 active:scale-95"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* ── Second Row: Tech Stack & Action Buttons ── */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* ── Tech Stack Pills ── */}
              <div className="flex flex-wrap gap-2">
                {(item.tech || []).map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 
                             bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ── Action Buttons ── */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {/* ── Live Frontend ── */}
                {item.liveFrontend && (
                  <a
                    href={item.liveFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-600 text-white
text-xs sm:text-sm font-semibold rounded-lg hover:bg-green-700 transition-all
duration-200 active:scale-95 shadow-sm hover:shadow-md whitespace-nowrap"
                    title="Open Live Frontend"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5
     c4.477 0 8.268 2.943 9.542 7
     -1.274 4.057-5.065 7-9.542 7
     -4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span className="hidden sm:inline">FE</span>{" "}
                  </a>
                )}

                {/* ── Live Backend ── */}
                {item.liveBackend && (
                  <a
                    href={item.liveBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white
text-xs sm:text-sm font-semibold rounded-lg hover:bg-green-600 transition-all
duration-200 active:scale-95 shadow-sm hover:shadow-md whitespace-nowrap"
                    title="Open Live Backend"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5
     c4.477 0 8.268 2.943 9.542 7
     -1.274 4.057-5.065 7-9.542 7
     -4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span className="hidden sm:inline">BE</span>{" "}
                  </a>
                )}

                {/* ── GitHub Frontend ── */}
                {item.githubFrontend && (
                  <a
                    href={item.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-1 py-1 bg-gray-900 text-white 
                            text-[11px] sm:text-xs font-medium rounded-md hover:bg-black transition-all
                            duration-200 active:scale-95 shadow-sm hover:shadow-md whitespace-nowrap"
                    title="View Frontend Code"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482
                        0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463
                        -.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.19
                        .092-.927.35-1.555.636-1.911-2.22-.253-4.555-1.113-4.555-4.943
                        0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647
                        0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836
                        c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025
                        .546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683
                        0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852
                        0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48
                        C17.137 18.19 20 14.436 20 10.017 20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="hidden sm:inline">FE</span>
                  </a>
                )}

                {/* ── GitHub Backend ── */}
                {item.githubBackend && (
                  <a
                    href={item.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800 text-white 
                            text-[11px] sm:text-xs font-medium rounded-md hover:bg-black transition-all
                            duration-200 active:scale-95 shadow-sm hover:shadow-md whitespace-nowrap"
                    title="View Backend Code"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482
                        0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463
                        -.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.19
                        .092-.927.35-1.555.636-1.911-2.22-.253-4.555-1.113-4.555-4.943
                        0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647
                        0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836
                        c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025
                        .546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683
                        0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852
                        0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48
                        C17.137 18.19 20 14.436 20 10.017 20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="hidden sm:inline">BE</span>
                  </a>
                )}

                {/* ── Case Study (unchanged) ── */}
                {item.caseStudy && (
                  <a
                    href={item.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white 
                            text-xs sm:text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all
                            duration-200 active:scale-95 shadow-sm hover:shadow-md whitespace-nowrap"
                    title="Read case study"
                  >
                    <span className="hidden sm:inline">Study</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ── SCROLLABLE CONTENT ── */}
          <div className="modal-content overflow-y-auto flex-1">
            {/* ── Image ── */}
            <div className="w-full">
              <Image
                src={item.image}
                alt={item.title}
                width={1400}
                height={5000}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* ── Main Content ── */}
            <div className="px-6 py-8 space-y-8">
              {/* ── Description ── */}
              <div className="prose prose-sm max-w-none">
                <div
                  className="text-gray-700 leading-relaxed text-justify"
                  dangerouslySetInnerHTML={{
                    __html: item.fullDesc || item.desc,
                  }}
                />
              </div>

              {/* ── Highlights Section ── */}
              {item.highlights && item.highlights.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-600 rounded-full" />
                    Key Highlights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200"
                      >
                        <svg
                          className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Spacer for comfortable scrolling */}
              <div className="h-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animKey, setAnimKey] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const [titleRef, titleInView] = useInView(0.1);
  const [filterRef, filterInView] = useInView(0.1);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((item) => item.cats.includes(activeFilter));

  const handleFilter = (value) => {
    if (value === activeFilter) return;
    setActiveFilter(value);
    setAnimKey((k) => k + 1);
  };

  const openModal = (item) => {
    setActiveItem(item);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* ── Section Title ── */}
        <div
          ref={titleRef}
          className={`mb-12 transition-all duration-700 ${
            titleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              A selection of enterprise solutions and digital platforms I've
              built to streamline business operations
            </p>
          </div>
          <div
            className={`mt-4 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all 
                       duration-700 delay-300 ${
                         titleInView ? "w-20 opacity-100" : "w-0 opacity-0"
                       }`}
          />
        </div>

        {/* ── Filter Tabs ── */}
        <div
          ref={filterRef}
          className={`mb-10 transition-all duration-700 delay-100 ${
            filterInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-wrap gap-2.5">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all 
                           duration-300 border capitalize
                           ${
                             activeFilter === cat
                               ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/30"
                               : "bg-white text-gray-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                           }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Projects Grid ── */}
        <div
          key={animKey}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={idx}
                onOpen={openModal}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-400 text-sm tracking-widest uppercase">
                No projects found for this category
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Modal ── */}
      <Modal isOpen={modalOpen} onClose={closeModal} item={activeItem} />
    </section>
  );
}

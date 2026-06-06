"use client";

import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const FILTER_TABS = [
  { label: "All",                value: "all"               },
  { label: "UX Design",          value: "ux-design"         },
  { label: "UI Design",          value: "ui-design"         },
  { label: "Usability",          value: "usability"         },
  { label: "Interaction Design", value: "interaction-design" },
  { label: "Logo Design",        value: "logo-design"       },
  { label: "Illustration",       value: "illustration"      },
  { label: "Typography",         value: "typography"        },
  { label: "Freelancing",        value: "freelancing"       },
  { label: "Research",           value: "research"          },
  { label: "Publishing",         value: "publishing"        },
];

const AUTHOR = {
  name:      "NOWAB SHORIF",
  avatar:    "img/logo.png",
  topicLabel: "Web Development",
};

const POSTS = [
  {
    id:    1,
    image: null,
    title: "User Experience (UX) Design",
    date:  "28 Dec 2015",
    excerpt: "I'm a full-stack developer building awesome things for the web. I work remotely with cool startups on seriously meaningful products from #Dhaka.",
    cats:  ["ux-design", "illustration"],
    topic: "UX Design",
  },
  {
    id:    2,
    image: "img/blog-img/post-01.jpg",
    title: "Principles of Great UI Design",
    date:  "15 Jan 2016",
    excerpt: "Good UI design is invisible. It lets users accomplish their goals without ever noticing the interface itself — and that is the hardest thing to achieve.",
    cats:  ["ux-design", "illustration", "typography"],
    topic: "UI Design",
  },
  {
    id:    3,
    image: null,
    title: "Typography in Digital Products",
    date:  "03 Feb 2016",
    excerpt: "Type is more than words. The right typeface, weight, and rhythm can make content feel trustworthy, playful, or authoritative — all without a single icon.",
    cats:  ["ux-design", "ui-design", "typography"],
    topic: "Typography",
  },
  {
    id:    4,
    image: "img/blog-img/post-02.jpg",
    title: "Crafting a Memorable Logo",
    date:  "22 Feb 2016",
    excerpt: "A logo must work at 16 px and at 16 feet. Designing within that constraint forces clarity and forces you to distil a brand down to its absolute essence.",
    cats:  ["ux-design", "ui-design", "typography", "logo-design"],
    topic: "Logo Design",
  },
  {
    id:    5,
    image: "img/blog-img/post-03.jpg",
    title: "Freelancing: Starting Out Right",
    date:  "10 Mar 2016",
    excerpt: "Your first freelance contract sets the tone for your entire career. Scope clearly, price confidently, and always get at least 50 % upfront before you start.",
    cats:  ["ui-design", "usability", "typography", "freelancing", "logo-design"],
    topic: "Freelancing",
  },
  {
    id:    6,
    image: "img/blog-img/post-04.jpg",
    title: "Interaction Design Fundamentals",
    date:  "01 Apr 2016",
    excerpt: "Every tap, swipe, and hover is a micro-conversation between user and product. Designing those moments well is what separates a pleasant app from a frustrating one.",
    cats:  ["ui-design", "usability", "interaction-design", "freelancing", "research"],
    topic: "Interaction Design",
  },
  {
    id:    7,
    image: null,
    title: "Usability Testing on a Budget",
    date:  "18 Apr 2016",
    excerpt: "You don't need a lab. Five users in a coffee shop with a prototype on your phone will reveal more actionable issues than any automated tool ever could.",
    cats:  ["ui-design", "usability", "freelancing", "research"],
    topic: "Usability",
  },
  {
    id:    8,
    image: null,
    title: "Research Methods for Designers",
    date:  "05 May 2016",
    excerpt: "Interviews, surveys, and card-sorting each answer different questions. Knowing which tool to reach for — and when — is a superpower most designers overlook.",
    cats:  ["usability", "interaction-design", "freelancing"],
    topic: "Research",
  },
];

const MODAL_POST = {
  title:    "The Best UX Technique in Shopping Websites",
  date:     "28 Dec, 2015",
  coverImg: "img/blog-img/30-percent-offer.jpg",
  body: [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora corporis eaque possimus veritatis, totam cum impedit omnis unde consequatur eveniet, temporibus cupiditate?",
    "Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Nulla consequat massa quis enim. In ut quam vitae odio lacinia tincidunt. Fusce convallis metus id felis luctus adipiscing.",
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam cursus lacinia erat. Aenean commodo ligula eget dolor.",
  ],
  quote:
    "Aenean ut eros et nisl sagittis vestibulum. Morbi mattis ullamcorper velit. Etiam vitae tortor. Donec posuere vulputate arcu.",
  list: [
    "Consectetur adipiscing elit vtae elit libero",
    "Nullam id dolor id eget lacinia odio posuere erat a ante",
    "Integer posuere erat dapibus posuere velit",
  ],
  social: [
    { icon: "fa-facebook",   href: "#" },
    { icon: "fa-twitter",    href: "#" },
    { icon: "fa-google-plus",href: "#" },
    { icon: "fa-linkedin",   href: "#" },
    { icon: "fa-envelope",   href: "#" },
  ],
};

// ─── HOOK ────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.08) {
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

// ─── POST CARD ────────────────────────────────────────────────────────────────

function PostCard({ post, index, onOpen }) {
  const [ref, inView] = useInView(0.05);

  return (
    <article
      ref={ref}
      data-cat={post.cats.join(" ")}
      className={`post-item flex flex-col bg-white border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      {/* Cover Image */}
      {post.image ? (
        <button
          onClick={() => onOpen(post)}
          className="post--img block overflow-hidden aspect-[16/9] w-full shrink-0 bg-gray-100 focus:outline-none"
        >
          <img
            src={post.image}
            alt={post.title}
            className="img-fluid w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </button>
      ) : (
        /* No-image placeholder — subtle pattern */
        <div className="aspect-[16/9] w-full shrink-0 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center border-b border-gray-100">
          <span className="text-3xl font-black tracking-tighter text-blue-100 select-none uppercase">
            {post.topic}
          </span>
        </div>
      )}

      {/* Body */}
      <div className="post-description flex flex-col flex-1 p-4">
        {/* Category tag */}
        <span className="inline-block self-start text-[9px] font-bold tracking-[0.18em] uppercase text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 mb-2">
          {post.topic}
        </span>

        {/* Title */}
        <h2 className="text-sm font-bold leading-snug mb-2 text-gray-900 uppercase tracking-wide">
          <button
            onClick={() => onOpen(post)}
            className="hover:text-blue-600 transition-colors duration-200 text-left focus:outline-none"
          >
            {post.title}
          </button>
        </h2>

        {/* Date */}
        <p className="post-date flex items-center gap-1.5 text-[10px] text-gray-400 tracking-wide mb-2">
          <i className="fa fa-calendar text-blue-300" />
          {post.date}
        </p>

        {/* Excerpt */}
        <p className="post-description-content text-xs text-gray-500 leading-5 line-clamp-3 flex-1">
          {post.excerpt}
        </p>
      </div>

      {/* Author meta */}
      <div className="post-meta flex items-center gap-2.5 px-4 py-3 border-t border-gray-100 mt-auto">
        <div className="post-meta-img shrink-0">
          <img
            src={AUTHOR.avatar}
            alt={AUTHOR.name}
            className="img-fluid w-7 h-7 rounded-full object-cover border border-gray-200"
          />
        </div>
        <div className="post-meta-desc leading-tight">
          <h3 className="text-[10px] font-bold tracking-widest text-gray-800 uppercase">
            {AUTHOR.name}
          </h3>
          <p className="text-[9px] text-gray-400 tracking-wide">
            On <span className="text-blue-500 font-semibold">{post.topic}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

// ─── MODAL ───────────────────────────────────────────────────────────────────

function PostModal({ isOpen, onClose, post }) {
  useEffect(() => {
    if (!isOpen) return;
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);

  if (!isOpen || !post) return null;

  return (
    <>
      <style>{`
        @keyframes postModalIn {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)     scale(1);    }
        }
        .post-modal-anim { animation: postModalIn 0.34s cubic-bezier(.22,.68,0,1.15) both; }
      `}</style>

      <div
        className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-10 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="postDetailsLabel"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-[3px]"
          onClick={onClose}
        />

        {/* Dialog */}
        <div className="modal-content post--details post-modal-anim relative z-10 w-full max-w-2xl bg-white shadow-2xl mb-10">

          {/* Header */}
          <div className="modal-header flex flex-col gap-3 px-6 py-4 border-b border-gray-100">
            <div className="flex items-start justify-between w-full gap-4">
              {/* Author logo */}
              <a href="#" className="logo flex items-center gap-2.5">
                <div className="logo--img">
                  <img src={AUTHOR.avatar} alt={AUTHOR.name} className="img-fluid w-9 h-9 rounded-full border border-gray-200" />
                </div>
                <div className="logo--content leading-tight">
                  <h1 className="text-sm font-bold tracking-widest text-gray-900 uppercase mb-0">
                    {AUTHOR.name}
                  </h1>
                  <p className="text-[10px] text-gray-400 tracking-wide mb-0">
                    On <span className="text-blue-500 font-semibold">{post.topic}</span>
                  </p>
                </div>
              </a>
              {/* Close */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="btn-close w-7 h-7 shrink-0 flex items-center justify-center border border-gray-200 text-gray-400 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200 text-xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Social share */}
            <div className="social-icons">
              <ul className="flex gap-2 list-none p-0 m-0">
                {MODAL_POST.social.map(({ icon, href }) => (
                  <li key={icon}>
                    <a
                      href={href}
                      className="w-7 h-7 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-colors duration-200 text-xs"
                    >
                      <i className={`fa ${icon}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* Post title */}
            <div className="px-10 pt-8 pb-4 post-title">
              <h2 className="text-xl font-bold text-gray-900 leading-snug mb-1">
                {MODAL_POST.title}
              </h2>
              <p className="text-xs text-gray-400 flex items-center gap-1.5">
                <i className="fa fa-calendar text-blue-300" />
                {MODAL_POST.date}
              </p>
            </div>

            {/* Cover */}
            <img src={MODAL_POST.coverImg} alt="" className="img-fluid w-full block" />

            {/* Content */}
            <div className="px-10 py-8 post-content space-y-4">
              {MODAL_POST.body.map((para, i) => (
                <p key={i} className="text-sm text-gray-600 leading-7">{para}</p>
              ))}

              <blockquote className="border-l-4 border-blue-500 pl-5 py-1 my-4 bg-blue-50">
                <p className="text-sm text-blue-700 italic leading-7 m-0">{MODAL_POST.quote}</p>
              </blockquote>

              <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600">
                {MODAL_POST.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animKey,      setAnimKey]      = useState(0);
  const [modalOpen,    setModalOpen]    = useState(false);
  const [activePost,   setActivePost]   = useState(null);

  const [titleRef,  titleInView]  = useInView(0.1);
  const [navRef,    navInView]    = useInView(0.1);

  const filtered =
    activeFilter === "all"
      ? POSTS
      : POSTS.filter((p) => p.cats.includes(activeFilter));

  const handleFilter = (value) => {
    if (value === activeFilter) return;
    setActiveFilter(value);
    setAnimKey((k) => k + 1);
  };

  const openModal  = (post) => { setActivePost(post); setModalOpen(true); };
  const closeModal = ()     => setModalOpen(false);

  return (
    <section id="blog" className="py-4">
      <div className="container mx-auto px-4">

        {/* ── Title ── */}
        <div
          ref={titleRef}
          className={`section--title mb-8 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight">
            <strong>HELPFUL WRITING</strong>
          </h2>
          <div
            className={`mt-3 h-[3px] bg-blue-600 rounded-full transition-all duration-700 delay-300 ${
              titleInView ? "w-14 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* ── Quick Nav / Filter ── */}
        <div
          ref={navRef}
          className={`blog--quick-nav mb-10 transition-all duration-700 delay-100 ${
            navInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="posts-filter-menu">
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {FILTER_TABS.map((tab, i) => (
                <li key={tab.value}>
                  <button
                    onClick={() => handleFilter(tab.value)}
                    style={{ transitionDelay: `${i * 30}ms` }}
                    className={`text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1.5 border transition-all duration-200 ${
                      activeFilter === tab.value
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-gray-300 text-gray-500 hover:border-blue-400 hover:text-blue-600"
                    }`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Post Grid — 4 columns ── */}
        <div
          key={animKey}
          className="post-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {filtered.map((post, idx) => (
            <PostCard
              key={post.id}
              post={post}
              index={idx}
              onOpen={openModal}
            />
          ))}

          {filtered.length === 0 && (
            <div className="col-span-4 py-20 text-center text-gray-400 text-xs tracking-[0.2em] uppercase animate-pulse">
              No posts found
            </div>
          )}
        </div>

      </div>

      {/* ── Modal ── */}
      <PostModal isOpen={modalOpen} onClose={closeModal} post={activePost} />
    </section>
  );
}
"use client";

import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const BG_IMAGE = "img/counter-img/bg.jpg";

const COUNTER_ITEMS = [
  {
    id:     1,
    icon:   "fa fa-flag",
    value:  2500,
    suffix: "",
    boldText: "PROJECT",
    restText: " COMPLETED",
  },
  {
    id:     2,
    icon:   "fa fa-smile-o",
    value:  400,
    suffix: "",
    boldText: "HAPPY",
    restText: " CLIENTS",
  },
  {
    id:     3,
    icon:   "fa fa-code",
    value:  98,
    suffix: "K",
    boldText: "LINE",
    restText: " OF ",
    boldText2: "CODE",
  },
  {
    id:     4,
    icon:   "fa fa-coffee",
    value:  78,
    suffix: "K",
    boldText: "CUP",
    restText: " OF ",
    boldText2: "COFFEE",
  },
];

// ─── HOOK: count-up on scroll into view ──────────────────────────────────────

function useCountUp(target, duration = 2000) {
  const [count, setCount]   = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return [ref, count, started];
}

// ─── COUNTER ITEM ─────────────────────────────────────────────────────────────

function CounterItem({ item, index }) {
  const [ref, count, started] = useCountUp(item.value, 2200);

  return (
    <div
      ref={ref}
      className={`counter--item flex flex-col items-center text-center px-6 py-2 transition-all duration-700 ease-out ${
        started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Number + icon */}
      <div className="counter--num flex items-center justify-center gap-3 mb-3">
        <i
          className={`${item.icon} text-white/70 text-3xl transition-transform duration-700 ${
            started ? "scale-100" : "scale-75"
          }`}
          style={{ transitionDelay: `${index * 150 + 200}ms` }}
        />
        <span className="CounterUp text-4xl md:text-5xl font-black text-white tracking-tight tabular-nums">
          {count.toLocaleString()}
        </span>
        {item.suffix && (
          <span className="text-3xl md:text-4xl font-black text-white/80">{item.suffix}</span>
        )}
      </div>

      {/* Divider */}
      <div
        className={`h-[2px] bg-white/30 mb-3 rounded-full transition-all duration-700 ${
          started ? "w-10 opacity-100" : "w-0 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 150 + 400}ms` }}
      />

      {/* Label */}
      <div className="counter--text text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
        <strong className="text-white font-extrabold">{item.boldText}</strong>
        {item.restText}
        {item.boldText2 && (
          <strong className="text-white font-extrabold">{item.boldText2}</strong>
        )}
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function Counter() {
  return (
    <section
      id="counter"
      className="bg--overlay relative overflow-hidden py-20"
      data-parallax-bg-img={BG_IMAGE}
      style={{
        backgroundImage:    `url(${BG_IMAGE})`,
        backgroundSize:     "cover",
        backgroundPosition: "center",
        backgroundAttachment:"fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-900/70" />

      {/* Subtle top/bottom fade lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {COUNTER_ITEMS.map((item, index) => (
            <CounterItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
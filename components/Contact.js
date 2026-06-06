"use client";

import { useState, useRef, useEffect } from "react";
import {
  FaHome,
  FaEnvelope,
  FaPhone,
  FaFax,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBehance,
  FaGooglePlus,
  FaRss,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

// ─── DATA ────────────────────────────────────────────────────────────────────

const CONTACT_ADDRESS = [
  { id: 1, Icon: FaHome,     text: "House #14, Road #09, Sector #12, Dhaka-1203, Bangladesh.", href: null },
  { id: 2, Icon: FaEnvelope, text: "support@example.com",  href: "mailto:support@example.com" },
  { id: 3, Icon: FaPhone,    text: "+000 000 000 000",      href: "tel:+000000000000"          },
  { id: 4, Icon: FaFax,      text: "+1-212-9876543",        href: null                         },
];

const SOCIAL_LINKS = [
  { id: 1, Icon: FaFacebook,   href: "#", label: "Facebook"  },
  { id: 2, Icon: FaTwitter,    href: "#", label: "Twitter"   },
  { id: 3, Icon: FaLinkedin,   href: "#", label: "LinkedIn"  },
  { id: 4, Icon: FaBehance,    href: "#", label: "Behance"   },
  { id: 5, Icon: FaGooglePlus, href: "#", label: "Google+"   },
  { id: 6, Icon: FaRss,        href: "#", label: "RSS"       },
];

const FORM_FIELDS = [
  { name: "contactName",    type: "text",  placeholder: "Your Name",     half: true  },
  { name: "contactEmail",   type: "email", placeholder: "Email Address", half: true  },
  { name: "contactSubject", type: "text",  placeholder: "Subject",       half: false },
];

const INITIAL_FORM = {
  contactName:    "",
  contactEmail:   "",
  contactSubject: "",
  contactMessage: "",
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

// ─── MAIN ────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form,       setForm]       = useState(INITIAL_FORM);
  const [status,     setStatus]     = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [titleRef, titleInView] = useInView(0.1);
  const [leftRef,  leftInView]  = useInView(0.1);
  const [rightRef, rightInView] = useInView(0.1);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    // swap setTimeout for your real fetch("contact.php", ...) call
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    setSubmitting(false);
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className="py-4">
      <div className="container mx-auto px-4">

        {/* ── Title ── */}
        <div
          ref={titleRef}
          className={`section--title mb-12 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight">
            <strong>GET IN TOUCH</strong>
          </h2>
          <div
            className={`mt-3 h-[3px] bg-blue-600 rounded-full transition-all duration-700 delay-300 ${
              titleInView ? "w-14 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Left: Address + Social ── */}
          <div
            ref={leftRef}
            className={`contact--address flex flex-col justify-between gap-10 transition-all duration-700 ${
              leftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div>
              <h2 className="text-lg font-extrabold tracking-[0.18em] uppercase text-gray-900 mb-6">
                CONTACT ADDRESS
              </h2>

              <address className="not-italic space-y-5">
                {CONTACT_ADDRESS.map(({ id, Icon, text, href }, i) => (
                  <p
                    key={id}
                    className={`flex items-start gap-4 text-sm text-gray-600 leading-6 transition-all duration-500 ${
                      leftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${i * 100 + 200}ms` }}
                  >
                    <span className="shrink-0 w-9 h-9 flex items-center justify-center bg-blue-600 text-white">
                      <Icon size={15} />
                    </span>
                    {href ? (
                      <a href={href} className="hover:text-blue-600 transition-colors duration-200 mt-1.5">
                        {text}
                      </a>
                    ) : (
                      <span className="mt-1.5">{text}</span>
                    )}
                  </p>
                ))}
              </address>
            </div>

            {/* Social */}
            <div className="contact--social">
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">
                Find me on
              </p>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {SOCIAL_LINKS.map(({ id, Icon, href, label }, i) => (
                  <li
                    key={id}
                    className={`transition-all duration-500 ${
                      leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${i * 60 + 500}ms` }}
                  >
                    <a
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 flex items-center justify-center text-center border border-gray-200 text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                      style={{ display: "flex" }}
                    >
                      <Icon size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            ref={rightRef}
            className={`contact--form transition-all duration-700 delay-150 ${
              rightInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Status banner */}
            <div className="contact-form-status mb-4">
              {status === "success" && (
                <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 px-4 py-3">
                  <FaCheckCircle className="text-green-500 shrink-0" />
                  Your message was sent successfully. I&apos;ll get back to you soon!
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
                  <FaExclamationCircle className="text-red-500 shrink-0" />
                  Something went wrong. Please try again.
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FORM_FIELDS.filter((f) => f.half).map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="form-control w-full px-4 py-3 text-sm border border-gray-200 bg-gray-50 placeholder-gray-400 text-gray-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                  />
                ))}
              </div>

              {/* Subject */}
              {FORM_FIELDS.filter((f) => !f.half).map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="form-control w-full px-4 py-3 text-sm border border-gray-200 bg-gray-50 placeholder-gray-400 text-gray-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                />
              ))}

              {/* Message */}
              <textarea
                name="contactMessage"
                value={form.contactMessage}
                onChange={handleChange}
                rows={9}
                placeholder="Message"
                required
                className="form-control w-full px-4 py-3 text-sm border border-gray-200 bg-gray-50 placeholder-gray-400 text-gray-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 resize-none"
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className={`submit-btn btn btn-primary inline-flex items-center gap-2 px-10 py-3 text-xs font-extrabold tracking-[0.2em] uppercase text-white bg-blue-600 border border-blue-600 hover:bg-blue-700 hover:border-blue-700 active:scale-[0.98] transition-all duration-200 ${
                  submitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    SENDING…
                  </>
                ) : (
                  <>
                    SEND MESSAGE
                    <FaPaperPlane size={12} />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect, useRef } from "react";

const AUTHOR = {
  name:      "NOWAB SHORIF",
  avatar:    "img/logo.png",
};
const ACTIVITIES = [
    {
      "id": 1,
      "image": "img/blog-img/ahsanmonjil/img (12).jpeg",
      "gallery": [
        "img/blog-img/ahsanmonjil/img (12).jpeg",
        "img/blog-img/ahsanmonjil/img (2).jpeg",
        "img/blog-img/ahsanmonjil/img (3).jpeg"
      ],
      "title": "Community Service Project: Cleanliness Campaign at Ahsan Manzil",
      "location": "Dhaka, Bangladesh",
      "date": "22 May 2026",
      "type": "Volunteer Work",
      "description": "<p>As an active volunteer of <strong>BD Clean</strong>, I participated in a large-scale cleanliness and public awareness campaign at the historic <strong>Ahsan Manzil</strong> in Dhaka on May 22, 2026. The initiative aimed to preserve one of Bangladesh's most significant cultural heritage sites while promoting environmental responsibility and civic awareness among visitors and the local community.</p><p>More than <strong>300 volunteers</strong> took part in the campaign, working together to clean the palace grounds and surrounding areas. Beyond waste collection, the event focused on encouraging responsible citizenship, environmental stewardship, and community engagement through direct public interaction and awareness activities.</p><ul><li>Participated in a large-scale community cleanliness campaign at a historic national landmark.</li><li>Collaborated with more than 300 volunteers to improve and maintain public spaces.</li><li>Contributed to environmental awareness and public engagement initiatives.</li><li>Supported the preservation of Bangladesh's cultural and historical heritage.</li><li>Developed teamwork, leadership, communication, and community service skills.</li></ul><p>This experience strengthened my commitment to volunteerism, environmental sustainability, and social responsibility. It also enhanced my ability to work effectively within diverse teams and contribute to initiatives that create a positive impact on society.</p>",
      "highlights": [
        "Participated in a large-scale community cleanliness campaign at a historic national landmark",
        "Collaborated with more than 300 volunteers to improve and maintain public spaces",
        "Contributed to environmental awareness and public engagement initiatives",
        "Supported the preservation of Bangladesh's cultural and historical heritage",
        "Developed teamwork, leadership, communication, and community service skills"
      ]
    },
    {
      "id": 2,
      "image": "img/blog-img/hatirzheel/img (16).jpeg",
      "gallery": [
        "img/blog-img/hatirzheel/img (16).jpeg",
        "img/blog-img/hatirzheel/img (17).jpeg",
        "img/blog-img/hatirzheel/img (9).jpeg",
        "img/blog-img/hatirzheel/img (18).jpg",
        "img/blog-img/hatirzheel/img (7).jpg",
      ],
      "title": "A Cleanliness Movement That Revived Life at Hatirjheel",
      "location": "Dhaka, Bangladesh",
      "date": "22 May 2026",
      "type": "Volunteer Work",
      "description": "<p>With the touch of cleanliness at the heart of Hatirjheel, a renewed sense of life has emerged—where collective efforts have turned into a harmonious voice of an aware city.</p><p>A day-long cleanliness campaign was successfully conducted at the iconic Hatirjheel area of Dhaka, jointly organized by Winter End Summer Runner and RAJUK, with the support of BD Clean. The initiative witnessed enthusiastic participation from citizens of diverse professions, along with dedicated volunteers whose sincere efforts helped restore and enhance the cleanliness and order of this important urban landmark.</p><p>The primary objective of this campaign was to preserve one of the city’s most aesthetic and significant public spaces while strengthening environmental awareness and civic responsibility among city dwellers. Beyond physical cleaning activities, volunteers actively engaged with pedestrians and visitors to highlight the importance of maintaining cleanliness in daily life—encouraging it to become a sustainable habit rather than a one-time effort.</p><p>This initiative once again demonstrated that cleanliness is not merely an activity, but a continuous social movement—where collective participation becomes the driving force of transformation. Preserving the beauty of Hatirjheel ultimately means ensuring a healthier, more livable future for our cities, environment, and next generations.</p><p>BD Clean firmly believes that the practice of cleanliness begins at the individual level and gradually expands into society and the nation. This successful campaign further strengthened that belief.</p><p>Heartfelt gratitude goes to all volunteers, organizers, partner organizations, and conscious citizens who contributed to this initiative. Let us spread this spirit of cleanliness from Hatirjheel to every corner of the country and work together to build a cleaner, greener, and more responsible Bangladesh.</p>",
      "highlights": [
      ]
    },
    {
      "id": 3,
      "image": "img/blog-img/pdefense/img (37)1.png",
      "gallery": [
        "img/blog-img/pdefense/img (37)1.png",
        "img/blog-img/pdefense/img (40).jpg",
        "img/blog-img/pdefense/img (36).jpg",
        "img/blog-img/pdefense/img (14).jpg",
        "img/blog-img/pdefense/img (23).jpg",
        "img/blog-img/pdefense/img (19)2.jpg",
      ],
      "title": "Final Project Defense Day – A Memorable Journey",
      "location": "Dhaka, Bangladesh",
      "date": "22 May 2026",
      "type": "Academic",
      "description": "<h2>Final Project Defense Day – A Memorable Journey</h2><p>The final project defense day of our BSc in CSE was one of the most memorable milestones of our academic journey. After months of hard work, research, coding, and continuous debugging, we successfully completed our project defense in front of our respected teachers.</p><p>On that day, all of us friends came together with excitement and a bit of nervousness. But as the presentation began, confidence slowly took over. We explained our project, demonstrated its features, and answered the questions from our honorable supervisors. Their feedback and appreciation made all the effort truly meaningful.</p><p>After the defense was successfully completed, we celebrated the moment together. We took pictures as friends, capturing the joy of achievement. We also had the opportunity to take photos with our respected teachers, which made the day even more special and memorable.</p><p>It was not just a formal academic requirement—it was a journey of teamwork, learning, late-night coding sessions, and unforgettable memories. We laughed, we struggled, and finally, we succeeded together.</p><p>This day will always remain a proud chapter in our lives, marking the successful completion of an important phase of our academic journey and the beginning of new dreams ahead.</p>",
      
      "highlights": [
      ]
    },
    {
      "id": 4,
      "image": "img/blog-img/sports/img.jpeg",
      "gallery": [
        "img/blog-img/sports/img.jpeg",
        "img/blog-img/sports/img.jpg",
      ],
      "title": "E-92 & E-93 Batch Cricket Match – A Day of Energy, Unity, and Sportsmanship",
      "location": "Dhaka, Bangladesh",
      "date": "22 May 2026",
      "type": "Sports",
      "description": "<div class=\"blog-description\"><h2>E-92 & E-93 Batch Cricket Match – A Day of Energy, Unity, and Sportsmanship</h2><p>The cricket match between E-92 and E-93 batches was an exciting and memorable event that brought together students in a spirit of friendship, competition, and teamwork.</p><p>The match was more than just a game—it was a reflection of our active student life and strong bonding between batches. Players from both teams showed great enthusiasm, energy, and sportsmanship from the very beginning.</p><p>On the field, we witnessed intense but friendly competition. Every run, wicket, and boundary created moments of excitement for both players and spectators. Team coordination, quick decisions, and strategic gameplay made the match even more engaging.</p><p>What made the day truly special was the unity off the field. Students from both E-92 and E-93 supported each other, cheered loudly, and enjoyed the game together. It was a perfect example of how sports can build connection and friendship beyond classrooms.</p><p>After the match, we captured group photos and shared memorable moments with friends. These pictures reflect not just a game, but a celebration of student life, teamwork, and togetherness.</p><p>This event highlights our active participation in extracurricular activities, leadership in organizing and playing, and strong interpersonal bonding—qualities that define a complete and engaged student community.</p></div>",
      "highlights": [
      ]
    },
    {
      "id": 5,
      "image": "img/blog-img/floods/img (4).jpg",
      "gallery": [
        "img/blog-img/floods/img (4).jpg",
        "img/blog-img/floods/img (1).jpg",
        "img/blog-img/floods/img (2).jpg",
      ],
      "title": "Flood Relief Support – Contribution with Assunna Foundation (2024)",
      "location": "Dhaka, Bangladesh",
      "date": "22 May 2026",
      "type": "Volunteer Work",
      "description": "<div class=\"blog-description\"><h2>Flood Relief Support – Contribution with Assunna Foundation (2024)</h2><p>The year 2024 witnessed severe flooding across multiple regions of Bangladesh, affecting thousands of families and disrupting daily life. During this critical time, I had the opportunity to actively participate in a humanitarian relief program organized by Assunna Foundation.</p><p>I joined the foundation’s relief preparation activities, where we worked together to support flood-affected people. Our responsibilities included organizing essential relief materials such as food packages, clean drinking water, medicines, and other necessary supplies. Being part of this effort gave me a real sense of responsibility and compassion toward people in crisis.</p><p>Working alongside dedicated volunteers, I helped in preparing and managing distribution-ready packages to ensure timely support for affected communities. The experience was both emotional and inspiring, as it showed how collective effort can bring hope to people facing extreme hardship.</p><p>This initiative was not just about distributing aid—it was about standing beside humanity when it needed support the most. It taught me the value of empathy, teamwork, and social responsibility.</p><p>I feel proud to have contributed, even in a small way, to this noble cause with Assunna Foundation. Experiences like this continue to motivate me to stay active in volunteer work and contribute to society whenever possible.</p></div>",
      "highlights": [
      ]
    },
    {
      "id": 6,
      "image": "img/blog-img/blood/img (2).jpg",
      "gallery": [
        "img/blog-img/blood/img (2).jpg",
        "img/blog-img/blood/img (3).jpg",
        "img/blog-img/blood/img (1).jpg",
      ],
      "title": "Volunteering for Life-Saving Mission with Quantum Blood Lab",
      "location": "Dhaka, Bangladesh",
      "date": "22 May 2026",
      "type": "Volunteer Work",
      "description": "<div class=\"blog-description\"><h2>Community Awareness & Cleanliness Leadership with BD Clean (Badda 13 Zone)</h2><p>As the Zone Coordinator of BD Clean North Dhaka, Badda 13 Zone, I have been actively involved in promoting cleanliness awareness and environmental responsibility among the local community.</p><p>In this role, I work closely with volunteers and local residents to educate people about the importance of maintaining a clean and healthy environment. Through direct communication, awareness discussions, and public engagement activities, I try to inspire individuals to take responsibility for their surroundings.</p><p>One of the key parts of my responsibility is conducting awareness campaigns where we explain how small daily habits—such as proper waste disposal and avoiding plastic pollution—can significantly improve our environment. I also engage with people in public spaces to spread awareness about cleanliness and encourage behavioral change.</p><p>In addition, I have been involved in organizing and guiding oath-taking sessions, where participants commit themselves to maintaining cleanliness and supporting a cleaner Bangladesh. These activities help strengthen a sense of accountability and collective responsibility among citizens.</p><p>This experience has not only improved my leadership and communication skills but also deepened my understanding of community engagement and social impact. Working as a coordinator has taught me how consistent awareness efforts can gradually bring real change in society.</p><p>I am proud to be part of BD Clean’s mission, contributing to building a cleaner, greener, and more responsible urban community.</p></div>",
      "highlights": [
      ]
    },
    {
      "id": 7,
      "image": "img/blog-img/regular2/img (11).jpeg",
      "gallery": [
        "img/blog-img/regular2/img (11).jpeg",
        "img/blog-img/regular2/img (8).jpeg",
        "img/blog-img/regular2/img (7).jpeg",
        "img/blog-img/regular2/img (6).jpeg",
        "img/blog-img/regular2/img (5).jpeg",
      ],
      "title": "Community Awareness & Cleanliness Campaign – BD Clean (Badda 13 Zone)",
      "location": "Dhaka, Bangladesh",
      "date": "22 May 2026",
      "type": "Volunteer Work",
      "description": "<div class=\"blog-description\"><h2>Community Awareness & Cleanliness Leadership with BD Clean (North Dhaka, Badda 13 Zone)</h2><p>BD Clean is a volunteer-based, non-political platform of conscious citizens working to build a clean and hygienic Bangladesh through collective action and awareness. Established in 2016, the organization operates with the vision of transforming Bangladesh into one of the cleanest countries in the world through behavioral change and community participation.</p><p>As the Zone Coordinator of BD Clean North Dhaka, Badda 13 Zone, I actively contribute to this mission by engaging with local communities and promoting cleanliness awareness at the grassroots level. My role involves guiding volunteers, organizing awareness activities, and encouraging citizens to adopt proper waste management practices in their daily lives.</p><p>BD Clean regularly conducts weekly cleanliness drives across different areas of the country, where volunteers physically clean selected locations while also educating local people about responsible waste disposal and environmental responsibility. These activities aim not only to clean spaces but also to change mindsets and habits for long-term impact.</p><p>In my coordination area, I focus on direct communication with people, explaining the importance of cleanliness, civic duty, and sustainable environmental practices. I also encourage participation in oath-taking sessions where volunteers commit themselves to maintaining cleanliness and supporting a greener Bangladesh.</p><p>This experience has strengthened my leadership, communication, and organizational skills while deepening my understanding of community-driven social change. Being part of BD Clean has shown me how consistent awareness and volunteer efforts can create meaningful impact in society.</p><p>I am proud to contribute to BD Clean’s vision of building a cleaner, healthier, and more responsible Bangladesh through collective action and awareness.</p></div>",
      "highlights": [
      ]
    },
    {
      "id": 8,
      "image": "img/blog-img/corporate/img.jpg",
      "gallery": [
        "img/blog-img/corporate/img.jpg",
      ],
      "title": "20 Years Celebration – Bangladesh Advanced Technology Limited (Magura Group Concern)",
      "location": "Dhaka, Bangladesh",
      "date": "22 May 2026",
      "type": "Community",

      "description": "<div class=\"blog-description\"><h2>20 Years Celebration – Bangladesh Advanced Technology Limited (Magura Group Concern)</h2><p>The 20th anniversary celebration of Bangladesh Advanced Technology Limited, a concern of Magura Group, marked an important milestone in the organization’s journey of growth, innovation, and long-term contribution to the technology and business sector of Bangladesh.</p><p>As part of the company team, I had the opportunity to participate in this special occasion along with my colleagues. The event brought together employees from different departments, creating an environment of unity, collaboration, and shared achievement.</p><p>During the celebration, we captured memorable group photos as a team, reflecting our teamwork, professional bonding, and collective involvement in the organization’s success. Being part of such a milestone event allowed me to experience the corporate culture more closely and understand how consistency and teamwork contribute to long-term organizational growth.</p><p>This celebration was more than just an event—it represented two decades of dedication, effort, and progress by the organization. It also inspired us as team members to contribute more actively and responsibly toward future goals.</p><p>Overall, this experience helped strengthen my sense of professionalism, teamwork, and corporate engagement, which are essential for personal and career development.</p></div>",
      "highlights": [
      ]
    },
  ];
  
const TYPE_COLORS = {
  "Sports":      { bg: "from-red-50 to-orange-50",       label: "text-red-700",       pill: "bg-red-100 text-red-700" },
  "Workshop":    { bg: "from-blue-50 to-cyan-50",        label: "text-blue-700",      pill: "bg-blue-100 text-blue-700" },
  "Competition": { bg: "from-purple-50 to-pink-50",      label: "text-purple-700",    pill: "bg-purple-100 text-purple-700" },
  "Speaking":    { bg: "from-amber-50 to-orange-50",     label: "text-amber-700",     pill: "bg-amber-100 text-amber-700" },
  "Volunteer Work":{ bg: "from-green-50 to-emerald-50",    label: "text-green-700",     pill: "bg-green-100 text-green-700" },
  "Community":   { bg: "from-indigo-50 to-blue-50",      label: "text-indigo-700",    pill: "bg-indigo-100 text-indigo-700" },
  "Academic":   { bg: "from-slate-50 to-gray-100",      label: "text-gray-800",    pill: "bg-gray-200 text-gray-800" },
};

const SOCIAL_LINKS = [
  { icon: "fa-facebook",   href: "#" },
  { icon: "fa-twitter",    href: "#" },
  { icon: "fa-instagram",  href: "#" },
  { icon: "fa-linkedin",   href: "#" },
];

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

// ─── ACTIVITY CARD ────────────────────────────────────────────────────────────

function ActivityCard({ activity, index, onOpen }) {
  const [ref, inView] = useInView(0.05);
  const colors = TYPE_COLORS[activity.type] || TYPE_COLORS["Sports"];

  return (
    <article
      ref={ref}
      className={`activity-item group flex flex-col bg-white border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-500 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      {/* Cover Image */}
      {activity.image ? (
        <button
          onClick={() => onOpen(activity)}
          className="activity-img block overflow-hidden aspect-video w-full shrink-0 bg-gray-100 focus:outline-none relative"
        >
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </button>
      ) : (
        <div className={`aspect-video w-full shrink-0 bg-gradient-to-br ${colors.bg} flex items-center justify-center border-b border-gray-200`}>
          <span className={`text-xl font-bold ${colors.label} select-none uppercase text-center px-4`}>
            {activity.type}
          </span>
        </div>
      )}

      {/* Body */}
      <div className="activity-description flex flex-col flex-1 p-4">
        {/* Type Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-block text-xs font-bold uppercase px-2 py-1 rounded-full ${colors.pill}`}>
            {activity.type}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-sm font-bold leading-snug mb-2 text-gray-900 uppercase line-clamp-2">
          <button
            onClick={() => onOpen(activity)}
            className="hover:text-blue-600 transition-colors duration-200 text-left focus:outline-none"
          >
            {activity.title}
          </button>
        </h2>

        {/* Date */}
        <p className="activity-date flex items-center gap-1.5 text-xs text-gray-400 mb-2 font-medium">
          <i className="fa fa-calendar text-blue-400" />
          {activity.date}
        </p>

        {/* Description */}
        <p className="activity-description-content text-xs text-gray-600 leading-relaxed line-clamp-3 flex-1 mb-3">
          {activity.description.replace(/<[^>]*>/g, '')}
        </p>

        {/* View Details Link */}
        <button
          onClick={() => onOpen(activity)}
          className="text-blue-600 hover:text-blue-700 text-xs font-semibold uppercase transition-colors duration-200 self-start"
        >
          View Details →
        </button>
      </div>

      {/* Author Meta */}
      {/* <div className="activity-meta flex items-center gap-2 px-4 py-3 border-t border-gray-200 mt-auto bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
        <img
          src={AUTHOR.avatar}
          alt={AUTHOR.name}
          className="w-7 h-7 rounded-full object-cover border border-gray-200 flex-shrink-0"
        />
        <div className="leading-tight flex-1 min-w-0">
          <h3 className="text-xs font-bold text-gray-800 uppercase truncate">
            {AUTHOR.name}
          </h3>
          <p className="text-xs text-gray-400 truncate">
            {activity.type}
          </p>
        </div>
      </div> */}
    </article>
  );
}

// ─── MODAL ───────────────────────────────────────────────────────────────────

function ActivityModal({ isOpen, onClose, activity }) {
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setGalleryIndex(0);
    }
  }, [isOpen]);

  if (!isOpen || !activity) return null;

  const colors = TYPE_COLORS[activity.type] || TYPE_COLORS["Sports"];
  const gallery = activity.gallery || [];
  const currentImage = gallery[galleryIndex];
  
  const nextImage = () => {
    setGalleryIndex((prev) => (prev + 1) % gallery.length);
  };
  
  const prevImage = () => {
    setGalleryIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center p-4 pt-10 overflow-y-auto transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className={`modal-content relative z-10 w-full max-w-5xl bg-white shadow-2xl mb-10 transform transition-all duration-300 ${
        isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
      }`}>

        {/* Header */}
        <div className="modal-header flex flex-col gap-4 px-6 py-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-transparent">
          <div className="flex items-start justify-between w-full gap-4">
            <a href="#" className="logo flex items-center gap-2">
              <img src={AUTHOR.avatar} alt={AUTHOR.name} className="w-10 h-10 rounded-full border border-gray-200 shadow-sm" />
              <div className="leading-tight">
                <h1 className="text-sm font-bold text-gray-900 uppercase mb-0">
                  {AUTHOR.name}
                </h1>
                <p className="text-xs text-gray-400 mb-0">
                  {activity.date}
                </p>
              </div>
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-700 transition-all duration-200 font-bold flex-shrink-0"
            >
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Activity Title & Meta */}
          <div className="px-6 pt-8 pb-4">
            <div className="mb-3">
              <span className={`inline-block text-xs font-bold uppercase px-2 py-1 rounded-full ${colors.pill}`}>
                {activity.type}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-3">
              {activity.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <i className="fa fa-calendar text-blue-400" />
                {activity.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{activity.type}</span>
              {activity.location && (
                <>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{activity.location}</span>
                </>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          {gallery.length > 0 && (
            <div className="bg-gray-900 relative">
              {/* Main Image */}
              <div className="aspect-video w-full bg-gray-900 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={currentImage} 
                  alt={`Gallery ${galleryIndex + 1}`} 
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Buttons */}
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {gallery.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-xs font-semibold">
                    {galleryIndex + 1} / {gallery.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              {gallery.length > 1 && (
                <div className="bg-gray-800 px-4 py-3 flex gap-2 overflow-x-auto">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setGalleryIndex(idx)}
                      className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all duration-200 ${
                        idx === galleryIndex 
                          ? "border-blue-500 opacity-100" 
                          : "border-gray-600 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="px-6 py-8 activity-content space-y-4">
            {/* Render HTML description */}
            <div 
              className="text-sm text-gray-700 leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: activity.description }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            Date <strong className="text-gray-600">{activity.date}</strong>
          </p>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-gray-600 hover:text-gray-900 uppercase transition-colors"
          >
            Close ×
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function Activities() {
  const [modalOpen,    setModalOpen]    = useState(false);
  const [activeActivity, setActiveActivity] = useState(null);

  const [titleRef,  titleInView]  = useInView(0.1);

  const openModal  = (activity) => { setActiveActivity(activity); setModalOpen(true); };
  const closeModal = ()     => setModalOpen(false);

  return (
    <section id="activities" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* Title Section */}
        <div
          ref={titleRef}
          className={`mb-12 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block mb-2">
              My Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Extracurricular Activities &amp; Events
            </h2>
            <div
              className={`h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded transition-all duration-700 delay-300 ${
                titleInView ? "w-16 opacity-100" : "w-0 opacity-0"
              }`}
            />
            <p className="text-sm text-gray-600 mt-4">
              Explore my involvement in sports, workshops, competitions, and community service activities
            </p>
          </div>
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVITIES.map((activity, idx) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              index={idx}
              onOpen={openModal}
            />
          ))}
        </div>
      </div>
      {/* Modal */}
      <ActivityModal isOpen={modalOpen} onClose={closeModal} activity={activeActivity} />
    </section>
  );
}
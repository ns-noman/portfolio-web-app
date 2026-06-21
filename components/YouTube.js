"use client";

import { useState, useEffect, useRef } from "react";

const YOUTUBE_VIDEOS = [
  {
    id: 1,
    videoId: "KrczOC4MkFU",
    title: "Hangout accross the Little Feni River",
    channel: "Nowab Shorif",
    thumbnail: "https://img.youtube.com/vi/KrczOC4MkFU/maxresdefault.jpg",
  },
  {
    id: 2,
    videoId: "gT7eqgxiSmQ",
    title: "Little boys are driving a boat in the middle of the river & fishing.",
    channel: "Nowab Shorif",
    thumbnail: "https://img.youtube.com/vi/gT7eqgxiSmQ/maxresdefault.jpg",
  },
  {
    id: 3,
    videoId: "_hdvF7-FFqs",
    title: "Arm wrestling with my friends at the mid night",
    channel: "Nowab Shorif",
    thumbnail: "https://img.youtube.com/vi/_hdvF7-FFqs/maxresdefault.jpg",
  },
  {
    id: 4,
    videoId: "u5L3RezXn4M",
    title: "My random photos.",
    channel: "Nowab Shorif",
    thumbnail: "https://img.youtube.com/vi/u5L3RezXn4M/maxresdefault.jpg",
  },
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

// ─── VIDEO CARD ────────────────────────────────────────────────────────────

function VideoCard({ video, index }) {
  const [ref, inView] = useInView(0.05);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article
      ref={ref}
      className={`video-item group flex flex-col bg-white border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-500 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
    >
      {/* Video Container */}
      <div className="video-thumbnail block overflow-hidden aspect-video w-full shrink-0 bg-gray-900 focus:outline-none relative group">
        {!isPlaying ? (
          <>
            {/* Thumbnail */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* Play Button Overlay */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center focus:outline-none"
            >
              <div className="transform transition-transform duration-300 group-hover:scale-110">
                <svg
                    width="68"
                    height="48"
                    viewBox="0 0 68 48"
                    className="drop-shadow-lg"
                >
                    <path
                    d="M66.52 7.74a8 8 0 0 0-5.63-5.66C55.86.67 34 .67 34 .67s-21.86 0-26.89 1.41A8 8 0 0 0 1.48 7.74C0 12.8 0 24 0 24s0 11.2 1.48 16.26a8 8 0 0 0 5.63 5.66C12.14 47.33 34 47.33 34 47.33s21.86 0 26.89-1.41a8 8 0 0 0 5.63-5.66C68 35.2 68 24 68 24s0-11.2-1.48-16.26z"
                    fill="#FF0000"
                    />
                    <path d="M45 24 27 14v20" fill="#fff" />
                </svg>
            </div>
            </button>
            {/* Duration Badge */}
            <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
              {video.duration}
            </div>
          </>
        ) : (
          <>
            {/* YouTube Embed */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            {/* Close Button */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-2 right-2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-all duration-200 font-bold text-lg"
              aria-label="Close video"
            >
              ×
            </button>
          </>
        )}
      </div>


      {/* Body */}
      <div className="video-description flex flex-col flex-1 p-4">
        {/* Channel */}
        <p className="text-xs text-gray-400 font-medium mb-2">
          {video.channel}
        </p>

        {/* Title */}
        <h2 className="text-sm font-bold leading-snug mb-2 text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
          {video.title}
        </h2>
        {/* Watch Button */}
        <button
          onClick={() => setIsPlaying(true)}
          className="text-blue-600 hover:text-blue-700 text-xs font-semibold uppercase transition-colors duration-200 self-start"
        >
          Watch Now →
        </button>
      </div>
    </article>
  );
}



// ─── MAIN ─────────────────────────────────────────────────────────────────

export default function YoutubeVideos() {
  const [titleRef, titleInView] = useInView(0.1);

  return (
    <section id="youtube-videos" className="py-12 md:py-16 bg-white">
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
              Video Content
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              YouTube Videos
            </h2>
            <div
                className={`h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded transition-all duration-700 delay-300 ${
                    titleInView ? "w-16 opacity-100" : "w-0 opacity-0"
                }`}
                />
                <p className="text-sm text-gray-600 mt-4 mb-3">
                Watch my tutorials, project showcases, and development insights
                </p>

                <a
                href="https://www.youtube.com/@nsanoman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                >
                <i className="fab fa-youtube text-lg"></i>
                Visit My YouTube Channel
                </a>
            </div>
        </div>

        {/* Video Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {YOUTUBE_VIDEOS.map((video, idx) => (
            <VideoCard
              key={video.id}
              video={video}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import gsap from "gsap";
import { PROJECTS, DETAILS } from "./projects";
import "./work.css";

interface ProjectDetailProps {
  slug?: string;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug: propSlug }) => {
  const params = useParams<{ slug: string }>();
  const slug = propSlug || params.slug || "";
  const root = useRef<HTMLElement>(null);

  const i = PROJECTS.findIndex(
    (project) =>
      project.slug === slug ||
      (slug === "reconcraft" && project.slug === "reconpilot") ||
      (slug === "skt" && project.slug === "shree-krishna-transport")
  );
  const p = i !== -1 ? PROJECTS[i] : PROJECTS[0];
  const d = DETAILS[slug] || DETAILS[p?.slug] || DETAILS.probe;
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  const [heroImg, setHeroImg] = React.useState<string>(p ? p.img : "");
  const [activeLightboxIndex, setActiveLightboxIndex] = React.useState<number | null>(null);

  useEffect(() => {
    if (p) setHeroImg(p.img);
  }, [p]);

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (p?.gallery && p.gallery.length > 0 && activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + p.gallery.length) % p.gallery.length);
    }
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (p?.gallery && p.gallery.length > 0 && activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % p.gallery.length);
    }
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null || !p?.gallery || p.gallery.length === 0) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, p?.gallery]);

  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeLightboxIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(".ln>span", {
        yPercent: 115,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.1,
        delay: 0.2,
      });
      gsap.from(".h-back,.h-kicker,.h-tag,.h-facts", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.4,
      });
      gsap.from(".h-shot", {
        y: 90,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.6,
      });
    }, root);

    // scroll reveal
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 }
    );

    root.current?.querySelectorAll(".rv").forEach((el) => io.observe(el));

    return () => {
      ctx.revert();
      io.disconnect();
    };
  }, [slug]);

  if (!p) {
    return (
      <main className="w-detail flex flex-col items-center justify-center p-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link className="h-back" to="/work">
          ← Back to work
        </Link>
      </main>
    );
  }

  const sections: [string, string, ReactNode][] = [];
  if (d) {
    sections.push([
      "Overview",
      "Problem and solution",
      <div className="h-two" key="overview">
        <div>
          <h3>The problem</h3>
          <p>{d.pr}</p>
        </div>
        <div>
          <h3>The solution</h3>
          <p>{d.so}</p>
        </div>
      </div>,
    ]);

    sections.push([
      "Architecture",
      "How it fits together",
      <div className="arch" key="architecture">
        {d.a.map(([label, nodes], j) => (
          <div key={label}>
            {j > 0 && <div className="link" />}
            <div className="layer">
              <div className="layer-l mono">{label}</div>
              <div className="nodes">
                {nodes.map((n) => (
                  <div className="node" key={n}>
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>,
    ]);

    sections.push([
      "Features",
      "What it does",
      <div className="h-grid" key="features">
        {d.f.map(([h, t], j) => (
          <div className="card" key={h}>
            <span className="mono">0{j + 1}</span>
            <h3>{h}</h3>
            <p>{t}</p>
          </div>
        ))}
      </div>,
    ]);

    if (d.m) {
      sections.push([
        "Contribution",
        "What I built",
        <div className="h-grid" key="contribution">
          {d.m.map(([h, t]) => (
            <div className="card" key={h}>
              <h3>{h}</h3>
              <p>{t}</p>
            </div>
          ))}
        </div>,
      ]);
    }

    sections.push([
      "Challenges",
      "Problems worth solving",
      <div className="h-grid" key="challenges">
        {d.c.map(([h, t]) => (
          <div className="card" key={h}>
            <h3>{h}</h3>
            <p>{t}</p>
          </div>
        ))}
      </div>,
    ]);

    if (d.dc) {
      sections.push([
        "Decisions",
        "Why these choices",
        <div className="h-dec" key="decisions">
          {d.dc.map(([a, b, c]) => (
            <div key={a}>
              <b>{a}</b>
              <span>{b}</span>
              <p>{c}</p>
            </div>
          ))}
        </div>,
      ]);
    }

    sections.push([
      "Results",
      "By the numbers",
      <div className="h-nums" key="results">
        {d.x.map(([v, l]) => (
          <div key={l}>
            <b>{v}</b>
            <span>{l}</span>
          </div>
        ))}
      </div>,
    ]);

    sections.push([
      "Stack",
      "Built with",
      <div className="chips" key="stack">
        {d.s.map((x) => (
          <span key={x}>{x}</span>
        ))}
      </div>,
    ]);

    if (p.gallery && p.gallery.length > 0) {
      sections.push([
        "Gallery",
        "Visual",
        <div className="h-gallery" key="gallery">
          {p.gallery.map((img, j) => (
            <div
              className={`h-gallery-item ${heroImg === img ? "active" : ""}`}
              key={j}
              onClick={() => setActiveLightboxIndex(j)}
              title="Click to inspect visual"
            >
              <img src={img} alt={`${p.title} view ${j + 1}`} loading="lazy" />
            </div>
          ))}
        </div>,
      ]);
    }
  }

  return (
    <main className="w-detail" ref={root}>
      <header className="h-hero" style={{ ["--c" as string]: p.color }}>
        <Link className="h-back" to="/work">
          ← Back to work
        </Link>
        <div className="mono h-kicker">{d ? d.t : p.meta}</div>
        <h1>
          {p.title.split(" ").map((w, j) => (
            <span key={j}>
              <span className="ln">
                <span>{w}</span>
              </span>{" "}
            </span>
          ))}
        </h1>
        <p className="h-tag">{d ? d.tag : p.meta}</p>
        <div className="h-facts mono">
          {d?.r && (
            <div>
              <i>Role</i>
              {d.r}
            </div>
          )}
          {d?.team && (
            <div>
              <i>Team</i>
              {d.team}
            </div>
          )}
          {d?.sample && (
            <div>
              <i>Status</i>Sample content
            </div>
          )}
          <div>
            <i>Tier</i>
            {p.tier === "flagship"
              ? "Flagship"
              : p.tier === "engineering"
                ? "Engineering focus"
                : "Supporting"}
          </div>
          {d && (
            <div>
              <i>Stack</i>
              {d.s.length} technologies
            </div>
          )}
          {p.href && p.href.startsWith("http") && (
            <div>
              <i>Link</i>
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                {new URL(p.href).hostname} ↗
              </a>
            </div>
          )}
        </div>
        <figure className="h-shot">
          <img src={heroImg || p.img} alt={p.title} />
        </figure>
      </header>

      {sections.map(([k, h, body], j) => (
        <section className="h-sec rv" key={k}>
          <div className="mono h-k">
            {String(j + 1).padStart(2, "0")} / {k}
          </div>
          <h2>{h}</h2>
          {body}
        </section>
      ))}

      {!d && (
        <section className="h-sec rv">
          <h2>Full details coming soon</h2>
        </section>
      )}

      {next && (
        <Link className="h-next rv" to={`/work/${next.slug}`}>
          <span className="mono">Next project</span>
          <b>{next.title}</b>
        </Link>
      )}

      {/* In-place Visual Lightbox with switching options */}
      {activeLightboxIndex !== null && p?.gallery && p.gallery.length > 0 && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 select-none animate-fadeIn"
          onClick={handleCloseLightbox}
        >
          {/* Top Bar: Title, Counter, and Close Button */}
          <div
            className="flex items-center justify-between text-white border-b border-white/10 pb-3 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase px-2.5 py-1 rounded-md bg-[#9D6BEE]/20 border border-[#9D6BEE]/40 text-[#A87BF5]">
                Visual
              </span>
              <span className="text-sm font-semibold text-white/90 hidden sm:inline">
                {p.title}
              </span>
              <span className="text-xs text-white/50 font-mono">
                ({activeLightboxIndex + 1} of {p.gallery.length})
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-white/40 hidden md:inline">
                [← / → Switch • Esc Close]
              </span>
              <button
                type="button"
                onClick={handleCloseLightbox}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer text-sm"
                aria-label="Close lightbox"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Center Area: Main Image with Next/Prev Arrow Controls */}
          <div
            className="relative flex-1 flex items-center justify-center my-3 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            {p.gallery.length > 1 && (
              <button
                type="button"
                onClick={handlePrevImage}
                className="absolute left-2 sm:left-6 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/70 hover:bg-[#9D6BEE] border border-white/20 hover:border-[#9D6BEE] flex items-center justify-center text-white text-2xl sm:text-3xl transition-all shadow-2xl cursor-pointer hover:scale-110"
                aria-label="Previous image"
              >
                ‹
              </button>
            )}

            {/* Active Image Container */}
            <div className="max-w-[90vw] max-h-[72vh] flex items-center justify-center p-2">
              <img
                src={p.gallery[activeLightboxIndex]}
                alt={`${p.title} visual ${activeLightboxIndex + 1}`}
                className="max-h-[72vh] max-w-full w-auto object-contain rounded-xl shadow-2xl border border-white/15"
              />
            </div>

            {/* Next Button */}
            {p.gallery.length > 1 && (
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute right-2 sm:right-6 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/70 hover:bg-[#9D6BEE] border border-white/20 hover:border-[#9D6BEE] flex items-center justify-center text-white text-2xl sm:text-3xl transition-all shadow-2xl cursor-pointer hover:scale-110"
                aria-label="Next image"
              >
                ›
              </button>
            )}
          </div>

          {/* Bottom Thumbnails Strip for Quick Switching */}
          {p.gallery.length > 1 && (
            <div
              className="flex items-center justify-center gap-2.5 overflow-x-auto py-2 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {p.gallery.map((thumb, tIdx) => (
                <button
                  key={tIdx}
                  type="button"
                  onClick={() => setActiveLightboxIndex(tIdx)}
                  className={`relative shrink-0 w-16 h-11 sm:w-20 sm:h-14 rounded-lg overflow-hidden border transition-all cursor-pointer ${activeLightboxIndex === tIdx
                      ? "border-[#9D6BEE] ring-2 ring-[#9D6BEE]/50 scale-105 opacity-100"
                      : "border-white/20 opacity-40 hover:opacity-80"
                    }`}
                  aria-label={`Switch to image ${tIdx + 1}`}
                >
                  <img src={thumb} alt={`Thumbnail ${tIdx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default ProjectDetail;

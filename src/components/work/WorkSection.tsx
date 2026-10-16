import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { PROJECTS } from "./projects";
import "./work.css";

const TABS = [
  { id: "all", label: "All" },
  { id: "flagship", label: "Flagship" },
  { id: "engineering", label: "Engineering" },
  { id: "supporting", label: "Supporting" },
] as const;

type TabId = (typeof TABS)[number]["id"];
const STEP = 7;

export const WorkSection: React.FC = () => {
  const [tab, setTab] = useState<TabId>("all");
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);

  const root = useRef<HTMLElement>(null);
  const pill = useRef<HTMLSpanElement>(null);
  const modal = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const tabEls = useRef<Record<string, HTMLButtonElement | null>>({});
  const from = useRef(0); // first row index that should animate in
  const busy = useRef(false);

  const items = PROJECTS.filter((p) => tab === "all" || p.tier === tab);
  const shown = open ? items : items.slice(0, STEP);
  const rows = () => gsap.utils.toArray<HTMLElement>(".w-row", root.current);
  const count = (id: TabId) =>
    PROJECTS.filter((p) => id === "all" || p.tier === id).length;

  // Rows slide up when the tab changes, on first load, and for the rows added by "View more"
  useLayoutEffect(() => {
    gsap.fromTo(
      rows().slice(from.current),
      { y: 56, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.08,
        clearProps: "transform,opacity",
        onComplete: () => {
          busy.current = false;
        },
      }
    );
  }, [tab, open]);

  // Sliding pill behind the active tab
  const movePill = () => {
    const b = tabEls.current[tab];
    if (b && pill.current) {
      gsap.to(pill.current, {
        x: b.offsetLeft,
        width: b.offsetWidth,
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  };

  useLayoutEffect(() => {
    movePill();
  }, [tab]);

  useEffect(() => {
    window.addEventListener("resize", movePill);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(movePill);
    }
    return () => window.removeEventListener("resize", movePill);
  }, [tab]);

  // Preview image and "View" bubble follow the cursor with different amounts of lag
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const m = modal.current;
    const c = cursor.current;
    if (!m || !c) return;

    gsap.set([m, c], { xPercent: -50, yPercent: -50 });
    const mx = gsap.quickTo(m, "x", { duration: 0.8, ease: "power3" });
    const my = gsap.quickTo(m, "y", { duration: 0.8, ease: "power3" });
    const cx = gsap.quickTo(c, "x", { duration: 0.45, ease: "power3" });
    const cy = gsap.quickTo(c, "y", { duration: 0.45, ease: "power3" });

    const move = (e: MouseEvent) => {
      mx(e.clientX);
      my(e.clientY);
      cx(e.clientX);
      cy(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const switchTab = (id: TabId) => {
    if (id === tab || busy.current) return;
    busy.current = true;
    setHover(false);
    gsap.to(rows(), {
      y: -28,
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
      stagger: 0.04,
      onComplete: () => {
        from.current = 0;
        setOpen(false);
        setTab(id);
      },
    });
  };

  const toggleMore = () => {
    setHover(false);
    if (!open) {
      from.current = STEP;
      setOpen(true);
      return;
    }
    gsap.to(rows().slice(STEP), {
      y: -28,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      stagger: 0.04,
      onComplete: () => {
        from.current = 999;
        setOpen(false);
      },
    });
  };

  return (
    <section className="work" id="work" ref={root}>
      <h2>Work</h2>

      <div className="w-bar">
        <div className="w-tabs" role="tablist">
          <span className="w-pill" ref={pill} />
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              ref={(el) => {
                tabEls.current[t.id] = el;
              }}
              onClick={() => switchTab(t.id)}
            >
              {t.label}
              <sup>{count(t.id)}</sup>
            </button>
          ))}
        </div>
      </div>

      <ul className="w-list">
        {shown.map((p, i) => (
          <li className="w-row" key={p.title}>
            <Link
              className="w-link"
              to={`/work/${p.slug}`}
              onMouseEnter={() => {
                setIdx(i);
                setHover(true);
              }}
              onMouseLeave={() => setHover(false)}
            >
              <span className="w-thumb" style={{ background: p.color }}>
                <img src={p.img} alt="" loading="lazy" />
              </span>
              <span className="w-title">{p.title}</span>
              <span className="w-meta">{p.meta}</span>
              <span className="w-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {items.length > STEP && (
        <button className="w-more" onClick={toggleMore} aria-expanded={open}>
          {open ? "View less" : `View more (${items.length - STEP})`}
        </button>
      )}

      {/* Floating preview: scale on the inner element, position on the outer (GSAP) */}
      <div className="w-modal" ref={modal} data-on={hover} aria-hidden="true">
        <div className="w-modal-in">
          <div className="w-clip">
            <div
              className="w-strip"
              style={{
                transform: `translateY(${-Math.min(idx, shown.length - 1) * 100}%)`,
              }}
            >
              {shown.map((p) => (
                <div
                  className="w-slide"
                  key={p.title}
                  style={{ background: p.color }}
                >
                  <img src={p.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-cursor" ref={cursor} data-on={hover} aria-hidden="true">
        <div className="w-cursor-in">View</div>
      </div>
    </section>
  );
};

export default WorkSection;

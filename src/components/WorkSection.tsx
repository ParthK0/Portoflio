import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { PROJECTS as PORTFOLIO_PROJECTS } from "../data/portfolioData";
import { Project as PortfolioProject } from "../types";
import { ProjectModal } from "./ProjectModal";
import "./work.css";

type Tier = "flagship" | "supporting";

export interface WorkProjectItem {
  id?: string;
  title: string;
  meta: string;
  tier: Tier;
  img: string;
  color: string;
  href: string;
}

const PROJECTS: WorkProjectItem[] = [
  {
    id: "alphaforge",
    title: "AlphaForge",
    meta: "Multi-agent stock research",
    tier: "flagship",
    img: "/images/probe/perception.png",
    color: "#0f3d2e",
    href: "https://github.com/ParthK0",
  },
  {
    id: "forge",
    title: "Forge",
    meta: "Multi-tenant commerce platform",
    tier: "flagship",
    img: "/images/reconcraft/ledger-matching.png",
    color: "#1b1b3a",
    href: "https://github.com/ParthK0",
  },
  {
    id: "aetherface",
    title: "AetherFace",
    meta: "Biometric attendance platform",
    tier: "flagship",
    img: "/images/aetherface/dashboard.png",
    color: "#0f2f3d",
    href: "https://github.com/ParthK0",
  },
  {
    id: "probe",
    title: "PROBE",
    meta: "Adaptive voice interview AI",
    tier: "flagship",
    img: "/images/probe/dashboard.png",
    color: "#2a1b3a",
    href: "https://github.com/ParthK0",
  },
  {
    id: "reconcraft",
    title: "ReconPilot",
    meta: "AI reconciliation engine",
    tier: "flagship",
    img: "/images/reconcraft/dashboard.png",
    color: "#2b2a12",
    href: "https://github.com/ParthK0",
  },
  {
    id: "skt",
    title: "Shree Krishna Transport",
    meta: "Client website",
    tier: "supporting",
    img: "/images/shree-krishna-transport/hero.png",
    color: "#3a1f1f",
    href: "https://shree-krishna-transport.org/",
  },
  {
    id: "groundcontrol",
    title: "GroundControl",
    meta: "Stadium operations GenAI",
    tier: "supporting",
    img: "/images/probe/voice-agent.png",
    color: "#0f3d2e",
    href: "https://github.com/ParthK0",
  },
  {
    id: "electiq",
    title: "ElectIQ",
    meta: "Civic education SaaS",
    tier: "supporting",
    img: "/images/electiq/ai-summary.png",
    color: "#1b1b3a",
    href: "https://github.com/ParthK0/election",
  },
  {
    id: "quantcraft",
    title: "QuantCraft",
    meta: "Hackathon registration platform",
    tier: "supporting",
    img: "/images/projects/skt-hero.png",
    color: "#0f2f3d",
    href: "https://github.com/ParthK0/Quantacraft",
  },
  {
    id: "terrawatch",
    title: "TerraWatch",
    meta: "Carbon footprint tracker",
    tier: "supporting",
    img: "/images/projects/aetherface-admin.png",
    color: "#2b2a12",
    href: "https://github.com/ParthK0",
  },
];

const TABS = [
  { id: "all", label: "All" },
  { id: "flagship", label: "Flagship Engineering" },
  { id: "supporting", label: "Supporting" },
] as const;

type TabId = (typeof TABS)[number]["id"];
const STEP = 4;

export const WorkSection: React.FC = () => {
  const [tab, setTab] = useState<TabId>("all");
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const root = useRef<HTMLElement>(null);
  const pill = useRef<HTMLSpanElement>(null);
  const modal = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const tabEls = useRef<Record<string, HTMLButtonElement | null>>({});
  const from = useRef(0);
  const busy = useRef(false);

  const items = PROJECTS.filter((p) => tab === "all" || p.tier === tab);
  const shown = open ? items : items.slice(0, STEP);
  const rows = () => gsap.utils.toArray<HTMLElement>(".w-row", root.current);
  const count = (id: TabId) => PROJECTS.filter((p) => id === "all" || p.tier === id).length;

  // Staggered slide up when tab changes or when rows are added by "View more"
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

  // Preview image and "View" bubble follow cursor
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

  const handleRowClick = (e: React.MouseEvent, p: WorkProjectItem) => {
    // Check if target was the direct external arrow
    const isArrow = (e.target as HTMLElement).closest(".w-arrow");
    if (isArrow) return; // let native <a> navigation happen

    // If project matches rich portfolio modal data, open the modal
    const matched = PORTFOLIO_PROJECTS.find(
      (item) =>
        (p.id && item.id.toLowerCase() === p.id.toLowerCase()) ||
        item.title.toLowerCase().includes(p.title.toLowerCase()) ||
        p.title.toLowerCase().includes(item.title.toLowerCase())
    );

    if (matched) {
      e.preventDefault();
      setSelectedProject(matched);
      setHover(false);
    }
  };

  return (
    <section className="work" id="work" ref={root}>
      <h2>
        Work<span className="w-dot">.</span>
      </h2>

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
            <a
              className="w-link"
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={(e) => handleRowClick(e, p)}
              onMouseEnter={() => {
                setIdx(i);
                setHover(true);
              }}
              onMouseLeave={() => setHover(false)}
            >
              <span className="w-title">{p.title}</span>
              <span className="w-meta">{p.meta}</span>
              <span className="w-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
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
                <div className="w-slide" key={p.title} style={{ background: p.color }}>
                  <img src={p.img} alt={p.title} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-cursor" ref={cursor} data-on={hover} aria-hidden="true">
        <div className="w-cursor-in">View</div>
      </div>

      {/* Interactive Detail Modal for deep inspection */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default WorkSection;

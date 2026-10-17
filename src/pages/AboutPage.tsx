import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  GraduationCap, 
  Trophy, 
  Briefcase, 
  MapPin, 
  FileText, 
  Github, 
  Linkedin, 
  Code2, 
  ArrowRight, 
  ArrowUpRight,
  BookOpen,
  Users,
  CheckCircle2,
  Award,
  ChevronRight,
  Camera,
  X
} from 'lucide-react';
import { Experience } from '../components/Experience';
import { LeetCodeStats } from '../components/LeetCodeStats';
import { GitHubActivity } from '../components/GitHubActivity';
import { PERSONAL_INFO, EDUCATION_ITEMS, CERTIFICATIONS, LEADERSHIP_ITEMS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const ABOUT_GALLERY_IMAGES: string[] = [
  '/images/about/DSC08858.JPG',
  '/images/about/IMG_5815.JPG',
  '/images/about/IMG_7609.JPG',
  '/images/about/2.jpeg',
  '/images/about/3.jpeg',
  '/images/about/4.jpeg',
  '/images/about/5.jpeg',
  '/images/about/event-team.jpeg'
];

export const AboutPage: React.FC = () => {
  const { currentTheme } = useTheme();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    document.title = "About Me | Parth Khowal";
  }, []);

  return (
    <div className="pt-24 pb-0 bg-[#111111] min-h-screen text-[#FFFFFF] select-none">

      {/* 1. Hero Section: Personal About Me */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">

          {/* Section Badge & Title */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <User className="w-3.5 h-3.5 text-[#9D6BEE]" />
              About Me
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFFFFF] tracking-tight">
              Hi, I'm{' '}
              <span
                className="transition-colors duration-300"
                style={{ color: currentTheme.primary }}
              >
                {PERSONAL_INFO.name}
              </span>.
            </h1>
            <p className="text-lg sm:text-xl text-[#A0A0A0] mt-3 font-medium max-w-2xl">
              Full-Stack Developer &amp; AI Systems Enthusiast
            </p>
          </div>

          {/* Two-Column Intro: Narrative + Quick Facts */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left: Bio & Overview (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 shadow-xl shadow-black/60 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#9D6BEE] to-[#A87BF5]" />

              <div>
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#262626] text-xs font-mono">
                  <span className="text-[#A87BF5] font-semibold uppercase tracking-wider">Introduction</span>
                  <span className="text-[#A0A0A0]">Greater Noida, UP · India</span>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#D0D0D0] leading-relaxed">
                  <p>
                    I'm an undergraduate pursuing my <strong className="text-white">B.Tech in Artificial Intelligence &amp; Data Science</strong> at Galgotias University (8.93 CGPA). I'm passionate about building clean, performant, and resilient web applications and deterministic AI systems.
                  </p>
                  <p>
                    My problem-solving journey began with competitive mathematics, where I was awarded the <strong className="text-white">International Mathematics Olympiad Bronze Medal</strong>. Since then, I've channeled that analytical foundation into mastering data structures &amp; algorithms (solving 600+ LeetCode problems) and engineering real-world software.
                  </p>
                  <p>
                    Currently, I'm working as a <strong className="text-white">Full-Stack Developer Intern at MSKard Business Solutions</strong>, building modern e-commerce platforms with Next.js, Node.js, TypeScript, and PostgreSQL.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-8 border-t border-[#262626] flex flex-wrap items-center gap-3">
                <a
                  href={PERSONAL_INFO.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#111111] bg-[var(--accent-primary)] border border-[var(--accent-primary)] hover:bg-[#FFFFFF] hover:text-[#111111] hover:border-[#FFFFFF] transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full text-xs font-medium text-[#FFFFFF] bg-[#181818] border border-[#262626] hover:border-[#9D6BEE]/40 hover:bg-[#202020] transition-all flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5 text-[#A0A0A0]" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full text-xs font-medium text-[#FFFFFF] bg-[#181818] border border-[#262626] hover:border-[#9D6BEE]/40 hover:bg-[#202020] transition-all flex items-center gap-2"
                >
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>LeetCode</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full text-xs font-medium text-[#FFFFFF] bg-[#181818] border border-[#262626] hover:border-[#9D6BEE]/40 hover:bg-[#202020] transition-all flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right: Quick Highlights Grid (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              
              <div className="p-6 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 shadow-xl shadow-black/60 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 flex items-center justify-center text-[#A87BF5] shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider">Degree &amp; College</div>
                  <div className="text-base font-bold text-white mt-0.5">B.Tech AI &amp; Data Science</div>
                  <div className="text-xs text-[#A87BF5] font-mono mt-1">Galgotias University · 8.93 CGPA</div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 shadow-xl shadow-black/60 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-400 shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider">Key Achievement</div>
                  <div className="text-base font-bold text-white mt-0.5">Maths Olympiad Medallist</div>
                  <div className="text-xs text-amber-400 font-mono mt-1">Bronze Medal · World Finalist</div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 shadow-xl shadow-black/60 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider">Work Experience</div>
                  <div className="text-base font-bold text-white mt-0.5">Full-Stack Dev Intern</div>
                  <div className="text-xs text-blue-400 font-mono mt-1">MSKard Business Solutions</div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 shadow-xl shadow-black/60 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider">Location &amp; Availability</div>
                  <div className="text-base font-bold text-white mt-0.5">Greater Noida, UP, India</div>
                  <div className="text-xs text-emerald-400 font-mono mt-1">Open to Remote / Relocation</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. Education Section */}
      <section id="education" className="py-16 sm:py-20 relative bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <GraduationCap className="w-3.5 h-3.5 text-[#9D6BEE]" />
                Academic Background
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
                Education
              </h2>
            </div>
            <p className="text-[#A0A0A0] text-sm sm:text-base max-w-lg leading-relaxed">
              Academic qualifications from secondary schooling to degree specialization in Artificial Intelligence &amp; Data Science.
            </p>
          </div>

          {/* Education Timeline Cards */}
          <div className="space-y-6">
            {EDUCATION_ITEMS.map((edu) => (
              <div
                key={edu.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 shadow-xl shadow-black/40 group"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#A87BF5] uppercase tracking-wider">
                      {edu.id === 'galgotias' ? 'University Degree' : 'Schooling'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] group-hover:text-[#9D6BEE] transition-colors mt-1">
                      {edu.institution}
                    </h3>
                    <div className="text-sm sm:text-base font-semibold text-[#D0D0D0] mt-0.5">
                      {edu.degree}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="text-xs font-mono font-semibold text-[#A87BF5] bg-[#9D6BEE]/10 px-3 py-1 rounded-md border border-[#9D6BEE]/25">
                      {edu.period}
                    </span>
                    <span
                      className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#181818] border border-[#262626]"
                      style={edu.score.includes('CGPA') ? { color: currentTheme.primary, borderColor: `${currentTheme.primary}40` } : { color: '#FFFFFF' }}
                    >
                      {edu.score}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#707070] font-mono mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </div>

                {/* Relevant Coursework */}
                {edu.coursework && (
                  <div className="pt-4 border-t border-[#262626]">
                    <div className="text-xs font-mono text-[#A0A0A0] mb-2 uppercase tracking-wider flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-[#9D6BEE]" />
                      <span>Relevant Coursework:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[11px] font-mono px-3 py-1 rounded-lg bg-[#181818] border border-[#262626] text-[#A0A0A0]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Achievements & Certifications */}
      <section id="achievements" className="py-16 sm:py-20 relative bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <Trophy className="w-3.5 h-3.5 text-[#9D6BEE]" />
                Honors &amp; Credentials
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
                Achievements &amp; Certifications
              </h2>
            </div>
            <p className="text-[#A0A0A0] text-sm sm:text-base max-w-lg leading-relaxed">
              International competitive honors and industry-accredited simulations.
            </p>
          </div>

          {/* International Olympiad Banner */}
          <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#181818] via-[#1A1624] to-[#181818] border border-[#9D6BEE]/30 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#9D6BEE]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#9D6BEE]/15 border border-[#9D6BEE]/40 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_20px_rgba(157,107,238,0.2)]">
                  <Trophy className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-semibold text-[#A87BF5] uppercase px-2.5 py-0.5 rounded bg-[#9D6BEE]/10 border border-[#9D6BEE]/20">
                      International Honor
                    </span>
                    <span className="text-xs font-mono text-[#A0A0A0]">Competitive Mathematics</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#FFFFFF] tracking-tight">
                    International Mathematics Olympiad — Bronze Medallist
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1 max-w-2xl">
                    Demonstrated advanced mathematical analysis, discrete problem solving, and analytical proof reasoning on an international competitive stage.
                  </p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="text-2xl font-black text-amber-400 font-mono">BRONZE</div>
                <div className="text-xs font-mono text-[#A0A0A0]">World Finalist</div>
              </div>
            </div>
          </div>

          {/* Grid: Industry Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-6 sm:p-7 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#262626]">
                    <span className="text-xs font-mono uppercase text-[#A87BF5] font-semibold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#9D6BEE]" />
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-[#A0A0A0]">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#FFFFFF] group-hover:text-[#A87BF5] transition-colors mb-2">
                    {cert.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#262626]">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#181818] border border-[#262626] text-[#A0A0A0]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Leadership & Campus Impact + Clean Horizontal Photo Library */}
      <section id="leadership" className="py-16 sm:py-20 relative bg-[#111111] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <Users className="w-3.5 h-3.5 text-[#9D6BEE]" />
                Leadership &amp; Community
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
                Leadership &amp; Campus Impact
              </h2>
            </div>
            <p className="text-[#A0A0A0] text-sm sm:text-base max-w-lg leading-relaxed">
              Driving developer communities, organizing flagship international conferences, and mentoring peer cohorts in software and algorithms.
            </p>
          </div>

          {/* Leadership Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {LEADERSHIP_ITEMS.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#262626]">
                    <span className="text-xs font-mono uppercase text-[#A87BF5] font-semibold flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#9D6BEE]" />
                      {item.organization}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#181818] border border-[#262626] text-[#A0A0A0]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] group-hover:text-[#A87BF5] transition-colors mb-4">
                    {item.role}
                  </h3>

                  <ul className="space-y-2.5 mb-6">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-[#9D6BEE] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#262626] flex items-center gap-2 text-xs font-mono text-[#707070]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9D6BEE]" />
                  <span>Executive Responsibility &amp; Team Leadership</span>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Library Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pt-4 border-t border-[#262626]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 flex items-center justify-center text-[#A87BF5]">
                <Camera className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Campus Moments &amp; Gallery
                </h3>
                <p className="text-xs text-[#A0A0A0]">
                  Snapshots from workshops, conference planning, hackathons &amp; community events
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#707070]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Hover to pause · Click to expand</span>
            </div>
          </div>

        </div>

        {/* Full-bleed Horizontal Marquee Carousel (Clean: No Names on Images) */}
        <div className="relative w-full overflow-hidden py-3 group">
          {/* Edge Fade Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#111111] via-[#111111]/80 to-transparent z-10" />

          {/* Scrolling Strip: Double-mapped for seamless infinite loop */}
          <div className="animate-photo-marquee flex items-center gap-5 px-4">
            {[...ABOUT_GALLERY_IMAGES, ...ABOUT_GALLERY_IMAGES].map((src, pIdx) => (
              <div
                key={pIdx}
                onClick={() => setSelectedPhoto(src)}
                className="w-72 sm:w-84 h-52 sm:h-60 shrink-0 relative rounded-2xl overflow-hidden border border-[#262626] bg-[#161616] group/card hover:border-[#9D6BEE]/70 transition-all duration-300 cursor-pointer shadow-lg shadow-black/50"
              >
                {/* Clean Photo Image - No text or title overlay */}
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                />

                {/* Subtle hover feedback */}
                <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industry Work Experience */}
      <Experience />

      {/* 6. LeetCode & Competitive Programming */}
      <LeetCodeStats />

      {/* 7. GitHub & Open Source Activity */}
      <GitHubActivity />

      {/* 8. Bottom Collaboration CTA */}
      <section className="py-20 bg-[#111111] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#161616] border border-[#262626] shadow-xl shadow-black/60 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9D6BEE]" />
                Collaboration
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
                Interested in Working Together?
              </h3>
              <p className="text-[#A0A0A0] text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
                Currently open for Software Engineering Internships (Summer 2026) and high-impact full-stack / AI engineering roles.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 text-xs font-semibold shrink-0">
              <Link
                to="/work"
                className="px-6 py-3.5 rounded-full text-xs font-semibold text-[#111111] bg-[var(--accent-primary)] border border-[var(--accent-primary)] hover:bg-[#FFFFFF] hover:text-[#111111] hover:border-[#FFFFFF] transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-full text-xs font-semibold text-[#FFFFFF] bg-[#181818] border border-[#262626] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-[#111111] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Photo Lightbox Modal - No Names or Titles */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-[#161616] border border-[#262626] rounded-3xl overflow-hidden shadow-2xl shadow-black relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/75 border border-white/20 text-white flex items-center justify-center hover:bg-black hover:border-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full max-h-[85vh] bg-black flex items-center justify-center overflow-hidden p-2">
              <img
                src={selectedPhoto}
                alt=""
                className="w-full max-h-[85vh] object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AboutPage;

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Full Stack & Mobile Developer',
    company: 'Self-Taught & Production Projects',
    period: '2023 – Present',
    type: 'Projects & Freelance',
    description: 'Mastering React, React Native, Three.js, and Node.js. Developed multiple production-grade web applications and cross-platform mobile apps focusing on 3D animations, mobile-first design, REST APIs, and user-centric interfaces.',
    highlights: [
      'Built full-stack applications with React, React Native, Node.js, Express, and MySQL',
      'Created immersive 3D interactive experiences with Three.js, R3F, and GSAP',
      'Engineered cross-platform mobile apps with seamless UI and optimized performance'
    ],
  },
  {
    role: 'Computer Science (Web & App Dev)',
    company: 'Abasyn University',
    period: '2024 – 2028',
    type: "Bachelor's Degree",
    description: 'Specializing in Web and App Development. Building a strong foundation in software engineering, data structures, algorithms, and modern frontend/backend frameworks.',
    highlights: [
      'Rigorous foundation in computer science and software development principles',
      'Specialized focus on modern web architectures and mobile development',
      'Applied coursework in database design, algorithms, and collaborative projects'
    ],
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.exp-title',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.exp-title', start: 'top 85%' } }
    );
    gsap.fromTo('.exp-item',
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.exp-item', start: 'top 90%' } }
    );
  }, { scope: sectionRef });

  return (
    <section id="experience-section" ref={sectionRef} className="relative bg-[#0a0c12] text-white w-screen min-h-screen py-20 md:py-32 font-inter overflow-hidden flex flex-col justify-center">

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="exp-title mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#00f2fe] mb-4">Journey &amp; Education</p>
            <h2 className="text-[15vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter text-white">
              Experience
            </h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-xs font-medium leading-relaxed">
            Building robust web &amp; mobile applications, mastering 3D experiences, and studying Computer Science.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f2fe] via-white/10 to-transparent hidden md:block" />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="exp-item group relative md:pl-12 py-10 border-b border-white/10 last:border-0 transition-all duration-500 hover:bg-white/[0.02] rounded-2xl md:hover:pl-14 cursor-default"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 top-12 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#00f2fe] bg-[#0a0c12] transition-all duration-300 group-hover:scale-150 group-hover:bg-[#00f2fe] group-hover:shadow-[0_0_15px_#00f2fe]" />

                <div className="flex flex-col md:flex-row gap-6 md:gap-12">

                  {/* Left: Period */}
                  <div className="md:w-48 shrink-0">
                    <p className="text-xs font-bold tracking-widest uppercase text-[#00f2fe] mb-1">{exp.period}</p>
                    <span className="text-xs font-bold text-white/50 px-2.5 py-1 rounded border border-white/10 bg-white/5">{exp.type}</span>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-[#00f2fe] font-bold text-sm tracking-wide mb-4">{exp.company}</p>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium">{exp.description}</p>
                    <ul className="flex flex-col gap-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-white/50 flex items-start gap-2 group-hover:text-white/80 transition-colors duration-300">
                          <span className="text-[#00f2fe] shrink-0 mt-0.5">✦</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

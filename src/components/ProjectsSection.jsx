import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import designImg1 from '../assets/service/left.png';
import designImg2 from '../assets/service/right.png';
import designImg3 from '../assets/about/about.jpg';

import project1Img from '../assets/project/milk shake.png';
import project2Img from '../assets/project/Fooderordering.png';
import project3Img from '../assets/project/image.png';
import project4Img from '../assets/project/image copy.png';
import project5Img from '../assets/project/image copy 2.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    title: 'The 3D Nexus',
    category: 'Immersive Three.js Portfolio Experience',
    description: 'An interactive 3D portfolio experience engineered with Three.js, React Three Fiber (R3F), custom shaders, dynamic lighting, and GSAP camera transitions.',
    tags: ['React', 'Three.js', 'R3F', 'GSAP', 'TypeScript'],
    year: '2026',
    color: '#5eead4',
    img: 'https://raw.githubusercontent.com/Hxni786/3d-portfolio-main/main/public/images/preview.png',
    link: 'https://hxnix-gold.vercel.app/',
    githubLink: 'https://github.com/Hxni786/3d-portfolio-main',
  },
  {
    id: '02',
    title: 'Editorial Excellence',
    category: 'Full-Stack Boutique E-commerce Platform',
    description: 'A boutique full-stack e-commerce solution built with React, Node.js, Express, and MySQL. Features dynamic inventory catalogs, shopping cart, and Tailwind styling.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind'],
    year: '2025',
    color: '#a78bfa',
    img: 'https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/screenshot_home.png',
    githubLink: 'https://github.com/Hxni786/Hxni-Ecommerce-Store',
  },
  {
    id: '03',
    title: 'Bespoke E-store 2.0',
    category: 'Luxury Minimalist Mobile Commerce',
    description: 'Luxury mobile e-commerce platform built with React Native and Expo. Emphasizes clean typography, fluid transitions, and seamless REST API integration.',
    tags: ['React Native', 'Expo', 'Node.js', 'REST API'],
    year: '2025',
    color: '#f472b6',
    img: 'https://raw.githubusercontent.com/Hxni786/E-store2/main/docs/ui-preview.png',
    githubLink: 'https://github.com/Hxni786/E-store2',
  },
  {
    id: '04',
    title: 'TicketVerse',
    category: 'Premium Full-Stack Event Booking',
    description: 'End-to-end mobile event booking system featuring interactive seat reservation maps, ticket generation, and backend management with Node.js & MySQL.',
    tags: ['React Native', 'Node.js', 'Express', 'MySQL'],
    year: '2025',
    color: '#fbbf24',
    img: 'https://raw.githubusercontent.com/Hxni786/Ticket-Booking-App/main/mobile/assets/promo1.png',
    githubLink: 'https://github.com/Hxni786/Ticket-Booking-App',
  },
  {
    id: '05',
    title: 'NIXH Social',
    category: 'Enterprise Multi-User Social Engine',
    description: 'Scalable mobile community app powered by React Native and Firebase. Includes live social feeds, user profiles, instant messaging, and multimedia uploads.',
    tags: ['React Native', 'Firebase', 'Node.js', 'REST API'],
    year: '2025',
    color: '#34d399',
    img: 'https://raw.githubusercontent.com/Hxni786/Nixh-A-social-Media-App/main/docs/assets/mobile_mockup.png',
    githubLink: 'https://github.com/Hxni786/Nixh-A-social-Media-App',
  },
  {
    id: '06',
    title: 'hxni Express',
    category: 'Cinematic Parallax Food Delivery',
    description: 'Food ordering and tracking mobile application crafted with React Native, Expo, and GSAP parallax scroll effects for an engaging customer experience.',
    tags: ['React Native', 'Expo', 'GSAP', 'Parallax'],
    year: '2025',
    color: '#fb923c',
    img: 'https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/hxni_express_mockup.png',
    githubLink: 'https://github.com/Hxni786/A-food-Delivery-App-hxni-express',
  },
  {
    id: '07',
    title: 'Spice with Hassan',
    category: 'Restaurant & Table Reservation App',
    description: 'Boutique restaurant management mobile app with menu browsing, online food ordering, and table booking workflows connected to a MySQL backend.',
    tags: ['React Native', 'Node.js', 'Express', 'MySQL'],
    year: '2025',
    color: '#ef4444',
    img: 'https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/spice_hassan_mockup.png',
    githubLink: 'https://github.com/Hxni786/-A-Restaurant-App-Spice-with-Hassan',
  },
  {
    id: '08',
    title: 'Hxni Finance',
    category: 'Personal Asset & Expense Management',
    description: 'Advanced mobile finance and expense tracker featuring real-time financial analytics, Chart.js visual breakdowns, and secure transaction history.',
    tags: ['React Native', 'Node.js', 'MySQL', 'Chart.js'],
    year: '2025',
    color: '#a3e635',
    img: 'https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/hxni_finance_mockup.png',
    githubLink: 'https://github.com/Hxni786/Expense-Tracker',
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x: y * -10, y: x * 10 });
  };

  return (
    <div
      ref={cardRef}
      className="project-card group cursor-pointer"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
    >
      <div
        className="relative w-full rounded-3xl border overflow-hidden transition-all duration-300 bg-[#0f131c]/90 backdrop-blur-xl"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          border: hovered ? `1px solid ${project.color}70` : '1px solid rgba(255,255,255,0.1)',
          boxShadow: hovered
            ? `0 30px 80px rgba(0,0,0,0.8), 0 0 30px ${project.color}25`
            : '0 8px 32px rgba(0,0,0,0.5)',
        }}
      >
        {/* Project image preview */}
        <div className="w-full h-44 md:h-60 overflow-hidden relative bg-[#141824]">
          <img
            src={project.img}
            alt={project.title}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
            className="w-full h-full object-cover object-top transition-transform duration-700 opacity-90 group-hover:opacity-100"
            style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f131c]/30 to-[#0f131c] pointer-events-none" />
          <span
            className="absolute top-4 right-4 text-xs font-black px-3 py-1 rounded-full text-white shadow-md backdrop-blur-md"
            style={{ background: `${project.color}cc`, border: `1px solid ${project.color}` }}
          >
            {project.year}
          </span>
        </div>

        {/* Content */}
        <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
          {/* Number */}
          <div className="shrink-0">
            <span
              className="text-6xl md:text-7xl font-black leading-none select-none transition-all duration-300"
              style={{ color: hovered ? project.color : 'rgba(255,255,255,0.06)', WebkitTextStroke: hovered ? '0px' : `1px ${project.color}50` }}
            >
              {project.id}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border" style={{ color: project.color, borderColor: `${project.color}50`, background: `${project.color}15` }}>
                {project.category}
              </span>
              <span className="text-xs font-bold text-white/40">{project.year}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none group-hover:text-[#00f2fe] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-bold text-white/50 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            {(project.link || project.githubLink || project.figmaLink || project.behanceLink) && (
              <div className="flex flex-wrap gap-3 mt-4">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f2fe]/40 bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 text-[#00f2fe] transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.1)]">
                    <span className="text-xs font-bold text-[#00f2fe]">Live Demo</span>
                    <svg className="w-3.5 h-3.5 text-[#00f2fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 transition-colors duration-300">
                    <svg className="w-4 h-4 fill-current text-white/80" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span className="text-xs font-bold text-white/80">GitHub</span>
                  </a>
                )}
                {project.figmaLink && (
                  <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 transition-colors duration-300">
                    <span className="text-xs font-bold text-white/80">Figma</span>
                  </a>
                )}
                {project.behanceLink && (
                  <a href={project.behanceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-[#00f2fe] transition-colors duration-300">
                    <span className="text-xs font-bold text-[#00f2fe]">Behance</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Arrow */}
          <div className="shrink-0 self-center">
            <div
              className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300"
              style={{
                borderColor: hovered ? project.color : 'rgba(255,255,255,0.15)',
                background: hovered ? project.color : 'transparent',
                transform: hovered ? 'rotate(-45deg)' : 'rotate(0deg)',
              }}
            >
              <svg className={`w-5 h-5 transition-colors duration-300 ${hovered ? 'text-black' : 'text-white/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.projects-title', {
      y: 80, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.projects-title', start: 'top 85%' }
    });
    gsap.from('.project-card', {
      y: 100, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.project-card', start: 'top 90%' }
    });
  }, { scope: sectionRef });

  return (
    <section id="projects-section" ref={sectionRef} className="relative bg-[#08090d] text-white w-screen min-h-screen py-20 md:py-32 font-inter overflow-hidden flex flex-col justify-center">

      {/* Dark tech grid */}
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="projects-title mb-16 md:mb-24">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#00f2fe] mb-4">Selected Work</p>
          <h2 className="text-[15vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter text-white">
            Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

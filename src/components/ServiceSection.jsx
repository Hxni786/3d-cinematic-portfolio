import React, { useRef, useState } from 'react';
import leftImg from '../assets/service/left.png';
import rightImg from '../assets/service/right.png';

const services = [
  {
    id: 1,
    title: 'Creative Frontend',
    features: [
      'Interactive & animative web experiences',
      'React, GSAP & Framer Motion integration',
      'Responsive, pixel-perfect modern design',
      'High-performance UI & Tailwind CSS styling',
      'Smooth scroll & micro-interactions'
    ]
  },
  {
    id: 2,
    title: 'Full Stack & Mobile',
    features: [
      'Cross-platform React Native & Expo apps',
      'Backend with Node.js, Express & REST APIs',
      'Database design with MySQL & Firebase',
      'Authentication, state management & scaling',
      'End-to-end web & mobile applications'
    ]
  },
  {
    id: 3,
    title: '3D Web Experiences',
    features: [
      'Three.js & React Three Fiber (R3F)',
      'Interactive 3D models & canvas scenes',
      'Custom shaders & lighting effects',
      'Scroll-driven 3D camera animations',
      'Optimized WebGL rendering pipeline'
    ]
  },
  {
    id: 4,
    title: 'UI/UX & Architecture',
    features: [
      'Design systems & component architecture',
      'Wireframing & user journey flows',
      'Clean, maintainable, modular codebase',
      'Performance profiling & SEO optimization',
      'Rapid interactive prototyping'
    ]
  }
];

const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15; // Max 15deg rotation
    const rotateY = ((x - centerX) / centerX) * 15;  // Max 15deg rotation
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full h-full transition-transform duration-200 ease-out transform-gpu"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </div>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <section id="services-section" className="relative bg-[#08090d] text-white w-full min-h-screen py-16 md:py-32 font-inter overflow-hidden">

      {/* SERVICES Section Header */}
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 mb-16 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#00f2fe] mb-4">Specialization &amp; Expertise</p>
          <h2 className="text-[15vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter text-white select-none whitespace-nowrap drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
            SERVICES
          </h2>
        </div>
        <p className="text-white/60 text-sm md:text-base max-w-xs font-medium leading-relaxed">
          Crafting cutting-edge 3D web applications, full-stack architectures, and high-performance mobile experiences.
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative w-full flex flex-col gap-16 md:gap-40 mt-10 z-0">

        {services.map((service, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={service.id}
              className={`service-row relative w-full flex items-center justify-between z-[999]`}
            >

              {/* Card Container - Constrained */}
              <div className={`w-full max-w-screen-xl mx-auto px-6 md:px-12 flex ${isLeft ? 'justify-start' : 'justify-end'} relative z-[999]`}>
                <TiltCard className="service-card w-[90%] sm:w-[85%] md:w-[45%] lg:w-[40%] max-w-[500px]">
                  <div className="w-full bg-[#0f131c]/90 backdrop-blur-xl p-6 md:p-8 lg:p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] border border-white/10 flex flex-col gap-4 relative overflow-hidden group transition-all duration-500 hover:border-[#00f2fe]/50 hover:shadow-[0_0_50px_rgba(0,242,254,0.15)]">

                    {/* Subtle top card glow on hover */}
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#00f2fe]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-[#00f2fe] font-black text-xl mb-1 tracking-widest">
                        0{service.id}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-3 text-white">
                        {service.title}
                      </h3>
                      <div className="w-10 h-1 bg-white/20 mb-5 transition-all duration-500 group-hover:w-20 group-hover:bg-[#00f2fe]"></div>
                      <ul className="flex flex-col gap-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-xs md:text-sm font-bold text-white/60 leading-relaxed flex items-start group-hover:text-white/90 transition-colors duration-300">
                            <span className="text-[#00f2fe] mr-2 mt-[2px] shrink-0 text-[10px]">✦</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Opposite Image Container - Flush to viewport edge */}
              <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${isLeft ? 'right-0' : 'left-0'} w-[45vw] lg:w-[40vw] h-full pointer-events-none -z-10 ${isLeft ? 'justify-end' : 'justify-start'} items-center opacity-40 mix-blend-screen`}>
                <img
                  src={isLeft ? rightImg : leftImg}
                  alt="Service Illustration"
                  className={`service-image w-full h-auto max-h-[80vh] object-contain ${isLeft ? 'object-right' : 'object-left'}`}
                />
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default ServiceSection;

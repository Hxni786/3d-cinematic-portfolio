import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import aboutImg from '../assets/about/about.jpg';
import kapkapImg from '../assets/about/kapkap_20260616220228690_sys.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Initial states
    gsap.set('.about-text', { y: -100, opacity: 0 });
    gsap.set('.me-text', { y: 100, opacity: 0 });
    gsap.set('.about-line', { scaleY: 0, transformOrigin: 'top' });
    gsap.set('.me-line', { scaleY: 0, transformOrigin: 'bottom' });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 75%',
      onEnter: () => {
        const tl = gsap.timeline();
        
        tl.to('.about-text', { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' })
          .to('.me-text', { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }, '<')
          .to('.about-line', { scaleY: 1, duration: 1, ease: 'expo.inOut' }, '-=0.8')
          .to('.me-line', { scaleY: 1, duration: 1, ease: 'expo.inOut' }, '<');
      }
    });

    gsap.to('.about-word', {
      color: 'rgba(255, 255, 255, 0.95)',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.about-paragraph',
        start: 'top 85%',
        end: 'bottom 50%',
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about-section" className="bg-[#0a0c12] min-h-screen w-screen relative flex flex-col justify-center font-inter text-white px-6 py-10 md:px-12 md:py-14 overflow-hidden z-[50]">

      {/* Top Right Portrait Image — large and prominent */}
      <div className="absolute top-0 right-0 w-[55vw] md:w-[36vw] max-w-[500px] h-[40vh] md:h-[65vh] overflow-hidden z-0 opacity-80">
        <img
          src={aboutImg}
          alt="Syed Hassan Dildar Portrait"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'contrast(1.1) grayscale(0.2)' }}
        />
        {/* Fade into page on the left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c12] via-[#0a0c12]/40 to-transparent pointer-events-none" />
        {/* Fade into page on the bottom edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c12] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Typography */}
      <div className="flex-1 flex flex-col justify-center relative w-full max-w-screen-xl mx-auto z-10">

        <div className="relative z-[50] flex flex-col">

          <div className="w-full flex items-end mt-4 md:mt-0">
            <h1 className="about-text text-[clamp(65px,14vh,15vw)] font-black leading-[0.8] tracking-[-0.06em] m-0 ml-[-1vw] relative text-white">
              about
              {/* vertical line */}
              <div className="about-line absolute bottom-[74%] left-[56.5%] w-[2px] bg-[#00f2fe]/40 h-[100vh] z-[-1] hidden md:block" />
            </h1>
          </div>

          <div className="w-full flex items-center mt-1 md:mt-2">
            <h1 className="me-text text-[clamp(65px,14vh,15vw)] font-black leading-[0.8] tracking-[-0.06em] m-0 relative ml-[-1vw] text-white z-10">
              me.
              <div className="me-line absolute top-[75%] left-[25.5%] md:left-[23.5%] w-[2px] bg-[#00f2fe]/40 h-[100vh] z-[-1] hidden md:block" />
            </h1>
          </div>

          {/* Bottom Content Area */}
          <div className="mt-4 md:mt-6 max-w-2xl pl-0 sm:pl-[8%] md:pl-[18%] relative z-10 pb-8 md:pb-4">

            {/* Tag chips */}
            <div className="flex flex-wrap gap-2 mb-3">
              {['Full Stack', 'React & React Native', 'Three.js / GSAP', 'Web & App Dev'].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#00f2fe]/30 text-[#00f2fe] bg-[#00f2fe]/10">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-[clamp(20px,3.5vw,2.2rem)] font-black tracking-tight mb-2.5 leading-none whitespace-nowrap text-white">
              nice to meet you!
            </h2>
            <p className="about-paragraph text-xs sm:text-sm md:text-[13px] lg:text-[14px] font-bold leading-relaxed tracking-tight max-w-xl text-left">
              {"I'm Syed Hassan Dildar — a creative Full Stack Developer and React Designer passionate about building interactive, 3D, and visually engaging web & mobile experiences. I specialize in turning complex ideas into dynamic, user-friendly applications that leave a lasting impression. With a strong focus on modern design, smooth GSAP & Three.js animations, and clean architecture, I strive to create interfaces that are both functional and aesthetic.".split(' ').map((word, index) => (
                <span key={index} className="about-word text-white/30">
                  {word}{' '}
                </span>
              ))}
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mt-4">
              {[['10+', 'Projects'], ['3+', 'Years Coding'], ['100%', 'Dedication']].map(([num, label]) => (
                <div key={label}>
                  <p className="text-xl md:text-2xl font-black text-[#00f2fe] leading-none">{num}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Signature */}
      <div className="absolute bottom-4 md:bottom-6 right-6 md:right-12 text-xl md:text-3xl font-black tracking-tighter shrink-0 z-20 bg-[#0a0c12]/90 border border-white/10 text-white backdrop-blur-sm px-3 py-1 rounded-lg">
        ~ Hxni
      </div>

      {/* Bottom Right Decoration */}
      <img src={kapkapImg} alt="Decoration" className="absolute bottom-0 right-0 w-36 md:w-52 lg:w-64 object-contain pointer-events-none z-10 opacity-30 mix-blend-screen" />

    </section>
  );
};

export default AboutSection;

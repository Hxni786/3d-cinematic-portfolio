import React from 'react';

const navLinks = ['Projects', 'Experience', 'Services', 'Contact'];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Hxni786' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/syed-hassan-dildar-b40649400' },
  { name: 'Instagram', url: 'https://www.instagram.com/the.cipher.stack' }
];

const Footer = () => {
  return (
    <footer className="relative bg-[#06070a] text-white font-inter overflow-hidden border-t border-white/5 w-screen min-h-screen flex flex-col justify-center">

      {/* Big Name watermark */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none overflow-hidden">
        <p className="text-[20vw] md:text-[18vw] font-black uppercase tracking-tighter leading-none text-white/[0.025] whitespace-nowrap translate-y-[20%] md:translate-y-[20%]">
          Hassan
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 md:mb-20">

          {/* Name & tagline */}
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#00f2fe] mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white mb-4">
              Syed Hassan Dildar
            </h2>
            <p className="text-white/60 text-sm md:text-base font-medium max-w-md leading-relaxed">
              Full Stack &amp; Mobile Developer crafting interactive, 3D and high-performance digital experiences.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:msgoat550@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00f2fe] text-black font-black uppercase tracking-widest text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,242,254,0.4)] active:scale-95 w-fit cursor-pointer"
            >
              Start a Project
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-white/40 text-xs font-medium">
              Available for full stack &amp; mobile projects · 2026
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 md:mb-16" />

        {/* Nav Links */}
        <div className="flex flex-wrap gap-6 mb-12">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}-section`}
              className="text-sm font-bold text-white/40 hover:text-[#00f2fe] transition-colors duration-200 uppercase tracking-widest"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-medium">
            © 2026 Syed Hassan Dildar. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white/50 hover:text-[#00f2fe] transition-colors duration-200 uppercase tracking-widest">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

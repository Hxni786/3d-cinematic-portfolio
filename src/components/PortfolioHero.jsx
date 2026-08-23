import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import flowerImg from '../assets/Flower/image-1.png';

const PortfolioHero = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut', duration: 1.5, delay: 0.5 } });

    // Expand the frame to full screen width/height by animating padding to 0
    tl.to(containerRef.current, {
      padding: 0,
    });

    // Rotate the corner flowers clockwise
    tl.to('.flower-img', {
      rotation: "+=180", // 2D clockwise spin
      scale: 1.1,
    }, "<");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#08090d] h-screen w-screen p-8 md:p-16 lg:p-24 flex font-inter text-white overflow-hidden">
      {/* Square shape margin / Frame */}
      <div className="flex-1 border-[2px] border-[#00f2fe]/30 rounded-sm flex flex-col relative overflow-hidden bg-[#0c0e14] shadow-2xl">
        
        {/* Top Left Flower */}
        <img src={flowerImg} alt="Flower decoration" className="flower-img absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 lg:w-80 object-contain pointer-events-none z-20 opacity-40 mix-blend-screen" />
        
        {/* Top Right Flower (Mirrored) */}
        <img src={flowerImg} alt="Flower decoration" className="flower-img absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 scale-x-[-1] w-48 md:w-64 lg:w-80 object-contain pointer-events-none z-20 opacity-40 mix-blend-screen" />
        
        {/* Bottom Left Flower (Flipped vertically) */}
        <img src={flowerImg} alt="Flower decoration" className="flower-img absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 scale-y-[-1] w-48 md:w-64 lg:w-80 object-contain pointer-events-none z-20 opacity-40 mix-blend-screen" />
        
        {/* Bottom Right Flower (Flipped both ways) */}
        <img src={flowerImg} alt="Flower decoration" className="flower-img absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-180 w-48 md:w-64 lg:w-80 object-contain pointer-events-none z-20 opacity-40 mix-blend-screen" />
        
        {/* Content Area */}
        <div className="flex-1 flex flex-col relative p-8 md:p-16 z-10">
          <div className="flex-1 flex justify-center items-center relative">
            <h1 className="text-[20vw] md:text-[18vw] font-black tracking-[-0.05em] m-0 leading-none text-white lowercase select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              portfolio
            </h1>
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[5deg] font-cursive text-[16vw] md:text-[10vw] text-[#00f2fe] m-0 whitespace-nowrap select-none drop-shadow-[0_0_20px_rgba(0,242,254,0.5)]">
              Hxni
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;

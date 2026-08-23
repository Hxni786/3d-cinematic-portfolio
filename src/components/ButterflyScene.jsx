import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Float } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import the GLB model so Vite includes it in the build pipeline
import butterflyUrl from '../assets/3d butterfly/ulysses_butterfly.glb';

gsap.registerPlugin(ScrollTrigger);

const ButterflyScene = () => {
  const group = useRef();
  const { scene, animations } = useGLTF(butterflyUrl);
  const { actions } = useAnimations(animations, group);

  // Play embedded animations if available
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      // Play the first animation (usually the flying/flapping cycle)
      const actionName = Object.keys(actions)[0];
      actions[actionName].play();
    }
  }, [actions]);

  useEffect(() => {
    if (!group.current) return;

    // Wait for the DOM elements to render before attaching scroll triggers
    const timeout = setTimeout(() => {
      // Create a master GSAP timeline for the butterfly linked to scroll
      const tl = gsap.timeline();

      // 1. Hero -> About
      // Butterfly flies to center-top area.
      gsap.to(group.current.position, {
        x: 0,
        y: 2,
        z: -1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#about-section',
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
        }
      });
      gsap.to(group.current.rotation, {
        y: Math.PI / 4,
        x: -0.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#about-section',
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
        }
      });

      // 2. About -> Services
      // Fly to right side, then smoothly cross to left side
      const servicesTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#services-section',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
        }
      });
      // Move right as it enters
      servicesTl.to(group.current.position, { x: 3, y: 0, z: -2, ease: 'power1.inOut' })
        .to(group.current.rotation, { y: -Math.PI / 4, ease: 'power1.inOut' }, "<")
        // Cross to left while scrolling through
        servicesTl.to(group.current.position, { x: -3, y: -1, z: -3, ease: 'power1.inOut' })
        .to(group.current.rotation, { y: Math.PI / 2, x: 0.5, ease: 'power1.inOut' }, "<");

      // 3. Services -> Projects
      // Small circular rotation + hover, slow elegant
      const projectsTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#projects-section',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
        }
      });
      projectsTl.to(group.current.position, { x: 0, y: 1, z: -1, ease: 'power2.out' })
        .to(group.current.rotation, { y: Math.PI * 2.5, x: 0.2, z: 0.1, ease: 'power2.out' }, "<")
        .to(group.current.scale, { x: 1.2, y: 1.2, z: 1.2, ease: 'power1.inOut' }, "<");

      // 4. Projects -> Contact
      // Return Center, floating, elegant ending
      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#contact-section',
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
        }
      });
      contactTl.to(group.current.position, { x: 0, y: 0, z: 0, ease: 'power2.inOut' })
        .to(group.current.rotation, { y: Math.PI * 4, x: 0, z: 0, ease: 'power2.inOut' }, "<")
        .to(group.current.scale, { x: 1, y: 1, z: 1, ease: 'power1.inOut' }, "<");

    }, 500); // slight delay to ensure HTML is rendered

    return () => clearTimeout(timeout);
  }, []);

  // Idle organic floating motion
  useFrame((state) => {
    if (group.current) {
      const time = state.clock.getElapsedTime();
      // Add slight organic breathing/hovering motion
      group.current.position.y += Math.sin(time * 2) * 0.002;
      group.current.rotation.z += Math.cos(time * 1.5) * 0.001;
      group.current.rotation.x += Math.sin(time * 1.5) * 0.001;
    }
  });

  return (
    <Float
      speed={2} // Animation speed
      rotationIntensity={0.5} // XYZ rotation intensity
      floatIntensity={0.5} // Up/down float intensity
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={group} dispose={null} position={[0, 0, 0]} scale={[1, 1, 1]}>
        <primitive object={scene} />
      </group>
    </Float>
  );
};

// Preload the model for performance
useGLTF.preload(butterflyUrl);

export default ButterflyScene;

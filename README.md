<div align="center">

# 🦋 Cinematic 3D Portfolio — Syed Hassan Dildar (Hxni)

An award-grade, immersive 3D interactive portfolio built with **React 19**, **Three.js / React Three Fiber**, **GSAP ScrollTrigger**, and **Tailwind CSS**. Designed with an **Obsidian & Electric Cyan** high-tech cinematic aesthetic.

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r184-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

<br />

<img src="./src/assets/hero/hero.jpg" alt="Syed Hassan Dildar Hero Preview" width="300" style="border-radius: 16px; border: 1px solid rgba(0, 242, 254, 0.4); box-shadow: 0 20px 50px rgba(0, 242, 254, 0.2);" />

</div>

---

## ⚡ Overview

This portfolio serves as a showcase of modern creative frontend engineering and WebGL graphics programming. Built to deliver a seamless, high-framerate, cinematic storytelling experience with responsive layouts and interactive physics.

### ✨ Core Features

- 🦋 **3D Ulysses Butterfly Simulation**: Continuous wing-flap physics animated via `@react-three/fiber` and mapped to viewport scroll milestones via `GSAP ScrollTrigger`.
- 🪪 **Interactive 3D Lanyard & Badge**: Physics-driven cursor tracking, spring physics, and mouse-parallax drag feedback on the hero identity badge.
- 💧 **Liquid Fill Preloader**: Custom GSAP clip-path preloader with real-time asset hydration tracking.
- 🌌 **Obsidian & Electric Cyan Palette**: High-contrast, Awwwards-inspired dark tech theme engineered for deep contrast and visual focus.
- 📐 **True 3D Gyroscope / Tilt Cards**: Custom matrix transformation and specular light tracking on service & project showcases.
- 📜 **Typographic Scroll Reveals**: Character/word level scroll scrubber highlighting biography content in real time.
- 📱 **Adaptive Multi-Platform Responsiveness**: Built from ground up to adapt across 4K displays, ultrawides, laptops, tablets, and smartphones.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | `React 19` | Next-generation React engine with optimized concurrent rendering |
| **3D Graphics & Canvas** | `Three.js` + `@react-three/fiber` | WebGL canvas orchestration and GLTF scene rendering |
| **3D Ecosystem Helpers** | `@react-three/drei` | Dynamic camera rigging, contact shadows, environment lighting |
| **Animation Engine** | `GSAP 3.15` + `@gsap/react` | Timeline orchestration, smooth scrubbers, and ScrollTrigger bindings |
| **Styling & Design System**| `Tailwind CSS v4` | Modern utility-first stylesheet engine with custom CSS properties |
| **Build & Tooling** | `Vite 8` | Ultra-fast HMR and ESM bundling |

---

## 📂 Project Architecture

```plaintext
new_project-main/
├── public/                     # Static publicly hosted assets
├── src/
│   ├── assets/
│   │   ├── 3d butterfly/       # Ulysses 3D GLTF/GLB models
│   │   ├── hero/               # Hero section images & badges
│   │   ├── about/              # Profile portraits & textures
│   │   └── service/            # Architectural illustrations
│   ├── components/
│   │   ├── Preloader.jsx       # Custom fluid load screen
│   │   ├── Navbar.jsx          # Glassmorphic reactive navigation
│   │   ├── HeroSection.jsx     # Interactive lanyard badge & typography
│   │   ├── ButterflyScene.jsx  # 3D canvas lifecycle & scroll trajectory
│   │   ├── AboutSection.jsx    # Kinetic bio with word reveal
│   │   ├── ServiceSection.jsx  # 3D tilt specialization cards
│   │   ├── ExperienceSection.jsx # Journey, timeline & education
│   │   ├── ProjectsSection.jsx # Selected work portfolio cards
│   │   ├── ContactSection.jsx  # Inquiry form & direct social handles
│   │   └── Footer.jsx          # Watermarked footer & navigation index
│   ├── App.jsx                 # Root composition & 3D light environment
│   ├── App.css                 # Application scoped style overrides
│   ├── index.css               # Tailwind CSS imports & theme definitions
│   └── main.jsx                # Application DOM entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hxni786/butterfly-portfolio.git
   cd butterfly-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 👨‍💻 Author & Credits

Designed and developed with passion by **Syed Hassan Dildar (Hxni)**.

- 🌐 **Portfolio**: [hxnix-gold.vercel.app](https://hxnix-gold.vercel.app/)
- 🐙 **GitHub**: [@Hxni786](https://github.com/Hxni786)
- 💼 **LinkedIn**: [Syed Hassan Dildar](https://www.linkedin.com/in/syed-hassan-dildar-b40649400)
- 📸 **Instagram**: [@the.cipher.stack](https://www.instagram.com/the.cipher.stack)
- 📧 **Email**: [msgoat550@gmail.com](mailto:msgoat550@gmail.com)

---

## 📄 License

This project is licensed under the MIT License — feel free to explore, customize, and use it as inspiration for your own creative development endeavors!

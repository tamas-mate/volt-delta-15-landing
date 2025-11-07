# Volt Delta 15 - 3D Landing

![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/-React-58C4DC?style=for-the-badge&logo=React&logoColor=white)
![Three.js](https://img.shields.io/badge/-Three.js-27136A?style=for-the-badge&logo=three.js&logoColor=white)

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)

## Introduction

Concept landing page for **Volt Labs - Delta 15**, a fictional performance laptop.  
Built with **React**, **Three.js**, **GSAP**, and **Tailwind CSS**, it showcases a scroll-driven 3D scene, video-texture swaps, pinned sections, and polished text/image transitions. Fully responsive and tuned for smooth interaction on desktop and mobile.

Open to feedback and PRs issues welcome if you spot bugs or have ideas.

## Tech Stack

- **[GSAP](https://gsap.com/)** - powerful JavaScript animation library, drives all scroll-based motion via **ScrollTrigger** (pinned sections, scrubbed timelines, video sync) plus text reveals and image masking transitions.

- **[Vercel](https://vercel.com/)** - web hosting platform used to deploy and manage the live website. One-click deploys, previews, and HTTPS out of the box.

- **[React](https://react.dev/)** - declarative JavaScript library for building interactive UIs. Component driven UI with clean state/props flow and animation hooks.

- **[Tailwind CSS](https://tailwindcss.com/)** - utility-first styling for fast iteration and consistent responsive design.

- **[Three.js](https://threejs.org/)** - JavaScript 3D library used to render interactive 3D graphics in the browser. Real-time 3D rendering for the product scene (lights, materials, environment maps, model controls).

- **[Vite](https://vitejs.dev/)** - instant HMR during dev and optimized production builds.

- **[Zustand](https://zustand-demo.pmnd.rs/)** - lightweight global state where needed (view mode, color/variant, UI toggles).

## Features

- **3D Product Scene with Studio Lighting** — lifelike materials, reflections, and highlights.
- **Scroll-animated Model** — camera/object motion synced to scroll for a narrative feel.
- **ScrollTrigger Timelines** — pinned sections, cross-fades, and scrubbed sequences.
- **Image/Logo Masking** — crisp mask transitions over video or imagery.
- **Responsive Layout** — adaptive components and animation thresholds for all breakpoints.
- **Clean Project Structure** — reusable hooks/components and clear animation organization.

…and more to explore in the source.

## Quick Start

Follow these steps to run the project locally.

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/) (performant npm)

### Cloning the Repository

```bash
git clone https://github.com/tamas-mate/volt-delta-15-landing.git
cd volt-delta-15-landing
```

### Installation

Install the project dependencies using pnpm:

```bash
pnpm install
```

### Running the Project

```bash
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

### Note on branding and asset use disclaimer

Volt Labs and Delta 15 are fictional. All assets in this project are third-party placeholders used solely for learning/demonstration purposes (non-commercial).  
If you are a rights holder and would like credit added or an image removed, please contact me at **<tamasmate.dev@gmail.com>** and I’ll address it promptly.  
_No endorsement implied._

### Attribution

“Gaming Laptop” (<https://skfb.ly/6SuwL>) by **Vivien Deroche** is licensed under **CC BY 4.0**  
<https://creativecommons.org/licenses/by/4.0/>

**Changes made:** material colors adjusted; Alienware logo removed from the lid.  
No endorsement implied.

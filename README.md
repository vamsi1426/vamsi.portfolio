# 🌳 Dasari Vamsi — Nature-Inspired Interactive Portfolio

[![React](https://img.shields.io/badge/Frontend-React%20v19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Build Tool](https://img.shields.io/badge/Build%20Tool-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Framer Motion](https://img.shields.io/badge/Animations-Framer%20Motion-FF00FE?style=for-the-badge&logo=framer&logoColor=white)](https://framer.com/motion)

Welcome to my interactive portfolio website. This platform acts as a digital sanctuary showcasing my engineering journey, technical competencies, and active academic and full-stack projects. 

---

## 🎨 The Nature-Inspired Cinematic Theme

The website is designed with a cohesive **Serene Mango Tree Orchard** theme, prioritizing high-fidelity visual aesthetics and Apple-level user experiences (UX). Key thematic elements include:

*   🌱 **Sprout Grow Loading Screen (`LoadingScreen.jsx`)**: A seed-growing loader representing ideas taking root. The brown seed cracks open at 50% compilation, grows a springy green path, and blooms into a beautiful sprout with leaf nodes perfectly anchored to the stem.
*   🍃 **Interactive HTML5 Canvas Physics (`BackgroundCanvas.jsx`)**: A custom physics-based background engine that spawns floating forest leaves and ambient dust particles. Leaves float dynamically in a gentle breeze and displace realistically based on cursor hover vectors and wind gusts.
*   🌾 **Concentric Concentric Golden Rings (`Hero.jsx`)**: Elegant orbiting metallic gold rings framing the central portrait capsule in the Hero section, symbolizing growth, structure, and intelligence.
*   🥭 **The Mango Harvest (`Projects.jsx`)**: Project cards present accomplishments as sun-ripened organic mangoes hanging from a horizontal branch. Hovering over a card initiates an elastic pendulum swinging physics animation.
*   🔗 **Connected Vine Trellis (Masonry Column Flexbox)**: Project cards are organized into 3 columns on desktop, 2 on tablet, and 1 on mobile. Cards stack tightly vertically; lower cards are pulled directly upward beneath the upper cards with a tight `gap-12` (48px) spacing, allowing hanging card ropes to touch and anchor perfectly onto the bottoms of the cards above like connected vines.
*   🌸 **Golden Hour Shift (`Contact.jsx` / Forms)**: The portfolio shifts into a warm sunset color palette at the contact form, featuring minimalist glassmorphic input fields with golden peach glowing borders.



## 🛠️ Technology Stack & Architecture

*   **Frontend Library**: React.js (v19)
*   **Build Tooling**: Vite
*   **Style Framework**: Tailwind CSS (v4 utilizing `@tailwindcss/vite` plugin)
*   **Motion Layer**: Framer Motion (v12)
*   **Vector Styling**: Lucide React
*   **Hosting Assets**: Direct professional **PDF Resume download** `/Resume.pdf` served dynamically from the `public/` asset root.

---

## 📂 Project Structure

```text
public/
├── Resume.pdf               # Active high-fidelity PDF resume
src/
├── assets/                  # High-DPI avatars and favicon assets
├── components/              # Modular UI elements
│   ├── UI/                  # Modal and card components
│   ├── BackgroundCanvas.jsx # Interactive leaf physics engine
│   └── FloatingMenu.jsx     # Navigation menu and PDF resume trigger
├── sections/                # Main section pages
│   ├── LoadingScreen.jsx    # Sprout grow load visualizer
│   ├── Hero.jsx             # Golden rings parallax presentation
│   ├── About.jsx            # Core personal description
│   ├── Skills.jsx           # Tab-based branching proficiency twigs
│   ├── Projects.jsx         # Staggered projects vine canopy
│   ├── Experience.jsx       # Chronic timeline trunks
│   └── Contact.jsx          # Golden-hour connection portal
├── utils/                   # Data layer
│   └── data.js              # Project arrays and educational details
├── App.jsx                  # Main orchestrator
└── index.css                # Base stylesheet with organic variables
```



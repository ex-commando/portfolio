# Francis Adegbe | Software Developer Portfolio

A minimalist, modern, and high-performance portfolio website built with React, Vite, and Framer Motion. This project showcases my skills, experience, and certifications with a premium dark "Tech" aesthetic.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-5.x-646cff.svg)

## 🌟 Features

*   **Dark "Cyber" Aesthetic**: Deep black themes (`#0a0a0a`) with neon cyan (`#00f0ff`) and violet (`#7000ff`) accents.
*   **Performance First**: Built on Vite for lightning-fast HMR and production builds.
*   **Smooth Animations**:
    *   Staggered text entrances.
    *   Scroll-triggered reveals (Fade-in + Slide-up) using `framer-motion`.
    *   Parallax effects in the Hero section.
*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
*   **Interactive Elements**:
    *   Glitch text effect on the main title.
    *   Hover effects on skills and certification cards.
    *   Custom gradient glows for depth.
*   **Contact Forms**: 
    *   Integrated with [FormSubmit.co](https://formsubmit.co) for zero-backend email delivery.
    *   Two modes: "Send Message" (Quick contact) and "Request a Quote" (Detailed project qualification).

## 📂 Sections

1.  **Hero**: Introduction with a professional photo, glitch title, and social links.
2.  **About**: Professional summary, education timeline, and a grid of technical skills.
3.  **Experience**: Vertical timeline of work history with role details.
4.  **Certifications**: Comprehensive grid of professional certifications with issuer and ID details.
5.  **Contact**: Advanced tabbed contact section with functional email forms.

## 🛠️ Tech Stack

*   **Frontend Library**: [React](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Styling**: Vanilla CSS with CSS Variables & Modern Layouts (Flexbox/Grid)
*   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
*   **Routing**: [React Router DOM](https://reactrouter.com/)

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm (v9 or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/ex-commando/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The app will look for an open port (default: `http://localhost:5173`).

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be generated in the `dist` directory. I have included a script to preview the production build locally:

```bash
npm run preview
```

## 🎨 Customization

### Updating Content
All personal data is structured in `src/data/resume.js`. Edit this file to update:
*   Summary
*   Education
*   Skills
*   Experience
*   Certifications

### Theming
Global variables are defined in `src/index.css`. You can adjust the color palette by modifying these variables:

```css
:root {
  --color-bg: #0a0a0a;       /* Background */
  --color-text: #e0e0e0;     /* Main Text */
  --color-accent: #00f0ff;   /* Primary Accent (Cyan) */
  --color-secondary: #7000ff;/* Secondary Accent (Violet) */
}
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Developed by Francis Adegbe**

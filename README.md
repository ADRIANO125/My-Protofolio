<div align="center">

# 🕷️ Venom Portfolio

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=28&pause=1000&color=00FF00&center=true&vCenter=true&random=false&width=600&lines=Welcome+to+My+Portfolio!;Front-End+Developer;React+%7C+Vite+%7C+Tailwind+CSS;Modern+Web+Development" alt="Typing SVG" />

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://venom-portfolio.netlify.app/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

### 🌐 [Live Demo](https://venom-portfolio.netlify.app/) | 📂 [Repository](https://github.com/ADRIANO125/My-Protofolio)

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="700">

</div>

---

## 🎯 About The Project

**Venom Portfolio** is a modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. Featuring a sleek design with smooth animations and an intuitive user interface, this portfolio showcases projects, skills, and professional experience in an engaging way.

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif" width="600">
</div>

---

## 🚀 Key Features

<div align="center">

| Feature | Description |
|---------|-------------|
| ⚡ **Lightning Fast** | Built with Vite for optimal performance and instant HMR |
| 📱 **Fully Responsive** | Perfect experience across all devices and screen sizes |
| 🎨 **Tailwind CSS** | Utility-first CSS framework for rapid UI development |
| 🎭 **Modern UI/UX** | Clean, professional design with smooth animations |
| 🔧 **Easy Customization** | Well-structured code for easy modifications |
| 🌐 **SEO Optimized** | Built with best practices for search engine visibility |
| 💫 **Interactive Elements** | Engaging animations and transitions |
| 🌙 **Dark Theme** | Eye-friendly dark mode design |

</div>

---

## 🛠️ Built With

<div align="center">

<img src="https://skillicons.dev/icons?i=react,vite,tailwind,javascript,html,css,netlify,git,github" alt="Tech Stack" />

</div>

- **[React](https://reactjs.org/)** - UI Library
- **[Vite](https://vitejs.dev/)** - Build Tool & Dev Server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-First CSS Framework
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - Programming Language
- **[Netlify](https://www.netlify.com/)** - Deployment & Hosting

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="100">
</div>

---

## 📦 Installation & Setup

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 🔧 Local Development

```bash
# Clone the repository
git clone https://github.com/ADRIANO125/My-Protofolio.git

# Navigate to project directory
cd My-Protofolio

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev

# Open your browser and visit
# http://localhost:5173
```

### 🏗️ Build for Production

```bash
# Create production build
npm run build
# or
yarn build

# Preview production build locally
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

```
My-Protofolio/
├── 📂 public/              # Static assets
├── 📂 src/
│   ├── 📂 assets/          # Images, icons, fonts
│   ├── 📂 components/      # React components
│   ├── 📂 styles/          # CSS/styling files
│   ├── 📄 App.jsx          # Main App component
│   └── 📄 main.jsx         # Entry point
├── 📄 index.html           # HTML template
├── 📄 package.json         # Dependencies
├── 📄 vite.config.js       # Vite configuration
├── 📄 tailwind.config.js   # Tailwind configuration
├── 📄 postcss.config.js    # PostCSS configuration
└── 📄 README.md            # You are here!
```

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif" width="100">
</div>

---

## 🎨 Tailwind CSS Setup

### Installation

If you haven't installed Tailwind CSS yet, follow these steps:

```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS
npx tailwindcss init -p
```

### Configuration

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'venom-green': '#00ff00',
        'venom-dark': '#0a0a0a',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your custom styles here */
```

---

## 🎯 Customization Guide

### Personalize Your Portfolio

1. **Update Personal Info**: Edit content in `src/components/`
2. **Add Projects**: Modify project data in respective component files
3. **Customize Colors**: Update Tailwind config with your brand colors
4. **Add Images**: Place your images in `src/assets/`
5. **Modify Content**: Update text and information in component files

### Tailwind Color Scheme

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#00ff00',
      secondary: '#0a0a0a',
      accent: '#ffffff',
      // Add your custom colors
    },
  },
}
```

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257465-7ce8d493-cac5-494e-982a-5a9deb852c4b.gif" width="100">
</div>

---

## 🚢 Deployment

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ADRIANO125/My-Protofolio)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Deploy! 🎉

### Environment Variables

No environment variables needed for basic setup!

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385dfa7ed2.gif" width="100">
</div>

---

## 💡 Useful Tailwind Classes

```jsx
// Example Component
<div className="bg-gradient-to-r from-green-400 to-blue-500 
                rounded-lg shadow-xl p-6 
                hover:scale-105 transition-transform duration-300
                animate-fade-in">
  <h2 className="text-3xl font-bold text-white mb-4">
    Hello World!
  </h2>
</div>
```

---

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif" width="100">
</div>

---

## 📝 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 📬 Contact

<div align="center">

**ADRIANO125**

[![GitHub](https://img.shields.io/badge/GitHub-ADRIANO125-181717?style=for-the-badge&logo=github)](https://github.com/ADRIANO125)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-00ff00?style=for-the-badge&logo=google-chrome&logoColor=white)](https://venom-portfolio.netlify.app/)

<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">

### 🌟 If you like this project, please give it a star!

</div>

---

<div align="center">

### 💚 Made with Love and Code

<img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png" width="200" />

**⭐ Star this repo if you found it helpful!**

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="700">

</div>

# Christian Portfolio

A modern, responsive, and animated portfolio built with **Vite**, **React**, **Framer Motion**, and **Tailwind CSS**. Features a sleek black and white design with smooth animations, mobile-first responsive layout, and seamless GitHub integration.

## ✨ Features

- **⚡ Lightning Fast**: Built with Vite for optimal performance
- **📱 Mobile First**: Fully responsive design optimized for all devices
- **✨ Smooth Animations**: Powered by Framer Motion for engaging interactions
- **🎨 Black & White Theme**: Elegant minimalist design
- **🔗 GitHub Integration**: Automatically fetches your profile picture from GitHub
- **📄 CV Integration**: Link to your CV document
- **🌐 Responsive Navigation**: Adaptive navigation with mobile menu
- **📊 Skills Section**: Display your technical skills with progress indicators
- **📧 Contact Form**: Functional contact form for inquiries
- **♿ Accessible**: Built with accessibility in mind

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Header and navigation with GitHub profile
│   │   ├── Hero.jsx            # Hero section with introduction
│   │   ├── About.jsx           # About me section
│   │   ├── Projects.jsx        # Featured projects showcase
│   │   ├── Skills.jsx          # Technical skills and proficiencies
│   │   ├── Contact.jsx         # Contact form section
│   │   └── Footer.jsx          # Footer with social links
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App-specific styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Project dependencies
```

## 🎨 Customization

### Update Personal Information

Edit the relevant sections in each component:

- **Navigation.jsx**: GitHub username (line 15: change `d3vchrix`)
- **Hero.jsx**: Introduction text and profile picture fetch
- **About.jsx**: About me content and quick facts
- **Projects.jsx**: Add your projects in the `projects` array
- **Skills.jsx**: Update skills in `skillCategories` array
- **Contact.jsx**: Update email and social links
- **Footer.jsx**: Update copyright year and links

### Update CV Link

In `Contact.jsx`, update the CV Google Drive link:
```jsx
href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
```

### Colors and Theme

Modify the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: '#000000',    // Black
  secondary: '#ffffff',  // White
}
```

### Animations

Adjust animation timing and effects in individual component files using Framer Motion properties.

## 🛠 Technologies Used

- **Vite** - Next generation frontend build tool
- **React 18** - UI library
- **TypeScript** - Type safety (can be added)
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

## 📊 Sections

### Navigation
- Responsive header with GitHub brand image
- Smooth scroll to sections
- Mobile hamburger menu
- GitHub profile link

### Hero
- Welcome message with gradient text
- Call-to-action buttons
- Social media links
- Animated scroll indicator

### About
- About me description
- Quick facts card
- Key highlights with bullet points

### Projects
- Project cards with descriptions
- Technology tags
- Hover effects and animations
- Link to GitHub for more projects

### Skills
- Categorized skills (Frontend, Backend, Tools)
- Skill badges with hover effects
- Proficiency indicators with animated progress bars

### Contact
- Contact information cards
- Contact form with validation
- Social media links
- CV download button

### Footer
- Quick navigation links
- Social media links
- Copyright information

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

1. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/your-repo-name/'
   })
   ```

2. Build and push to GitHub:
   ```bash
   npm run build
   git add dist
   git commit -m "Deploy"
   git push
   ```

## 🎯 Best Practices

### Mobile First Approach
The portfolio is built mobile-first with responsive breakpoints:
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: > 1024px (lg)

### Performance
- Lazy loading of images
- Optimized animations
- Code splitting with Vite
- Minified production builds

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## 🤝 Contributing

Feel free to fork this template and customize it for your own portfolio!

## 📝 License

This project is open source and available under the MIT License.

## 🔗 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GitHub API Documentation](https://docs.github.com/en/rest)

## 💡 Tips

- Keep the portfolio simple and focused
- Update projects regularly
- Optimize images for faster loading
- Test on multiple devices
- Monitor Core Web Vitals
- Keep animations subtle and purposeful
- Use meaningful colors that reflect your brand

## 🐛 Troubleshooting

### Port 5173 already in use
```bash
npm run dev -- --port 5174
```

### Node modules issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build -- --debug
```

## 📞 Support

For issues or questions, open an issue on GitHub or reach out through the contact form on the portfolio.

---

**Built with ❤️ using Vite + React**

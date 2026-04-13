# Portfolio Configuration Guide

## Getting Started

1. **Update GitHub Username**
   - Open `src/components/Navigation.jsx`
   - Find: `https://api.github.com/users/d3vchrix`
   - Replace `d3vchrix` with your GitHub username

2. **Update CV Link**
   - Open `src/components/Contact.jsx`
   - Find the CV download link
   - Replace with your own Google Drive or hosting link

3. **Customize Content**
   - Edit each component in `src/components/` to match your information
   - Update the `projects` array in `Projects.jsx` with your actual projects

## Color Theme

The portfolio uses a black and white theme configured in `tailwind.config.js`:
- **Primary**: Black (#000000)
- **Secondary**: White (#ffffff)
- **Accents**: Gray shades for hierarchy

### Customizing Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
    },
  },
}
```

## Responsive Design

The portfolio follows a mobile-first approach with Tailwind breakpoints:

- **Mobile (default)**: 0px and up
- **Small (sm)**: 640px and up
- **Medium (md)**: 768px and up
- **Large (lg)**: 1024px and up
- **Extra Large (xl)**: 1280px and up

### Using Responsive Classes

```jsx
// Mobile: 16px text, Tablet: 24px, Desktop: 36px
<h1 className="text-base sm:text-2xl md:text-4xl">Title</h1>
```

## Animations

The portfolio uses Framer Motion for smooth animations. Key animation concepts:

### Variants Pattern
```jsx
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.div variants={variants} initial="hidden" animate="visible">
  Content
</motion.div>
```

### Hover Effects
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Scroll Animations
```jsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
>
  Content
</motion.div>
```

## GitHub Profile Picture

The portfolio automatically fetches your GitHub profile picture using the GitHub API:

```jsx
fetch('https://api.github.com/users/d3vchrix')
  .then(res => res.json())
  .then(data => setProfileImage(data.avatar_url))
```

Your GitHub username must be set in multiple places in the code.

## Adding New Sections

1. Create a new file in `src/components/YourSection.jsx`
2. Import it in `src/App.jsx`
3. Add it to the JSX in the appropriate order
4. Add a navigation link pointing to it

Example:

```jsx
// src/components/Blog.jsx
import { motion } from 'framer-motion'

const Blog = () => {
  return (
    <section id="blog" className="py-20 md:py-32 bg-black text-white px-4 sm:px-6 lg:px-8">
      {/* Your content */}
    </section>
  )
}

export default Blog
```

## Form Configuration

The contact form is set up to:
1. Collect name, email, and message
2. Show success feedback on submission
3. Reset after 3 seconds

To implement actual email sending, integrate with services like:
- Formspree
- EmailJS
- Netlify Forms
- AWS Lambda

## Performance Tips

1. **Image Optimization**
   - Convert images to WebP format
   - Use optimized sizes for different devices
   - Lazy load images when possible

2. **Code Splitting**
   - Vite automatically handles this
   - Use dynamic imports for large components

3. **CSS Optimization**
   - Tailwind only includes used classes
   - PostCSS handles browser prefixes

4. **Animation Performance**
   - Use `will-change` CSS property
   - Limit simultaneous animations
   - Use `transform` and `opacity` for best performance

## Deployment Checklist

- [ ] Update all personal information
- [ ] Replace GitHub username across all files
- [ ] Update CV link
- [ ] Test on mobile devices
- [ ] Check all links work correctly
- [ ] Verify animations are smooth
- [ ] Optimize images
- [ ] Test form submission flow
- [ ] Run production build: `npm run build`
- [ ] Test build locally: `npm run preview`
- [ ] Deploy to hosting service

## Troubleshooting

### Images not loading
- Check image paths are correct
- Ensure images are in the `public/` folder
- Use absolute paths starting with `/`

### Animations stuttering
- Reduce animation complexity
- Use `transform` and `opacity` instead of repositioning
- Close unnecessary applications

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check for typos in component names

### Page not responsive
- Use browser dev tools to test different screen sizes
- Verify Tailwind classes are applied correctly
- Check media query breakpoints

## Directory Structure Explained

```
portfolio/
├── src/
│   ├── components/          # React components for each section
│   ├── App.jsx              # Main component skeleton
│   ├── main.jsx             # Vite entry point
│   └── index.css            # Global styles with Tailwind
├── public/                  # Static files (images, icons)
├── dist/                    # Production build (after npm run build)
├── index.html               # Main HTML file
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## Next Steps

1. Visit `http://localhost:5173/` to see your portfolio
2. Update all personal information in the components
3. Add your own projects to the Projects section
4. Deploy to your preferred hosting platform
5. Share your portfolio with potential employers and clients

---

For more help, refer to the README.md or component files for inline comments and examples.

# ⚡ Quick Start Guide

## 1️⃣ Installation (2 minutes)

```bash
# Make sure you're in the portfolio directory
cd d:\Projects\Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` to see your portfolio!

## 2️⃣ Customize Your Portfolio (10-15 minutes)

### Step 1: Update Your GitHub Info
Any component that fetches your profile picture uses:
```
https://api.github.com/users/d3vchrix
```

**Replace `d3vchrix` with your GitHub username:**
- `Navigation.jsx` - Line 15
- `Hero.jsx` - Line 48

### Step 2: Update About Section
Edit `src/components/About.jsx`:
- Update the description text
- Change quick facts to match your experience
- Modify the bullet points

### Step 3: Add Your Projects
Edit `src/components/Projects.jsx` - Replace the projects array:
```jsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yourusername/project',
  },
  // Add more projects...
]
```

### Step 4: Update Skills
Edit `src/components/Skills.jsx` - Update the skillCategories array:
```jsx
const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Vue.js', 'Tailwind CSS'],
  },
  // Add more categories...
]
```

### Step 5: Update Contact & Social Info
Edit `src/components/Contact.jsx`:
- Update email link
- Update GitHub link (replace `d3vchrix` with your username)
- Update LinkedIn profile URL
- Update CV Google Drive link

Edit `src/components/Footer.jsx`:
- Update social media links
- Update company name/tagline

## 3️⃣ Deploy Your Portfolio (Choose One)

### Option A: Vercel (Recommended - 1 minute)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
# Your portfolio will be live immediately!
```

**Pros:** Free tier, auto-deployment from Git, fast CDN, SSL included

### Option B: Netlify (1-2 minutes)

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Sign up / Login
4. Choose "Deploy manually"
5. Drag & drop the `dist/` folder
6. Your site is live!

**Pros:** Easy drag-and-drop, free tier, good performance

### Option C: GitHub Pages (2-3 minutes)

1. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Place `dist/` contents on `gh-pages` branch:
   ```bash
   git add dist -f
   git commit -m "Deploy"
   git push origin gh-pages
   ```

4. Go to Settings → Pages → Set source to `gh-pages`

**Pros:** Free, integrates with GitHub, easy updates

### Option D: Your Own Server

Upload the `dist/` folder contents to your web server.

## 4️⃣ Testing & Preview

### Local Testing
```bash
npm run dev     # Development mode
npm run build   # Create production build
npm run preview # Preview production build
```

### Test on Mobile
Open on your phone/tablet:
- Same WiFi network: `http://[your-ip]:5173/`
- Or use Chrome DevTools device emulation

## 5️⃣ Updates & Maintenance

### Make Changes
1. Edit component files in `src/`
2. Save (hot reload happens automatically)
3. Check `http://localhost:5173/`
4. When happy with changes:
   ```bash
   npm run build
   vercel deploy    # or deploy to your chosen platform
   ```

### Add New Sections

Create `src/components/YourSection.jsx`:
```jsx
import { motion } from 'framer-motion'

const YourSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black text-white px-4 sm:px-6 lg:px-8">
      <motion.h2 className="text-5xl font-bold">Your Section</motion.h2>
      {/* Your content */}
    </section>
  )
}

export default YourSection
```

Then add to `src/App.jsx`:
```jsx
import YourSection from './components/YourSection'

<YourSection />
```

## 🎨 Quick Styling Tips

### Change Primary Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#1a1a1a',     // Darker black
  secondary: '#f5f5f5',   // Off-white
}
```

### Adjust Spacing
Most sections use `py-20 md:py-32` for padding. Adjust the numbers to change spacing.

### Font Sizes
- `text-sm` = small
- `text-base` = normal
- `text-lg` = large
- `text-4xl` = huge
- Add `md:text-5xl` for desktop sizes

## 📋 Checklist Before Deploying

- [ ] Updated GitHub username (all places)
- [ ] Added real projects (minimum 3)
- [ ] Updated skills sections
- [ ] Fixed email and social links
- [ ] Updated CV Google Drive link
- [ ] Tested on mobile
- [ ] Tested all links work
- [ ] Checked animations are smooth
- [ ] Run `npm run build` with no errors
- [ ] Test build with `npm run preview`

## 🔧 Common Issues

**npm: not found**
- Install Node.js from nodejs.org

**Port 5173 already in use**
```bash
npm run dev -- --port 5174
```

**Dependencies broken**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors**
```bash
npm run build -- --debug
```

## 📚 Learn More

- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)

## 🚀 You're All Set!

Your portfolio is ready to impress! 

**Next:** Deploy to Vercel/Netlify and share with your network.

---

Questions? Check `CONFIGURATION.md` for detailed setup info.

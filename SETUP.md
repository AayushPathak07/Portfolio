# Portfolio Website Setup Guide

This guide provides step-by-step instructions for setting up and customizing your portfolio website.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git for version control
- Code editor (VS Code recommended)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Landing section
│   │   ├── About.tsx        # About section
│   │   ├── Projects.tsx     # Project showcase
│   │   ├── Blog.tsx         # Blog section
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── blog/                    # Blog content
│   ├── posts/               # Markdown blog posts
│   ├── images/              # Blog images
│   └── README.md            # Blog setup guide
├── public/                  # Static assets
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts           # Vite configuration
├── README.md                # Main documentation
├── DEPLOYMENT.md            # Deployment guide
└── SETUP.md                 # This file
```

## 🎨 Customization Guide

### 1. Personal Information

Update your personal details in the following files:

#### `src/components/Hero.tsx`
```typescript
// Update name and description
<h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight font-serif">
  Hi, I'm{' '}
  <span className="text-primary-500">
    Your Name Here  {/* Change this */}
  </span>
</h1>
<p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
  Your professional description here  {/* Change this */}
</p>

// Update social media links
<a
  href="https://github.com/yourusername"  {/* Change this */}
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
```

#### `src/components/Contact.tsx`
```typescript
// Update contact information
const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'your.email@example.com',  // Change this
    href: 'mailto:your.email@example.com',  // Change this
    color: 'text-primary-500'
  },
  // ... update other contact details
];
```

#### `index.html`
```html
<!-- Update meta tags -->
<title>Your Name - Backend Developer & Systems Engineer</title>
<meta name="description" content="Your professional description here" />
<meta name="author" content="Your Name" />

<!-- Update Open Graph tags -->
<meta property="og:title" content="Your Name - Backend Developer" />
<meta property="og:url" content="https://yourdomain.com" />
```

### 2. Projects Section

Update your projects in `src/components/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Detailed description of your project...',
    image: 'https://your-image-url.com/project1.jpg',
    technologies: ['Node.js', 'PostgreSQL', 'Docker'],
    techColors: {
      'Node.js': 'bg-green-100 text-green-700',
      'PostgreSQL': 'bg-indigo-100 text-indigo-700',
      'Docker': 'bg-blue-100 text-blue-700'
    },
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://your-project-demo.com',
    date: '2024',
    category: 'Backend Systems'
  },
  // Add more projects...
];
```

### 3. About Section

Customize your skills and experience in `src/components/About.tsx`:

```typescript
// Update technology lists
const backendTechs = [
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
  { name: 'Python', icon: FaPython, color: 'text-blue-600' },
  // Add your technologies...
];

// Update professional stats
const stats = [
  { icon: HiCode, label: 'Projects Completed', value: '50+', color: 'text-primary-500' },
  { icon: FaCoffee, label: 'Cups of Coffee', value: '1000+', color: 'text-yellow-500' },
  // Update with your stats...
];
```

### 4. Blog Content

See the detailed blog setup guide in `blog/README.md`. To add a new blog post:

1. Create a new markdown file in `blog/posts/`
2. Follow the frontmatter format:
   ```markdown
   ---
   title: "Your Blog Post Title"
   date: "2024-01-15"
   excerpt: "Brief description..."
   category: "Backend"
   tags: ["Node.js", "Performance"]
   featured: true
   readTime: 10
   image: "/blog/images/your-image.jpg"
   slug: "your-post-slug"
   ---
   
   # Your Blog Post Content
   
   Write your content here...
   ```

### 5. Color Scheme

Customize colors in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',  // Main primary color
          600: '#0284c7',
          // ... other shades
        },
        accent: {
          500: '#d946ef',  // Main accent color
          // ... other shades
        },
        // Add custom colors...
      },
    },
  },
};
```

### 6. Typography

Update fonts in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap');

@layer base {
  body {
    font-family: 'Your Font', system-ui, sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Your Heading Font', serif;
  }
}
```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📦 Adding New Dependencies

### UI Libraries
```bash
# Add Framer Motion for animations
npm install framer-motion

# Add React Hook Form for forms
npm install react-hook-form

# Add date utilities
npm install date-fns
```

### Backend Integration
```bash
# Add API client
npm install axios

# Add state management
npm install zustand

# Add form validation
npm install zod
```

## 🎯 Icon Usage

The project uses `react-icons` instead of Lucide React. Available icon sets:

```typescript
// Font Awesome icons
import { FaGithub, FaLinkedin, FaNodeJs } from 'react-icons/fa';

// Heroicons
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

// Simple Icons (for brands)
import { SiTypescript, SiPostgresql, SiDocker } from 'react-icons/si';

// Usage example
<FaGithub size={24} className="text-gray-600" />
```

Find more icons at: https://react-icons.github.io/react-icons/

## 🚀 Performance Optimization

### Image Optimization
```typescript
// Use responsive images
<img 
  src="image.jpg" 
  alt="Description"
  loading="lazy"  // Lazy loading
  className="w-full h-auto"
/>
```

### Code Splitting
```typescript
// Lazy load components
import { lazy, Suspense } from 'react';

const Blog = lazy(() => import('./components/Blog'));

// Use with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Blog />
</Suspense>
```

## 🔍 SEO Optimization

### Meta Tags
Update meta tags in `index.html` for better SEO:

```html
<meta name="keywords" content="backend developer, systems engineer, node.js, python" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://yourdomain.com" />
```

### Structured Data
The project includes JSON-LD structured data. Update it with your information:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Backend Developer",
  "url": "https://yourdomain.com"
}
</script>
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5173
   lsof -ti:5173 | xargs kill -9
   ```

2. **Node modules issues**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**
   ```bash
   # Check for type errors
   npx tsc --noEmit
   ```

4. **Build failures**
   ```bash
   # Clear Vite cache
   rm -rf dist .vite
   npm run build
   ```

### Getting Help

1. Check the browser console for errors
2. Review the terminal output for build errors
3. Ensure all dependencies are installed correctly
4. Verify file paths and imports are correct

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m "Add feature"`
6. Push: `git push origin feature-name`
7. Create a pull request

---

**Need help?** Create an issue in the repository or contact me at your.email@example.com
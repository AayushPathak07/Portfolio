# Aayush Pathak Portfolio Website

A modern, dynamic portfolio website built with React, TypeScript, and Tailwind CSS. Features routing, markdown-based content management, and impressive cursor animations.

## 🚀 Features

- **Dynamic Content**: Projects and blog posts loaded from markdown files
- **Client-Side Routing**: Smooth navigation with React Router
- **Cursor Animation**: Impressive cursor-following effects
- **Modern Design**: Vibrant colors with clean, minimalist aesthetics
- **Responsive Layout**: Optimized for all device sizes from mobile to desktop
- **Markdown Support**: Full .md and .mdx file support for content
- **Technology Management**: Centralized technology data with icons
- **Interactive Components**: Smooth animations, hover effects, and micro-interactions

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router DOM
- **Content**: Markdown with gray-matter and remark
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Heroicons, Font Awesome, Simple Icons)
- **Build Tool**: Vite
- **Deployment**: Cloudflare Pages

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation with routing
│   ├── Hero.tsx            # Landing section
│   ├── About.tsx           # Dynamic technology showcase
│   ├── Projects.tsx        # Dynamic project cards
│   ├── Blog.tsx            # Dynamic blog posts
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer links
│   └── CursorFollower.tsx  # Cursor animation
├── pages/
│   ├── ProjectDetailPage.tsx # Individual project pages
│   └── ArticleDetailPage.tsx # Individual article pages
├── data/
│   └── technologies.ts     # Centralized technology data
├── utils/
│   └── markdown.ts         # Markdown processing utilities
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and custom animations

projects/                   # Project markdown files
├── distributed-task-queue-system.md
├── microservices-api-gateway.md
└── ...

blog/posts/                 # Blog markdown files
├── 2024-01-15-scalable-microservices.md
├── 2024-01-10-database-optimization.md
└── ...
```

## 🎨 Design Features

### Vibrant Color Scheme
- **Primary**: Bright blue (#0ea5e9)
- **Accent**: Vibrant purple (#d946ef)
- **Success**: Energetic green (#22c55e)
- **Warning**: Bold orange (#f59e0b)
- **Background**: Clean white with colorful accents

### Typography
- **Headings**: Playfair Display (serif) for elegance
- **Body**: Inter (sans-serif) for readability
- **Hierarchy**: Clear distinction between heading and body text

### Interactive Elements
- **Cursor Follower**: Multi-layered cursor animation
- **Hover Effects**: Smooth transitions and scale transforms
- **Card Animations**: Floating and transform effects

## 🔧 Development

### Prerequisites
- Node.js 18+ and npm
- Basic understanding of React and TypeScript
- Git for version control

### Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open http://localhost:5173 in your browser

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📝 Adding Content

### Adding New Projects

1. Create a new `.md` file in the `projects/` directory
2. Use this frontmatter structure:

```markdown
---
title: "Your Project Title"
excerpt: "Brief description for the card view"
image: "https://your-image-url.com/image.jpg"
technologies: ["Node.js", "PostgreSQL", "Docker"]
githubUrl: "https://github.com/yourusername/project"
liveUrl: "https://your-project-demo.com"
date: "2024"
category: "Backend Systems"
featured: true
slug: "your-project-slug"
---

# Your Project Title

Your detailed project description in markdown...
```

### Adding New Blog Posts

1. Create a new `.md` file in the `blog/posts/` directory
2. Use this frontmatter structure:

```markdown
---
title: "Your Article Title"
excerpt: "Brief description for the card view"
author: "Your Name"
date: "2024-01-15"
readTime: 10
category: "Backend"
tags: ["Node.js", "Performance"]
image: "https://your-image-url.com/image.jpg"
featured: true
slug: "your-article-slug"
---

# Your Article Title

Your detailed article content in markdown...
```

### Adding New Technologies

Update `src/data/technologies.ts`:

```typescript
import { SiYourTech } from 'react-icons/si';

export const technologies: Technology[] = [
  // ... existing technologies
  { 
    name: 'Your Technology', 
    icon: SiYourTech, 
    color: 'text-blue-500', 
    category: 'backend' 
  },
];
```

## 🎯 Key Features Explained

### Dynamic Routing
- **Main Portfolio**: `/` - Single-page layout with all sections
- **Project Details**: `/projects/:slug` - Individual project pages
- **Article Details**: `/blog/:slug` - Individual blog post pages

### Cursor Animation
The cursor follower creates multiple animated layers:
- Primary cursor dot with scale effects
- Secondary ring with delay
- Particle effects when moving
- Smooth transitions and momentum

### Technology Management
All technologies are centrally managed in `src/data/technologies.ts`:
- Consistent icons and colors
- Easy to add new technologies
- Automatic filtering by category
- Type-safe with TypeScript

## 🚀 Deployment to Cloudflare Pages

### Method 1: Git Integration (Recommended)
1. Push your code to a Git repository
2. Connect to Cloudflare Pages
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Deploy and configure custom domain

### Method 2: Direct Upload
1. Build the project: `npm run build`
2. Upload the `dist` folder contents to Cloudflare Pages

### Environment Variables
```
NODE_VERSION=18
NPM_VERSION=9
VITE_SITE_URL=https://aayushpathak.com
```

## 📊 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components loaded on demand
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Efficient Routing**: Client-side navigation without page refreshes

## 🔍 SEO Optimization

- **Meta Tags**: Comprehensive meta tags for each page
- **Structured Data**: JSON-LD for search engines
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Open Graph**: Social media sharing optimization

## 🐛 Troubleshooting

### Common Issues

1. **Routing Issues**: Ensure React Router is properly configured
2. **Markdown Not Loading**: Check file paths and frontmatter format
3. **Icons Missing**: Verify react-icons imports
4. **Build Failures**: Check TypeScript errors and dependencies

### Development Tips

1. Use browser dev tools to debug routing
2. Check console for markdown parsing errors
3. Verify technology names match between markdown and data files
4. Test cursor animation on different devices

## 📚 Resources

- [React Router Documentation](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Gray Matter](https://github.com/jonschlinkert/gray-matter)
- [Remark](https://remark.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Add your content or make changes
4. Test thoroughly
5. Commit: `git commit -m "Add feature"`
6. Push: `git push origin feature-name`
7. Create a pull request

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and impressive animations**
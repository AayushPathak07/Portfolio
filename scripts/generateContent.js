import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Utility function to convert markdown to HTML
async function markdownToHtml(markdown) {
  try {
    const result = await remark().use(html).process(markdown);
    return result.toString();
  } catch (error) {
    console.error('Error converting markdown to HTML:', error);
    return markdown;
  }
}

// Generate blog posts data
async function generateBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'blog', 'posts');
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory).filter(name => name.endsWith('.md'));
  
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      const contentHtml = await markdownToHtml(matterResult.content);

      return {
        slug,
        title: matterResult.data.title || 'Untitled Post',
        excerpt: matterResult.data.excerpt || 'No description available.',
        content: matterResult.content,
        contentHtml,
        author: matterResult.data.author || 'Aayush Pathak',
        date: matterResult.data.date || new Date().toISOString().split('T')[0],
        readTime: parseInt(matterResult.data.readTime) || 5,
        category: matterResult.data.category || 'Technology',
        tags: matterResult.data.tags || [],
        image: matterResult.data.image ? `/${matterResult.data.image}` : 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
        featured: Boolean(matterResult.data.featured),
      };
    })
  );

  return allPostsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

// Generate projects data
async function generateProjects() {
  const projectsDirectory = path.join(process.cwd(), 'projects');
  
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory).filter(name => name.endsWith('.md'));
  
  const allProjectsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      const contentHtml = await markdownToHtml(matterResult.content);

      return {
        slug,
        title: matterResult.data.title || 'Untitled Project',
        excerpt: matterResult.data.excerpt || 'No description available.',
        content: matterResult.content,
        contentHtml, 
        image: matterResult.data.image ? `/${matterResult.data.image}` : 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: matterResult.data.technologies || [],
        githubUrl: matterResult.data.githubUrl || '#',
        liveUrl: matterResult.data.liveUrl || '#',
        date: matterResult.data.date || new Date().getFullYear().toString(),
        category: matterResult.data.category || 'Development',
        featured: Boolean(matterResult.data.featured),
      };
    })
  );

  return allProjectsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

// Main function to generate all content
async function generateContent() {
  try {
    const blogPosts = await generateBlogPosts();
    const projects = await generateProjects();
    
    const contentData = {
      blogPosts,
      projects,
      generatedAt: new Date().toISOString(),
    };
    
    const dataDir = path.join(process.cwd(), 'src', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const outputPath = path.join(dataDir, 'content.ts');
    const fileContent = `// This file is auto-generated. Do not edit manually.
// Generated at: ${contentData.generatedAt}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  contentHtml: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export interface ProjectPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  contentHtml: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  date: string;
  category: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = ${JSON.stringify(contentData.blogPosts, null, 2)};

export const projects: ProjectPost[] = ${JSON.stringify(contentData.projects, null, 2)};

export const generatedAt = "${contentData.generatedAt}";
`;
    
    fs.writeFileSync(outputPath, fileContent, 'utf8');
    console.log(`Content generated successfully at ${outputPath}`);
    
  } catch (error) {
    console.error('Error generating content:', error);
    process.exit(1);
  }
}

// Run the content generation
generateContent();

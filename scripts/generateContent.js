import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Utility function to convert markdown to HTML
async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Generate blog posts data
async function generateBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'blog', 'posts');
  
  if (!fs.existsSync(postsDirectory)) {
    console.log('Blog posts directory not found, creating empty array');
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory).filter(name => name.endsWith('.md'));
  
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      // Convert markdown to HTML
      const contentHtml = await markdownToHtml(matterResult.content);

      return {
        slug,
        title: matterResult.data.title || '',
        excerpt: matterResult.data.excerpt || '',
        content: matterResult.content,
        contentHtml,
        author: matterResult.data.author || 'Aayush Pathak',
        date: matterResult.data.date || new Date().toISOString().split('T')[0],
        readTime: matterResult.data.readTime || 5,
        category: matterResult.data.category || 'General',
        tags: matterResult.data.tags || [],
        image: matterResult.data.image || 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
        featured: matterResult.data.featured || false,
      };
    })
  );

  // Sort posts by date in descending order
  return allPostsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

// Generate projects data
async function generateProjects() {
  const projectsDirectory = path.join(process.cwd(), 'projects');
  
  if (!fs.existsSync(projectsDirectory)) {
    console.log('Projects directory not found, creating empty array');
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory).filter(name => name.endsWith('.md'));
  
  const allProjectsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      // Convert markdown to HTML
      const contentHtml = await markdownToHtml(matterResult.content);

      return {
        slug,
        title: matterResult.data.title || '',
        excerpt: matterResult.data.excerpt || '',
        content: matterResult.content,
        contentHtml,
        image: matterResult.data.image || 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: matterResult.data.technologies || [],
        githubUrl: matterResult.data.githubUrl || '',
        liveUrl: matterResult.data.liveUrl || '',
        date: matterResult.data.date || new Date().getFullYear().toString(),
        category: matterResult.data.category || 'General',
        featured: matterResult.data.featured || false,
      };
    })
  );

  // Sort projects by date in descending order
  return allProjectsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

// Main function to generate all content
async function generateContent() {
  try {
    console.log('Generating content...');
    
    const blogPosts = await generateBlogPosts();
    const projects = await generateProjects();
    
    console.log(`Generated ${blogPosts.length} blog posts`);
    console.log(`Generated ${projects.length} projects`);
    
    // Create the content data object
    const contentData = {
      blogPosts,
      projects,
      generatedAt: new Date().toISOString(),
    };
    
    // Ensure src/data directory exists
    const dataDir = path.join(process.cwd(), 'src', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Write the content data to a TypeScript file
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
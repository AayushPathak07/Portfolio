import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  contentHtml?: string;
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
  contentHtml?: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  date: string;
  category: string;
  featured: boolean;
}

// Utility function to convert markdown to HTML
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Define content directories
const postsDirectory = path.join(process.cwd(), 'blog', 'posts');
const projectsDirectory = path.join(process.cwd(), 'projects');

// Blog post functions
export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Omit<BlogPost, 'slug' | 'content' | 'contentHtml'>),
      content: matterResult.content, // Include content for search, but not for list view
    };
  });

  // Sort posts by date in descending order
  return allPostsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const contentHtml = await markdownToHtml(matterResult.content);

  return {
    slug,
    ...(matterResult.data as Omit<BlogPost, 'slug' | 'content' | 'contentHtml'>),
    content: matterResult.content,
    contentHtml,
  };
}

// Project functions
export async function getAllProjects(): Promise<ProjectPost[]> {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Omit<ProjectPost, 'slug' | 'content' | 'contentHtml'>),
      content: matterResult.content, // Include content for search, but not for list view
    };
  });

  // Sort projects by date in descending order
  return allProjectsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

export async function getProjectBySlug(slug: string): Promise<ProjectPost | null> {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const contentHtml = await markdownToHtml(matterResult.content);

  return {
    slug,
    ...(matterResult.data as Omit<ProjectPost, 'slug' | 'content' | 'contentHtml'>),
    content: matterResult.content,
    contentHtml,
  };
}

// Search functions
export async function searchPosts(query: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  const searchTerm = query.toLowerCase();

  return posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.category.toLowerCase().includes(searchTerm)
  );
}

export async function searchProjects(query: string): Promise<ProjectPost[]> {
  const projects = await getAllProjects();
  const searchTerm = query.toLowerCase();

  return projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.excerpt.toLowerCase().includes(searchTerm) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm)) ||
    project.category.toLowerCase().includes(searchTerm)
  );
}
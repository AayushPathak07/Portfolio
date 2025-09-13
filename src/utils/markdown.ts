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

// Blog post functions
export async function getAllPosts(): Promise<BlogPost[]> {
  // Placeholder implementation - returns empty array
  // TODO: Implement build-time content generation
  return [];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Placeholder implementation - returns null
  // TODO: Implement build-time content generation
  return null;
}

// Project functions
export async function getAllProjects(): Promise<ProjectPost[]> {
  // Placeholder implementation - returns empty array
  // TODO: Implement build-time content generation
  return [];
}

export async function getProjectBySlug(slug: string): Promise<ProjectPost | null> {
  // Placeholder implementation - returns null
  // TODO: Implement build-time content generation
  return null;
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
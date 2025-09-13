import { blogPosts, projects, type BlogPost, type ProjectPost } from '../data/content';

// Re-export types for compatibility
export type { BlogPost, ProjectPost };

// Blog post functions
export async function getAllPosts(): Promise<BlogPost[]> {
  return blogPosts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = blogPosts.find(p => p.slug === slug);
  return post || null;
}

// Project functions
export async function getAllProjects(): Promise<ProjectPost[]> {
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<ProjectPost | null> {
  const project = projects.find(p => p.slug === slug);
  return project || null;
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
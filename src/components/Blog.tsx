import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiCalendar, HiClock, HiArrowRight, HiTag, HiSearch, HiBookOpen } from 'react-icons/hi';
import { getAllPosts, BlogPost } from '../utils/markdown';

/**
 * Blog Component
 * 
 * This component now dynamically loads blog posts from markdown files and provides:
 * - Dynamic content loading from markdown files
 * - Clickable article cards that navigate to detail pages
 * - Search and filtering functionality
 * - Featured and regular posts sections
 * - Responsive grid layout
 * 
 * For backend developers:
 * - Posts are loaded from markdown files using getAllPosts()
 * - React Router Link components handle navigation to article detail pages
 * - Search and filtering work on the loaded data
 * - Loading states provide good user experience
 */
const Blog: React.FC = () => {
  // State management for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);


  // Available categories for filtering
  const categories = ['all', 'Backend', 'Database', 'DevOps'];

  /**
   * Load blog posts from markdown files on component mount
   * This demonstrates asynchronous data loading in React
   */
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getAllPosts();
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  /**
   * Filter posts based on search term and selected category
   * This function demonstrates how to implement client-side filtering
   */
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Separate featured and regular posts for different display layouts
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const otherPosts = filteredPosts.filter(post => !post.featured);

  /**
   * Format date string for display
   * @param dateString - ISO date string
   * @returns Formatted date string
   */
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Show loading state while posts are being fetched
  if (loading) {
    return (
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading articles...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Technical <span className="text-primary-500">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep dives into backend development, system architecture, and engineering best practices
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {/* Search Input */}
          <div className="relative flex-1">
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
            />
          </div>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:text-primary-600 hover:bg-primary-50 border border-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">Featured Articles</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback for missing images
                        e.currentTarget.src = 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-4 text-gray-500 text-sm">
                        <div className="flex items-center space-x-1">
                          <HiCalendar size={16} />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <HiClock size={16} />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors font-serif">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="flex items-center space-x-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          <HiTag size={12} />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">by {post.author}</span>
                      <div className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors group">
                        <span>Read More</span>
                        <HiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        {otherPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">Recent Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                >
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600';
                      }}
                    />
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-lg text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors font-serif">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <HiCalendar size={14} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <HiClock size={14} />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors group text-sm">
                    <span>Read More</span>
                    <HiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* No Results State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <HiSearch size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p>Try adjusting your search terms or filters</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Blog;
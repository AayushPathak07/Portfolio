import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiArrowLeft, HiCalendar, HiClock, HiTag, HiUser } from 'react-icons/hi';
import { blogPosts, BlogPost } from '../data/content';
import Header from '../components/Header';

const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    if (!slug) {
      setError('Article not found');
      setLoading(false);
      return;
    }

    const articleData = blogPosts.find(post => post.slug === slug);

    if (!articleData) {
      setError('Article not found');
    } else {
      setArticle(articleData);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The requested article could not be found.'}</p>
          <Link
            to="/"
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Header activeSection="Blog" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            to="/#blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors font-semibold"
          >
            <HiArrowLeft className="mr-2" size={20} />
            Back to All Articles
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <div className="mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-lg text-sm font-medium">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <HiUser className="mr-2" size={16} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <HiCalendar className="mr-2" size={16} />
              <span>{new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center">
              <HiClock className="mr-2" size={16} />
              <span>{article.readTime} min read</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                <HiTag size={12} />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-blockquote:border-primary-500 prose-blockquote:bg-primary-50 prose-blockquote:p-4 prose-blockquote:rounded-lg"
            dangerouslySetInnerHTML={{ __html: article.contentHtml || '' }}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
              <HiUser className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">About {article.author}</h3>
              <p className="text-gray-600 leading-relaxed">
                Backend engineer passionate about building scalable systems and solving complex technical challenges. 
                I specialize in system design, database optimization, and creating APIs that are both powerful and developer-friendly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-accent-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 font-serif">Enjoyed This Article?</h3>
            <p className="text-accent-100 mb-6">
              Check out more technical articles and insights on backend development, system design, and engineering best practices.
            </p>
            <Link
              to="/#blog"
              className="bg-white text-accent-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticleDetailPage;

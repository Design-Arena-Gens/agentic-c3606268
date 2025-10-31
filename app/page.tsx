import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn how to build modern web applications with the latest version of Next.js. Discover new features like Server Components and improved routing.',
    category: 'Web Development',
    date: 'October 25, 2024',
    author: 'Alex Chen',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'The Art of Clean Code',
    excerpt: 'Explore best practices for writing maintainable, readable code that your team will love. Learn about naming conventions, function design, and more.',
    category: 'Programming',
    date: 'October 22, 2024',
    author: 'Sarah Johnson',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Modern CSS Techniques in 2024',
    excerpt: 'Dive into the latest CSS features including container queries, cascade layers, and new color functions that make styling easier than ever.',
    category: 'Design',
    date: 'October 18, 2024',
    author: 'Mike Rodriguez',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'A comprehensive guide to designing and implementing robust, scalable APIs using Node.js, Express, and modern architectural patterns.',
    category: 'Backend',
    date: 'October 15, 2024',
    author: 'Emily Watson',
    readTime: '10 min read'
  },
  {
    id: 5,
    title: 'React Performance Optimization',
    excerpt: 'Master the techniques to make your React applications blazingly fast. Learn about memoization, code splitting, and virtual scrolling.',
    category: 'React',
    date: 'October 12, 2024',
    author: 'David Kim',
    readTime: '7 min read'
  },
  {
    id: 6,
    title: 'TypeScript Tips and Tricks',
    excerpt: 'Unlock the full potential of TypeScript with advanced types, utility types, and patterns that will make your code more type-safe and elegant.',
    category: 'TypeScript',
    date: 'October 8, 2024',
    author: 'Lisa Anderson',
    readTime: '6 min read'
  }
]

export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Modern Blog</h1>
          <p>Insights, tutorials, and stories about web development</p>
        </div>
      </header>

      <nav>
        <div className="container">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image"></div>
              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.author} • {post.date}</span>
                  <Link href={`/post/${post.id}`} className="read-more">
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Modern Blog. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

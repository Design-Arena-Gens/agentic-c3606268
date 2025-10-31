import Link from 'next/link'

export default function About() {
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
        <div className="article-content">
          <h1>About Modern Blog</h1>
          <p>Welcome to Modern Blog, your go-to resource for web development insights, tutorials, and best practices.</p>

          <h2>Our Mission</h2>
          <p>We believe in sharing knowledge and helping developers at all levels improve their skills. Our content covers everything from beginner tutorials to advanced architectural patterns.</p>

          <h2>What We Cover</h2>
          <p>Our articles span a wide range of topics including:</p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
            <li>Modern JavaScript frameworks (React, Next.js, Vue)</li>
            <li>Backend development with Node.js</li>
            <li>TypeScript and type-safe programming</li>
            <li>CSS and design techniques</li>
            <li>Performance optimization</li>
            <li>Best practices and clean code</li>
          </ul>

          <h2>Join Our Community</h2>
          <p>We're passionate about building a community of developers who learn and grow together. Follow us, share your thoughts, and let's make the web better, one line of code at a time.</p>
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

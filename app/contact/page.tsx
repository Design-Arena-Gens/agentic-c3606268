import Link from 'next/link'

export default function Contact() {
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
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you! Whether you have questions, suggestions, or want to contribute to our blog, feel free to reach out.</p>

          <h2>Contact Information</h2>
          <p><strong>Email:</strong> hello@modernblog.dev</p>
          <p><strong>Twitter:</strong> @modernblog</p>
          <p><strong>GitHub:</strong> github.com/modernblog</p>

          <h2>Contribute</h2>
          <p>Interested in writing for Modern Blog? We welcome guest posts from experienced developers. Send us your article ideas and we'll get back to you!</p>

          <h2>Report Issues</h2>
          <p>Found a bug or have suggestions for improving the site? Let us know! We're constantly working to make Modern Blog better.</p>
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

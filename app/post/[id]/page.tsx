import Link from 'next/link'

const posts: { [key: string]: any } = {
  '1': {
    title: 'Getting Started with Next.js 14',
    category: 'Web Development',
    date: 'October 25, 2024',
    author: 'Alex Chen',
    readTime: '5 min read',
    content: `
      <h2>Introduction</h2>
      <p>Next.js 14 represents a significant leap forward in web development, bringing powerful new features that make building modern applications easier and more efficient than ever before. In this comprehensive guide, we'll explore everything you need to know to get started.</p>

      <h2>Server Components: The Future of React</h2>
      <p>Server Components are one of the most exciting features in Next.js 14. They allow you to render components on the server, reducing the JavaScript bundle size sent to the client and improving performance dramatically. This means faster load times and better user experiences across the board.</p>

      <p>With Server Components, you can fetch data directly in your components without needing separate API routes. This simplifies your architecture and makes your code more maintainable.</p>

      <h2>Improved Routing</h2>
      <p>The new App Router in Next.js 14 provides a more intuitive way to structure your application. With file-system based routing that supports layouts, loading states, and error boundaries, building complex applications becomes straightforward.</p>

      <p>You can co-locate your data fetching, loading states, and error handling right alongside your components, making your codebase easier to understand and maintain.</p>

      <h2>Getting Started</h2>
      <p>To create a new Next.js 14 project, simply run: <code>npx create-next-app@latest</code>. Follow the prompts to configure TypeScript, ESLint, and Tailwind CSS, and you'll have a production-ready application in minutes.</p>

      <p>The framework handles all the complex configuration for you, allowing you to focus on building great features for your users.</p>
    `
  },
  '2': {
    title: 'The Art of Clean Code',
    category: 'Programming',
    date: 'October 22, 2024',
    author: 'Sarah Johnson',
    readTime: '8 min read',
    content: `
      <h2>What Makes Code "Clean"?</h2>
      <p>Clean code is code that is easy to understand, easy to modify, and easy to maintain. It's code that you can come back to months later and immediately understand what it does and why. Writing clean code is a skill that separates good developers from great ones.</p>

      <h2>Naming Conventions Matter</h2>
      <p>One of the most important aspects of clean code is using meaningful names for variables, functions, and classes. Your names should reveal intent and make the code self-documenting. Avoid cryptic abbreviations and single-letter variables (except in very limited contexts like loop counters).</p>

      <p>A function named <code>calculateUserAccountBalance()</code> is infinitely better than <code>calc()</code> or <code>doStuff()</code>. Your future self will thank you.</p>

      <h2>Functions Should Do One Thing</h2>
      <p>Each function should have a single responsibility and do it well. If you find yourself writing a function that does multiple unrelated things, split it into multiple functions. This makes your code more testable, reusable, and easier to understand.</p>

      <h2>Don't Repeat Yourself (DRY)</h2>
      <p>Duplicated code is one of the biggest sources of bugs and maintenance headaches. If you find yourself copying and pasting code, it's time to extract that logic into a reusable function or component.</p>

      <p>Remember: clean code is not about being clever, it's about being clear. Write code for humans first, computers second.</p>
    `
  },
  '3': {
    title: 'Modern CSS Techniques in 2024',
    category: 'Design',
    date: 'October 18, 2024',
    author: 'Mike Rodriguez',
    readTime: '6 min read',
    content: `
      <h2>The Evolution of CSS</h2>
      <p>CSS has evolved tremendously over the past few years. What once required JavaScript or complex workarounds can now be achieved with pure CSS. Let's explore some of the most exciting modern CSS features that are changing how we build websites.</p>

      <h2>Container Queries</h2>
      <p>Container queries are a game-changer for responsive design. Unlike media queries that respond to viewport size, container queries allow elements to respond to their container's size. This makes creating truly reusable components much easier.</p>

      <p>With container queries, a component can adapt its layout based on where it's placed, not just the screen size. This is perfect for modern component-based architectures.</p>

      <h2>Cascade Layers</h2>
      <p>Cascade layers give you fine-grained control over the cascade, making it easier to manage specificity and avoid conflicts between different parts of your stylesheets. You can now explicitly define which styles should take precedence.</p>

      <h2>New Color Functions</h2>
      <p>CSS now supports advanced color functions like <code>color-mix()</code>, <code>oklch()</code>, and relative color syntax. These features make working with colors more intuitive and powerful, enabling sophisticated color manipulations that were previously only possible with preprocessors.</p>

      <p>The future of CSS is bright, and these tools make it easier than ever to create beautiful, responsive, and maintainable stylesheets.</p>
    `
  },
  '4': {
    title: 'Building Scalable APIs with Node.js',
    category: 'Backend',
    date: 'October 15, 2024',
    author: 'Emily Watson',
    readTime: '10 min read',
    content: `
      <h2>Scalability from the Start</h2>
      <p>Building a scalable API requires careful planning and architecture. In this guide, we'll cover the essential patterns and practices for creating APIs that can grow with your application's needs.</p>

      <h2>RESTful Design Principles</h2>
      <p>Following REST principles makes your API predictable and easy to use. Use proper HTTP methods (GET, POST, PUT, DELETE), meaningful resource names, and appropriate status codes. Your API should be intuitive for other developers to understand and integrate with.</p>

      <h2>Error Handling</h2>
      <p>Robust error handling is crucial for production APIs. Always return consistent error responses with meaningful messages. Use proper HTTP status codes and include enough information for clients to understand what went wrong and how to fix it.</p>

      <h2>Authentication and Security</h2>
      <p>Security should never be an afterthought. Implement proper authentication (JWT tokens are a popular choice), validate all input, use HTTPS, and follow the principle of least privilege. Rate limiting and API keys can help prevent abuse.</p>

      <h2>Performance and Caching</h2>
      <p>Use caching strategically to reduce database load and improve response times. Redis is excellent for caching frequently accessed data. Implement pagination for large datasets and use database indexes appropriately.</p>

      <p>Remember: premature optimization is the root of all evil, but planning for scale from the beginning will save you headaches later.</p>
    `
  },
  '5': {
    title: 'React Performance Optimization',
    category: 'React',
    date: 'October 12, 2024',
    author: 'David Kim',
    readTime: '7 min read',
    content: `
      <h2>Why Performance Matters</h2>
      <p>In modern web applications, performance directly impacts user experience and business metrics. A slow application leads to frustrated users and lost conversions. Let's explore the key techniques for making your React applications fast.</p>

      <h2>Memoization with useMemo and useCallback</h2>
      <p>React provides hooks like <code>useMemo</code> and <code>useCallback</code> to prevent unnecessary recalculations and re-renders. Use <code>useMemo</code> for expensive computations and <code>useCallback</code> to maintain stable function references across renders.</p>

      <p>However, don't overuse these hooks. Only memoize when you have measured performance issues. Premature memoization can actually make your code slower and harder to maintain.</p>

      <h2>Code Splitting and Lazy Loading</h2>
      <p>Use dynamic imports and React.lazy to split your code into smaller chunks. This reduces the initial bundle size and improves load times. Load components only when they're needed, especially for routes that aren't immediately visible.</p>

      <h2>Virtual Scrolling</h2>
      <p>When rendering large lists, use virtual scrolling libraries like react-window or react-virtualized. These libraries only render the items currently visible in the viewport, dramatically improving performance for long lists.</p>

      <h2>Measure, Don't Guess</h2>
      <p>Always measure performance before and after optimizations using React DevTools Profiler. What seems like a bottleneck might not be, and vice versa. Let data guide your optimization decisions.</p>
    `
  },
  '6': {
    title: 'TypeScript Tips and Tricks',
    category: 'TypeScript',
    date: 'October 8, 2024',
    author: 'Lisa Anderson',
    readTime: '6 min read',
    content: `
      <h2>Beyond the Basics</h2>
      <p>TypeScript is more than just adding types to JavaScript. It's a powerful tool that, when used correctly, can catch bugs before they reach production and make your code more maintainable. Let's explore some advanced techniques.</p>

      <h2>Utility Types</h2>
      <p>TypeScript provides built-in utility types like <code>Partial</code>, <code>Pick</code>, <code>Omit</code>, and <code>Record</code>. These types help you transform existing types without duplicating code. Master these utilities to write more expressive and maintainable type definitions.</p>

      <h2>Type Guards</h2>
      <p>Type guards allow you to narrow types within conditional blocks. Use <code>typeof</code>, <code>instanceof</code>, or custom type predicates to help TypeScript understand your runtime checks and provide better type inference.</p>

      <h2>Mapped Types</h2>
      <p>Mapped types let you create new types by transforming properties of existing types. They're incredibly powerful for creating variations of types while maintaining type safety. Combined with conditional types, you can express complex type relationships.</p>

      <h2>Const Assertions</h2>
      <p>Use <code>as const</code> to create deeply readonly types and get literal type inference. This is particularly useful for configuration objects and constant arrays where you want the most specific types possible.</p>

      <p>TypeScript's type system is Turing complete, meaning you can express almost any type relationship. The key is finding the right balance between type safety and code simplicity.</p>
    `
  }
}

export default function Post({ params }: { params: { id: string } }) {
  const post = posts[params.id]

  if (!post) {
    return (
      <div className="container">
        <h1>Post not found</h1>
        <Link href="/" className="back-link">← Back to home</Link>
      </div>
    )
  }

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
        <Link href="/" className="back-link">← Back to all posts</Link>

        <article className="article-content">
          <div className="article-header">
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="blog-meta">
              <span>{post.author} • {post.date} • {post.readTime}</span>
            </div>
          </div>

          <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Modern Blog. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export function generateStaticParams() {
  return Object.keys(posts).map((id) => ({
    id,
  }))
}

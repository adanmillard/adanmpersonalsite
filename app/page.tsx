import Link from 'next/link';

const projects = [
  {
    title: 'Personal Blog',
    description: 'A Next.js markdown blog with MDX support.',
    href: '#projects',
  },
  {
    title: 'Design System',
    description: 'Reusable component library with Tailwind and Figma tokens.',
    href: '#projects',
  },
  {
    title: 'Open Source Contribution',
    description: 'Commit history, PR stats, and automated changelog.',
    href: '#projects',
  },
];

export default function Home() {
  return (
    <main className="page-container">
      <section className="hero">
        <h1>Hi, I'm Adan.</h1>
        <p>
          Junior Developer, experienced using Next.js, Typescript and modern UI patterns.
        </p>
        <div className="cta-row">
          <Link href="#about" className="btn primary">About Me</Link>
          <Link href="#contact" className="btn">Contact</Link>
        </div>
      </section>

      <section id="about" className="card">
        <h2>About</h2>
        <p>
          I'm a full-stack developer who enjoys creating fast, accessible websites with clean design and strong semantic HTML.
          I ship user-centric features and workflows that are easy to maintain.
        </p>
      </section>

      <section id="projects" className="card">
        <h2>Featured Projects</h2>
        <ul className="project-grid">
          {projects.map((project) => (
            <li key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.href}>View details</a>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="card">
        <h2>Contact</h2>
        <p>
          <strong>Email:</strong> <a href="mailto:adanmillard@gmail.com">Adanmillard@gmail.com</a>
        </p>
        <p>
          <strong>GitHub:</strong> <a href="https://github.com/adanmillard" target="_blank" rel="noreferrer">github.com/adanmillard</a>
        </p>
      </section>
    </main>
  );
}

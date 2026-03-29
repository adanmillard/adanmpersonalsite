import Link from 'next/link';

export default function Home() {
  const operationProjects = [
    {
      number: '01', title: 'Retail Store Launch', description: 'Led setup and launch with rapid profitability via systems, stock control, execution.', tags: ['Operations', 'Growth'],
    },
    {
      number: '02', title: 'Warehouse Cost Reduction', description: '$5,000 annual savings by optimizing supply contracts and process efficiency.', tags: ['Cost savings', 'Process'],
    },
    {
      number: '03', title: 'Team & Workflow Improvements', description: 'Improved accountability and collaboration through structure, communication, and routines.', tags: ['People', 'Systems'],
    },
    {
      number: '04', title: 'Marketing Collaboration', description: 'Co-led BurgerFuel partnership for stronger brand visibility and customer engagement.', tags: ['Marketing', 'Partnerships'],
    },
  ];

  const softwareProjects = [
    { number: '01', title: 'Full Stack Apps', description: 'End-to-end applications with usable UI and robust backend.', tags: ['React', 'Node', 'SQL'] },
    { number: '02', title: 'Frontend UX', description: 'Responsive, clear UIs with polished interactions and accessibility focus.', tags: ['HTML', 'CSS', 'JS'] },
    { number: '03', title: 'Backend & APIs', description: 'Server logic, data flow, and performance-focused endpoints.', tags: ['REST', 'GraphQL', 'API'] },
    { number: '04', title: 'Learning Builds', description: 'Mini projects for experimentation and incremental growth.', tags: ['New tech', 'Prototyping'] },
  ];

  return (
    <>
      <main>
        <section className="hero home-hero scroll-reveal">
          <div className="hero-content">
            <div className="hero-eyebrow">Work / Story</div>
            <h1 className="hero-title">High-impact operations and software work, crafted with precision.</h1>
            <p className="hero-desc">Warm editorial design interwoven with practical systems thinking. I build for the people doing the job, not just the code.</p>
            <div className="cta-row">
              <Link href="/about" className="btn primary">About me</Link>
              <Link href="/projects" className="btn ghost">See Projects</Link>
            </div>
          </div>

          <div className="avatar-block">
            <div className="avatar-card">
              <div className="avatar-bg" />
              <img src="https://via.placeholder.com/640x640?text=Your+Photo" alt="Adan" />
            </div>
            <div className="stats-strip">
              <div className="stat-box"><div className="stat-num">5+</div><div className="stat-label">Years Experience</div></div>
              <div className="stat-box"><div className="stat-num">40+</div><div className="stat-label">Projects</div></div>
              <div className="stat-box"><div className="stat-num">9/10</div><div className="stat-label">Efficiency</div></div>
            </div>
          </div>
        </section>

        <section className="scroll-reveal" id="about">
          <div className="section-tag">about</div>
          <h2 className="section-title">My Process</h2>
          <div className="main-container about-grid">
            <div className="about-copy">
              <p>Hey, I’m Adan. I’ve always been someone who likes figuring things out—whether that’s fixing a messy process, building something from scratch, or just asking “why does this work like this?” until it actually makes sense.</p>
              <p>My career hasn’t been a straight line, and I think that’s a strength. I’ve spent time deep in operations—running warehouses, managing people, solving day-to-day problems—and I’ve also trained and worked in software development. What I’ve realised is that I enjoy being somewhere in the middle: where real-world problems meet smart, practical solutions.</p>
              <p>I like building things that are actually useful. Not over-engineered, not just “cool” for the sake of it—but tools, systems, and ideas that make life easier for the people using them.</p>
              <p>Working in operations taught me a lot about pressure, ownership, and what it really takes to make something run well. It also gave me a strong appreciation for clarity, communication, and just getting things done.</p>
              <p>These days, I’m focused on creating, learning, and putting myself in positions where I can keep growing.</p>
            </div>
            <div className="skills-grid">
              <div className="skill" data-progress="92">
                <div className="skill-label">Process design</div>
                <div className="progress-track"><div className="progress-bar"></div></div>
              </div>
              <div className="skill" data-progress="85">
                <div className="skill-label">Team leadership</div>
                <div className="progress-track"><div className="progress-bar"></div></div>
              </div>
              <div className="skill" data-progress="80">
                <div className="skill-label">Product development</div>
                <div className="progress-track"><div className="progress-bar"></div></div>
              </div>
              <div className="skill" data-progress="70">
                <div className="skill-label">Automation & tooling</div>
                <div className="progress-track"><div className="progress-bar"></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-reveal" id="projects">
          <div className="section-tag">work</div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {operationProjects.map((project) => (
              <article key={project.number} className="project-card">
                <div className="project-number">{project.number}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag} className="project-pill">{tag}</span>)}</div>
              </article>
            ))}
            {softwareProjects.map((project) => (
              <article key={project.number} className="project-card">
                <div className="project-number">{project.number}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag} className="project-pill">{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="scroll-reveal" id="experience">
          <div className="section-tag">experience</div>
          <h2 className="section-title">Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2024–Present</div>
              <div className="timeline-role">Operations Manager & Product builder</div>
              <div className="timeline-company">CompanyName</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2021–2024</div>
              <div className="timeline-role">Warehouse Optimization Lead</div>
              <div className="timeline-company">CompanyName</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2019–2021</div>
              <div className="timeline-role">Full Stack Developer</div>
              <div className="timeline-company">CompanyName</div>
            </div>
          </div>
        </section>

        <section className="scroll-reveal contact-center" id="contact">
          <h1>Contact</h1>
          <p><a className="email-link" href="mailto:adanmillard@gmail.com">adanmillard@gmail.com</a></p>
          <div className="socials">
            <a href="https://github.com/adanmillard" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/adan-ml" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Adan M</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}

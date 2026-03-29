import Link from 'next/link';

export default function Projects() {
  return (
    <main className="page-container">
      <section className="hero">
        <h1>Projects</h1>
        <p>
          I’ve worked on a mix of hands-on operational projects and software builds, all focused on making things run smoother, simpler, and more effectively.
        </p>
      </section>

      <section className="card">
        <h2>Operational Projects</h2>
        <ul>
          <li>
            <strong>Retail Store Launch.</strong> Led the setup and launch of a new retail store from the ground up. Within two months, it was running profitably—driven by strong systems, stock control, and day-to-day execution.
          </li>
          <li>
            <strong>Warehouse Cost Reduction.</strong> Reviewed supplier contracts and internal processes to identify inefficiencies, leading to a <span className="highlight-amount">$5,000</span> annual cost reduction without sacrificing performance.
          </li>
          <li>
            <strong>Team & Workflow Improvements.</strong> Built a more collaborative and accountable warehouse environment by improving communication, structure, and day-to-day processes.
          </li>
          <li>
            <strong>Marketing Collaboration (BurgerFuel).</strong> Secured and supported a marketing partnership that boosted brand visibility and customer engagement.
          </li>
        </ul>
      </section>

      <section className="card">
        <h2>GitHub Projects</h2>
        <p>
          Alongside my professional work, I’ve been building software projects that reflect how I like to solve problems—practical, user-focused, and clean.
        </p>
        <ul>
          <li>
            <strong>Full Stack Applications.</strong> Built end-to-end applications with front-end, back-end, and database integration. Focused on creating usable interfaces and solid underlying logic rather than just getting something working.
          </li>
          <li>
            <strong>Frontend Projects.</strong> Developed responsive, user-friendly interfaces with a focus on clarity and usability. I care about how things feel to use, not just how they look.
          </li>
          <li>
            <strong>Backend & API Work.</strong> Created APIs and handled server-side logic, working with data flow, structure, and performance to support real-world use cases.
          </li>
          <li>
            <strong>Ongoing Learning Projects.</strong> Regularly build smaller projects to test ideas, learn new tools, and improve how I structure and write code.
          </li>
        </ul>
        <a href="https://github.com/adanmillard" target="_blank" rel="noreferrer" className="project-cta">You can check out my work here</a>
      </section>

      <section className="card">
        <Link href="/" className="btn">Back to Home</Link>
      </section>
    </main>
  );
}

import Link from 'next/link';

export default function About() {
  return (
    <main className="page-container">
      <section className="hero">
        <h1>Hey, I’m Adan.</h1>
        <p>
          I’ve always been someone who likes figuring things out—whether that’s fixing a messy process, building something from scratch, or just asking “why does this work like this?” until it actually makes sense.
        </p>
      </section>

      <section className="card">
        <h2>Background</h2>
        <p>
          My career hasn’t been a straight line, and I think that’s a strength. I’ve spent time deep in operations—running warehouses, managing people, solving day-to-day problems—and I’ve also trained and worked in software development. What I’ve realised is that I enjoy being <em>somewhere in the middle</em>: where real-world problems meet smart, practical solutions.
        </p>
        <div className="placeholder-images">
          <img src="https://via.placeholder.com/420x280?text=Me" alt="Placeholder image of Adan" />
          <img src="https://via.placeholder.com/420x280?text=Ops+and+Code" alt="Placeholder for operations and code" />
        </div>
      </section>

      <section className="card">
        <h2>Approach</h2>
        <p>
          I like building things that are actually useful. Not over-engineered, not just “cool” for the sake of it—but tools, systems, and ideas that make life easier for the people using them.
        </p>
      </section>

      <section className="card">
        <h2>Formed by Real Work</h2>
        <p>
          Working in operations taught me a lot about pressure, ownership, and what it really takes to make something run well. It also gave me a strong appreciation for clarity, communication, and just getting things done.
          That mindset is something I carry into everything I do now.
        </p>
      </section>

      <section className="card">
        <h2>Current Focus</h2>
        <p>
          These days, I’m focused on creating, learning, and putting myself in positions where I can keep growing. I’m big on <em>continuous improvement</em>—whether that’s in work, skills, or just how I approach challenges.
        </p>
        <p>
          Outside of work, I’m probably diving into new ideas, chasing goals, or finding ways to get better at whatever I’m currently obsessed with.
        </p>
      </section>

      <section className="card">
        <Link href="/" className="btn primary">Back to Home</Link>
      </section>
    </main>
  );
}

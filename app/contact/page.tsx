'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageSent(true);
  };

  return (
    <main className="page-container">
      <section className="hero">
        <h1>Contact</h1>
        <p>
          I’d love to hear from you. Whether it’s a project idea, collaboration, or just to say hello, feel free to get in touch.
        </p>
      </section>

      <section className="card contact-card">
        <div>
          <h2>Reach out directly</h2>
          <p>Email: <a href="mailto:adanmillard@gmail.com">adanmillard@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/adanmillard" target="_blank" rel="noreferrer">github.com/adanmillard</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/adan-ml" target="_blank" rel="noreferrer">linkedin.com/in/adan-ml</a></p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} placeholder="Tell me about your project or question..." required />
          </label>
          <button type="submit" className="btn primary">Send Message</button>
        </form>

        {messageSent && (
          <p className="success">Thanks! Your message is sent (demo only).</p>
        )}
      </section>

      <section className="card">
        <Link href="/" className="btn">Back to Home</Link>
      </section>
    </main>
  );
}

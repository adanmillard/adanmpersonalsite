export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Adan M. Built with Next.js.</p>
      <p>
        <a href="https://github.com/adanmillard" target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </footer>
  );
}

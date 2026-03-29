type CardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <article className={`card ${className}`}>
      {title && <h2>{title}</h2>}
      {children}
    </article>
  );
}

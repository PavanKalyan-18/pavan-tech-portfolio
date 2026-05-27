export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-cyan)] mb-3">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-base md:text-lg">{description}</p>
      )}
    </div>
  );
}
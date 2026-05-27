import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[var(--accent-blue)] via-[var(--accent-violet)] to-[var(--accent-cyan)] transition-[width]"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      {progress > 0.2 && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 rounded-full glass-card p-3 hover:scale-110 transition glow-primary"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
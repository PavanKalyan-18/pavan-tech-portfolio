import { useEffect, useState } from "react";
import { Download, Mail, Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/pavan-hero.jpg";

const roles = [
  "Associate Software Engineer",
  "Full Stack Developer",
  "React.js Developer",
];

function useTyping() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(current.substring(0, deleting ? text.length - 1 : text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return text;
}

export function Hero() {
  const typed = useTyping();
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[var(--accent-blue)]/30 blur-[120px] animate-float-blob" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--accent-violet)]/25 blur-[140px] animate-float-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-[var(--accent-cyan)]/20 blur-[100px] animate-float-blob" style={{ animationDelay: "8s" }} />
      </div>
      {/* grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-medium mb-6">
            <Sparkles size={14} className="text-[var(--accent-cyan)]" />
            Available for opportunities
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Hi, I'm <span className="text-gradient">PavanKalyan M</span>
          </h1>
          <div className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-8">
            <span className="cursor-caret">{typed}</span>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Passionate software engineer focused on building scalable, user-friendly,
            and modern web applications with React.js and the modern web stack.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:scale-105 transition-transform glow-primary"
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 text-sm font-semibold hover:scale-105 transition-transform"
            >
              Contact me <ArrowRight size={16} />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Follow</span>
            <div className="h-px w-10 bg-border" />
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Mail, href: "mailto:pavan@example.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full glass-card p-3 hover:text-[var(--accent-cyan)] hover:-translate-y-1 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[var(--accent-blue)] via-[var(--accent-violet)] to-[var(--accent-cyan)] blur-2xl opacity-50 animate-float-y" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[var(--primary)]/30 glow-primary bg-gradient-hero">
              <img
                src={heroImg}
                alt="PavanKalyan M"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* floating chips */}
            <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 animate-float-y" style={{ animationDelay: "1s" }}>
              <div className="text-2xl font-bold text-gradient">1+</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Years Exp</div>
            </div>
            <div className="absolute -bottom-2 -left-6 glass-card rounded-2xl px-4 py-3 animate-float-y" style={{ animationDelay: "2.5s" }}>
              <div className="text-xs text-muted-foreground">Currently</div>
              <div className="text-sm font-semibold">@ Serenus Tech</div>
            </div>
            <div className="absolute top-1/2 -left-10 glass-card rounded-xl p-3 animate-float-y hidden md:block" style={{ animationDelay: "1.8s" }}>
              <code className="text-xs font-mono text-[var(--accent-cyan)]">&lt;/React&gt;</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
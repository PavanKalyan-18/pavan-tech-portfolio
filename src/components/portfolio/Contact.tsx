import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-sm outline-none focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/20 transition"
      />
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const info = [
    { Icon: Mail, label: "Email", value: "pavanklyn18@gmail.com", href: "mailto:pavanklyn18@gmail.com" },
    { Icon: MapPin, label: "Location", value: "Whitefield, Bangalore, Karnataka, India", href: undefined },
    { Icon: Linkedin, label: "LinkedIn", value: "/in/pavan-kalyan-1711b43a5", href: "https://www.linkedin.com/in/pavan-kalyan-1711b43a5/" },
    { Icon: Github, label: "GitHub", value: "@PavanKalyan-18", href: "https://github.com/PavanKalyan-18" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient">work together</span></>}
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />
        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            {info.map(({ Icon, label, value, href }) => {
              const inner = (
                <div className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-[var(--accent-cyan)]">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="text-sm font-semibold">{value}</div>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="block">{inner}</a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="lg:col-span-3 glass-card rounded-3xl p-7 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="What's this about?" />
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-sm outline-none focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/20 transition"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:scale-105 transition glow-primary"
            >
              {sent ? "Message sent ✓" : <>Send message <Send size={15} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
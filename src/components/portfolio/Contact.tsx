import { useState } from "react";
import { Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { contactInfo } from "./resumeData";

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>

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
  const info = contactInfo;

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's <span className="text-gradient">Connect</span>
            </>
          }
          description="Interested in working together or discussing a Data Analyst opportunity? Feel free to reach out."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-4">
            {info.map(({ Icon, label, value, href }) => {
              const inner = (
                <div className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-[var(--accent-cyan)]">
                    <Icon size={18} />
                  </div>

                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {label}
                    </div>

                    <div className="text-sm font-semibold break-all">
                      {value}
                    </div>
                  </div>
                </div>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);

              setTimeout(() => {
                setSent(false);
              }, 3000);
            }}
            className="lg:col-span-3 glass-card rounded-3xl p-7 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Name"
                name="name"
                placeholder="Your name"
              />

              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@email.com"
              />
            </div>

            <Field
              label="Subject"
              name="subject"
              placeholder="Data Analyst opportunity"
            />

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Write your message..."
                className="mt-2 w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-sm outline-none focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/20 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:scale-105 transition glow-primary"
            >
              {sent ? (
                "Message received ✓"
              ) : (
                <>
                  Send message
                  <Send size={15} />
                </>
              )}
            </button>

            <p className="text-xs text-muted-foreground">
              This contact form is currently for demonstration purposes.
              You can reach me directly through the email or LinkedIn links.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
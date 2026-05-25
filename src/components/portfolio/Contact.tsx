import { Mail, Linkedin, Github } from "lucide-react";

const EMAIL = "nayandave.2023@gmail.com";
const GITHUB = "https://github.com/Nayan302005";
const LINKEDIN = "https://www.linkedin.com/in/nayan-dave-124418351/";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Let's connect
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          I am open to discussing data analysis opportunities, collaborations, or answering
          questions about my work. Feel free to reach out through any of the channels below.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center rounded-md border border-border bg-card p-2.5 text-foreground hover:border-primary/40 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}


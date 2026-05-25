import { ArrowRight, BarChart3, Database, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pb-14 pt-36 sm:pt-32 md:pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 via-background to-background" />
      <div className="absolute left-1/2 top-[32%] -z-10 h-[360px] w-[min(680px,90vw)] -translate-x-1/2 rounded-full blur-3xl opacity-20" style={{ background: "var(--gradient-hero)" }} />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="mb-10 flex items-center justify-center gap-4 sm:gap-6">
          {[BarChart3, Database, Code2].map((Icon, i) => (
            <div
              key={i}
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-card text-primary shadow-[var(--shadow-card)] ring-1 ring-border sm:h-24 sm:w-24 md:h-28 md:w-28"
            >
              <Icon className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12" strokeWidth={2.1} />
            </div>
          ))}
        </div>

        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-normal text-foreground sm:text-5xl md:text-7xl">
          Turning Data into
          <br />
          Business Insights
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Data analyst specializing in SQL, Python, and Power BI. I transform complex
          datasets into clear, actionable recommendations that drive business decisions.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

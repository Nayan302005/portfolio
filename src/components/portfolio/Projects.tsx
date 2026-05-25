import { Github } from "lucide-react";

const projects = [
  {
    title: "HR Analytics Dashboard",
    tools: ["Power BI"],
    description:
      "Built an HR analytics dashboard to analyze employee attrition, demographics, salary distribution, and job roles for data-driven workforce decisions.",
    github: "https://github.com/Nayan302005/HR-InsightX",
  },
  {
    title: "Linde Supply Chain Analytics",
    tools: ["Python", "Pandas", "Matplotlib", "NumPy", "MySQL", "Power BI", "Seaborn"],
    description:
      "Analyzed inventory shortages • delivery performance • manufacturing utilization • forecast accuracy • product revenue • customer priority insights.",
    github: "https://github.com/Nayan302005/Linde-Supply-Chain-Analytics",
  },
  {
    title: "IBM Customer Churn Analysis",
    tools: ["Python", "Pandas", "Matplotlib", "NumPy", "Seaborn"],
    description:
      "Analyzed telecom customer churn behavior to identify patterns, trends, and actionable retention insights to reduce revenue loss.",
    github: "https://github.com/Nayan302005/IBM-Customer-Churn-Analysis",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
          Featured projects
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background px-3 py-0.5 text-xs font-medium text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{p.description}</p>

              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Github className="h-4 w-4" />
                GitHub Link
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

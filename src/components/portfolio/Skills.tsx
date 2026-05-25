import { Code2, Library, Wrench, Lightbulb, Sparkles } from "lucide-react";

const groups = [
  { icon: Code2, title: "Programming", items: ["SQL", "Python"] },
  { icon: Library, title: "Libraries", items: ["Pandas", "NumPy", "Matplotlib"] },
  { icon: Wrench, title: "Tools", items: ["Power BI"] },
  { icon: Sparkles, title: "AI Tools", items: ["ChatGPT"] },
  { icon: Lightbulb, title: "Concepts", items: ["Data Cleaning", "EDA", "Data Visualization"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Skills &amp; expertise
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-secondary inline-flex p-2 text-primary">
                  <g.icon className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-foreground">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

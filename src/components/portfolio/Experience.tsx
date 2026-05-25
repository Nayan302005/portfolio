import { GraduationCap } from "lucide-react";

const items = [
  {
    title: "Python Bootcamp",
    org: "Lets Upgrade",
    description:
      "Completed a Core Python Bootcamp focusing on programming fundamentals, including data types, control structures, functions, and problem-solving.",
  },
  {
    title: "IR4.0 Technologies",
    org: "TechSaksham",
    description:
      "Completed the IR 4.0 Technologies program by TechSaksham, gaining foundational knowledge in Python, SQL, and basics of Artificial Intelligence. Developed problem-solving skills and hands-on experience in writing queries, understanding data structures, and exploring AI concepts relevant to data-driven applications.",
  },
  {
    title: "Python Backend Development",
    org: "TOPS Technologies",
    description:
      "Completed a Python Backend Development course at TOPS Technologies, covering Python, SQL, and Django. Gained hands-on experience in building dynamic web applications, working with databases, and implementing backend logic using Django framework.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Education &amp; certifications
        </h2>

        <div className="mt-12 space-y-8">
          {items.map((it) => (
            <div key={it.title} className="flex gap-5">
              <div className="shrink-0">
                <div className="rounded-xl bg-secondary p-3 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground">{it.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{it.org}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {it.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

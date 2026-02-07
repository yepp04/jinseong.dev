"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    key: "frontend",
    icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Vue.js (2 & 3)", level: 90 },
      { name: "Nuxt.js", level: 75 },
      { name: "JavaScript", level: 95 },
    ],
  },
  {
    key: "stateManagement",
    icon: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
    skills: [
      { name: "Redux", level: 80 },
      { name: "Vuex", level: 85 },
      { name: "Pinia", level: 80 },
      { name: "React Query", level: 75 },
    ],
  },
  {
    key: "styling",
    icon: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42",
    skills: [
      { name: "SCSS / SASS", level: 88 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Quasar", level: 70 },
    ],
  },
  {
    key: "tools",
    icon: "M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "Git / GitHub / GitLab", level: 88 },
      { name: "Jenkins / CI·CD", level: 70 },
      { name: "Nginx", level: 65 },
      { name: "Playwright / Testing", level: 72 },
    ],
  },
];

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--card)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium text-[var(--accent)] tracking-widest uppercase mb-3 text-center">
            {t("subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
            {t("title")}
          </h2>
          <p className="text-lg text-[var(--muted)] text-center max-w-2xl mx-auto mb-16">
            {t("description")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <AnimatedSection key={group.key} delay={gi * 0.1}>
              <div className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={group.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">
                    {t(group.key as "frontend" | "stateManagement" | "styling" | "tools")}
                  </h3>
                </div>
                <div className="space-y-3">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-[var(--muted)]">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: gi * 0.1 + si * 0.05, ease: "easeOut" }}
                          className="h-full rounded-full bg-[var(--accent)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

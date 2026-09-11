import Reveal from "./Reveal";

const TOOLS = ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Final Cut Pro"];
const SKILLS = ["Color Grading", "Sound Mixing", "Motion Graphics", "Multi-Cam Editing"];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[960px] px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#52525B]">
          Capabilities
        </p>
        <h2 className="mt-3 text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#111111] sm:text-[30px] md:text-[36px]">
          Tech Stack &amp; Skills
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Reveal className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#52525B]">
            Tools
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {TOOLS.map((tool) => (
              <li key={tool} className="flex items-center gap-3 text-[16px] text-[#111111]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#52525B]">
            Core Skills
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {SKILLS.map((skill) => (
              <li key={skill} className="flex items-center gap-3 text-[16px] text-[#111111]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

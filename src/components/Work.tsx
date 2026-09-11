import Reveal from "./Reveal";
import { ArrowUpRightIcon } from "./Icons";

const PROJECTS = [
  {
    title: "Apex Athletics",
    category: "Commercial Brand Film",
    tools: "Premiere Pro, DaVinci Resolve",
    image: "/images/project-apex.jpg",
  },
  {
    title: "Neon Horizon",
    category: "Music Video",
    tools: "After Effects, Cinema 4D",
    image: "/images/project-neon.jpg",
  },
  {
    title: "Uncharted Trails",
    category: "Travel Documentary",
    tools: "Final Cut Pro, Audition",
    image: "/images/project-uncharted.jpg",
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[960px] px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#52525B]">
          Featured Work
        </p>
        <h2 className="mt-3 text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#111111] sm:text-[30px] md:text-[36px]">
          Reel Showcase
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <a
              href="#"
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-200 ease-out hover:scale-[1.02]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#111111] opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                  <ArrowUpRightIcon className="h-4 w-4" />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#52525B]">
                  {project.category}
                </p>
                <h3 className="text-lg font-bold tracking-[-0.01em] text-[#111111]">
                  {project.title}
                </h3>
                <p className="mt-auto pt-3 text-sm leading-[1.65] text-[#52525B]">
                  {project.tools}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

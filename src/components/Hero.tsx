import RoleSwitcher from "./RoleSwitcher";
import Reveal from "./Reveal";
import {
  VimeoIcon,
  YoutubeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PlayIcon,
  DownloadIcon,
} from "./Icons";

const SOCIALS = [
  { label: "Vimeo", href: "https://vimeo.com/placeholder", icon: VimeoIcon },
  { label: "YouTube", href: "https://youtube.com/@placeholder", icon: YoutubeIcon },
  { label: "Instagram", href: "https://instagram.com/placeholder", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/placeholder", icon: LinkedinIcon },
  { label: "Email", href: "mailto:alex.vance.editor@example.com", icon: MailIcon },
];

export default function Hero({ onPlayReel }: { onPlayReel: () => void }) {
  return (
    <section
      id="showreel"
      className="mx-auto grid max-w-[960px] grid-cols-1 items-center gap-12 px-4 pb-20 pt-10 sm:px-6 sm:pt-16 md:grid-cols-[minmax(0,320px)_1fr] md:gap-10 md:pt-20"
    >
      {/* Left column: avatar + socials */}
      <Reveal className="flex flex-col items-center gap-7 md:items-start">
        <div className="relative">
          <span className="absolute -inset-3 rounded-full border-2 border-[#F97316]/70" />
          <span className="absolute -inset-6 rounded-full border border-[#F97316]/30" />
          <img
            src="/images/avatar.jpg"
            alt="Alex Vance, video editor and colorist"
            className="relative h-40 w-40 rounded-full border-4 border-white object-cover shadow-sm sm:h-44 sm:w-44"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 md:justify-start">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#111111] shadow-sm ring-1 ring-black/5 transition-transform duration-200 ease-out hover:scale-[1.08] hover:text-[#2563EB]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Reveal>

      {/* Right column: header + bio */}
      <Reveal delay={100} className="text-center md:text-left">
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#52525B]">
          Visual Storyteller
        </p>
        <h1 className="mt-4 text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-[#111111] sm:text-[32px] md:text-[40px]">
          Alex Vance —{" "}
          <span className="block md:inline">
            <RoleSwitcher />
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.65] text-[#52525B] md:mx-0 sm:text-[18px]">
          I&rsquo;m a post-production specialist and editor crafting high-impact
          commercial campaigns, narrative films, and dynamic social content.
          Specializing in seamless pacing, sound design, and cinematic color
          grading.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <button
            type="button"
            onClick={onPlayReel}
            className="flex items-center gap-2.5 rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.99]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F97316]">
              <PlayIcon className="h-3 w-3 text-white" />
            </span>
            Play Showreel
          </button>

          <a
            href="/rate-card.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111111] shadow-sm ring-1 ring-black/5 transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.99]"
          >
            <DownloadIcon className="h-4 w-4" />
            Download Rate Card &amp; Deck
          </a>
        </div>
      </Reveal>
    </section>
  );
}

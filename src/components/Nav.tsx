import { useState } from "react";

const LINKS = [
  { label: "Showreel", href: "#showreel" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto flex max-w-[960px] items-center justify-between px-4 py-4 sm:px-6">
        {/* Left: monogram pill */}
        <div className="flex items-center gap-2.5 rounded-full bg-white/80 py-1.5 pl-1.5 pr-4 shadow-sm backdrop-blur-md ring-1 ring-black/5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-xs font-bold tracking-tight text-white">
            PS
            <span className="absolute -inset-0.5 -z-10 rounded-full border-2 border-[#F97316]" />
          </span>
          <span className="text-[15px] font-bold tracking-tight text-[#111111]">
            Pratham Sadavarti.
          </span>
        </div>

        {/* Right: hamburger */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 shadow-sm ring-1 ring-black/5 backdrop-blur-md transition-transform duration-200 ease-out hover:scale-[1.06] active:scale-95"
          >
            <span className="flex flex-col items-center gap-[5px]">
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#111111] transition-transform duration-200 ease-out ${
                  open ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#111111] transition-transform duration-200 ease-out ${
                  open ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          {open && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setOpen(false)}
              />
              <nav className="absolute right-0 z-50 mt-3 w-52 overflow-hidden rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/5 animate-[fadeIn_200ms_ease-out]">
                {LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium text-[#18181B] transition-colors duration-200 hover:bg-[#E5E5E5]"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

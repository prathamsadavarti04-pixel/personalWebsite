export default function Footer() {
  return (
    <footer className="mx-auto max-w-[960px] px-4 pb-10 pt-4 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-black/10 py-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-[#52525B]">
          © 2026 Alex Vance. Post-Production &amp; Editorial.
        </p>
        <div className="flex items-center gap-5 text-sm font-medium text-[#2563EB]">
          <a href="#showreel" className="transition-opacity duration-200 hover:opacity-80">
            Showreel
          </a>
          <a href="#work" className="transition-opacity duration-200 hover:opacity-80">
            Work
          </a>
          <a href="#contact" className="transition-opacity duration-200 hover:opacity-80">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

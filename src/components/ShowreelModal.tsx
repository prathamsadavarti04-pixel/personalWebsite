import { useEffect } from "react";

export default function ShowreelModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111]/70 p-4 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Showreel player"
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-[#111111] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close showreel"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-200 ease-out hover:scale-[1.06] hover:bg-white/20"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <path d="M18 6 6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <div className="relative flex aspect-video w-full items-center justify-center bg-gradient-to-br from-[#1c1c1f] via-[#111111] to-[#0b0b0c]">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F97316] shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="max-w-xs px-6 text-sm leading-relaxed text-white/70">
              2026 Directors&rsquo; Showreel &mdash; commercial, narrative &amp; social edits.
              <br />
              <span className="text-white/40">(Sample player &mdash; connect your Vimeo embed here)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

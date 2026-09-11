import Reveal from "./Reveal";
import { MailIcon, ArrowUpRightIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[960px] px-4 py-16 sm:px-6 sm:py-20">
      <Reveal className="overflow-hidden rounded-3xl bg-white px-6 py-12 text-center shadow-sm ring-1 ring-black/5 sm:px-12 sm:py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#52525B]">
          Let&rsquo;s Work Together
        </p>
        <h2 className="mx-auto mt-4 max-w-lg text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#111111] sm:text-[30px] md:text-[36px]">
          Have a project in mind? Let&rsquo;s make it unforgettable.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-[1.65] text-[#52525B]">
          Currently booking commercial, music video, and documentary edits
          for Q1 2026.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:alex.vance.editor@example.com"
            className="flex items-center gap-2.5 rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.99]"
          >
            <MailIcon className="h-4 w-4" />
            alex.vance.editor@example.com
          </a>

          <a
            href="mailto:alex.vance.editor@example.com?subject=Booking%20Inquiry"
            className="flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.99]"
          >
            Booking Inquiry
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

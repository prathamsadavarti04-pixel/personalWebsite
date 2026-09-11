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
          Let&rsquo;s bring your next story to life.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-[1.65] text-[#52525B]">
          Based in Mumbai, India and available for video editing and graphic design projects.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:prathamsadavarti@gmail.com"
            className="flex items-center gap-2.5 rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.99]"
          >
            <MailIcon className="h-4 w-4" />
            prathamsadavarti@gmail.com
          </a>

          <a
            href="mailto:prathamsadavarti@gmail.com?subject=Project%20Inquiry"
            className="flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.99]"
          >
            Start a Project
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-[#52525B]">
          <a href="tel:+917219801721" className="transition-colors hover:text-[#2563EB]">
            +91 7219801721
          </a>
          <span aria-hidden="true" className="hidden text-black/20 sm:inline">•</span>
          <span>Mumbai, India</span>
        </div>
      </Reveal>
    </section>
  );
}

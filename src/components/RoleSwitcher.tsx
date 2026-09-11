import { useEffect, useState } from "react";

const ROLES = [
  "Commercial Editor",
  "Colorist",
  "Motion Designer",
  "VFX Artist",
  "Video Editor",
];

export default function RoleSwitcher() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(false);
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length);
        setAnimating(true);
      }, 350);
      return () => clearTimeout(timeout);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-grid h-[1.2em] overflow-hidden align-bottom">
      {/*
        Invisible stack: every role is rendered on top of every other role
        (same grid cell), so the grid track auto-sizes to the widest word.
        This reserves a fixed width up front and stops the layout shift
        that happens when the animated word below changes length.
      */}
      {ROLES.map((role) => (
        <span
          key={`ghost-${role}`}
          aria-hidden="true"
          className="invisible col-start-1 row-start-1 whitespace-nowrap"
        >
          {role}
        </span>
      ))}

      <span
        key={index}
        className={`col-start-1 row-start-1 inline-block whitespace-nowrap text-[#2563EB] transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          animating
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0"
        }`}
      >
        {ROLES[index]}
      </span>
    </span>
  );
}

"use client";

import { type MouseEvent, type ReactNode, useEffect, useState } from "react";

type Theme = "system" | "dark" | "light";

export function SmoothScrollLink({
  href,
  className,
  activeClassName,
  sectionKey,
  children,
}: {
  href: string;
  className?: string;
  activeClassName?: string;
  sectionKey?: string;
  children: ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!sectionKey) {
      return;
    }

    const updateActiveSection = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]:not(#top)")
      );
      const current = sections
        .filter((section) => section.getBoundingClientRect().top <= 120)
        .at(-1);

      setActiveSection(current?.id ?? sections[0]?.id ?? "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionKey]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const hashIndex = href.indexOf("#");

    if (
      hashIndex === -1 ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const pathname = window.location.pathname;

    if (pathname !== "/" && pathname !== "/index.html") {
      return;
    }

    const targetId = href.slice(hashIndex + 1);
    event.preventDefault();

    if (!targetId || targetId === "top") {
      setActiveSection("top");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setActiveSection(targetId);
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    window.history.replaceState(null, "", `${pathname}${window.location.search}`);
  }

  const classes =
    sectionKey && activeClassName && activeSection === sectionKey
      ? [className, activeClassName].filter(Boolean).join(" ")
      : className;

  return (
    <a className={classes} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;

  if (theme === "dark") {
    root.classList.add("dark");
    return;
  }

  if (theme === "light") {
    root.classList.remove("dark");
    return;
  }

  root.classList.toggle("dark", window.matchMedia("(prefers-color-scheme: dark)").matches);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    const saved = window.localStorage.getItem("theme") as Theme | null;
    return saved === "dark" || saved === "light" || saved === "system" ? saved : "system";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (theme !== "system") {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => applyTheme("system");
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [theme]);

  function cycleTheme() {
    const next = theme === "system" ? "dark" : theme === "dark" ? "light" : "system";
    setTheme(next);
    window.localStorage.setItem("theme", next);
    applyTheme(next);
  }

  return (
    <button
      id="light-toggle"
      title="Change theme"
      type="button"
      aria-label="Change theme"
      data-theme-state={theme}
      onClick={cycleTheme}
    >
      <i className="theme-icon theme-icon-system" aria-hidden="true" />
      <i className="theme-icon theme-icon-dark" aria-hidden="true" />
      <i className="theme-icon theme-icon-light" aria-hidden="true" />
    </button>
  );
}

export function ScrollProgress() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setValue(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <progress id="progress" value={value} max={100} />;
}

export function MobileNavToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar top-bar" />
        <span className="icon-bar middle-bar" />
        <span className="icon-bar bottom-bar" />
      </button>
      <span className="nav-open-state" data-open={open} />
    </>
  );
}

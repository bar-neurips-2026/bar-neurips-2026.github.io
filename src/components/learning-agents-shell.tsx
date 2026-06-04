import Image from "next/image";
import type { ReactNode } from "react";
import {
  MobileNavToggle,
  ScrollProgress,
  SmoothScrollLink,
  ThemeToggle,
} from "@/components/learning-agents-client";
import { siteContent, type Organizer } from "@/data/siteContent";

type RouteKey = (typeof siteContent.navigation)[number]["key"];

export function SiteShell({
  active,
  showBrand = true,
  children,
}: {
  active: RouteKey;
  showBrand?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <header>
        <nav id="navbar" className="site-navbar" role="navigation">
          <div className="site-container nav-container">
            {showBrand ? (
              <SmoothScrollLink className="navbar-brand" href="/#top">
                {siteContent.title}
              </SmoothScrollLink>
            ) : null}
            <MobileNavToggle />
            <div className="navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {siteContent.navigation.map((item) => (
                  <li
                    key={item.href}
                    className={item.key === active ? "nav-item active" : "nav-item"}
                  >
                    <SmoothScrollLink className="nav-link" href={item.href}>
                      {item.label}{" "}
                      {item.key === active ? <span className="sr-only">(current)</span> : null}
                    </SmoothScrollLink>
                  </li>
                ))}
                <li className="toggle-container">
                  <ThemeToggle />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ScrollProgress />
      </header>

      {children}

      <footer className="site-footer" role="contentinfo">
        <div className="site-container footer-container">
          {siteContent.footer.split("\n").map((line) => (
            <span className="footer-line" key={line}>
              {line}
            </span>
          ))}
        </div>
      </footer>
    </>
  );
}

export function PageFrame({
  title,
  description,
  hideHeader = false,
  children,
}: {
  title: string;
  description: string;
  hideHeader?: boolean;
  children: ReactNode;
}) {
  return (
    <main className="site-container page-container" role="main">
      <div className="post">
        <header className={hideHeader ? "post-header post-header-hidden" : "post-header"}>
          <h1 className="post-title">{title}</h1>
          <p className="post-description">{description}</p>
        </header>
        <article>{children}</article>
      </div>
    </main>
  );
}

export function OrganizerCard({ organizer }: { organizer: Organizer }) {
  return (
    <a
      href={organizer.website}
      target="_blank"
      rel="external nofollow noopener"
      className="person-link"
    >
      <div className="person">
        <Image
          src={organizer.image.src}
          alt={organizer.image.alt}
          width={88}
          height={88}
        />
        <p className="person-name">{organizer.name}</p>
        <p className="person-aff">{organizer.shortTitle}</p>
      </div>
    </a>
  );
}

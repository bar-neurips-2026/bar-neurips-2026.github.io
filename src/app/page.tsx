import { OrganizerCard, PageFrame, SiteShell } from "@/components/learning-agents-shell";
import { siteContent } from "@/data/siteContent";

export default function Home() {
  return (
    <SiteShell active="home" showBrand={false}>
      <PageFrame title={siteContent.title} description={siteContent.slogan} hideHeader>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">{siteContent.heroBadge}</div>
            <h1>{siteContent.title}</h1>
            <p className="hero-slogan">{siteContent.slogan}</p>
            <div className="hero-meta">
              <span className="hero-meta-item">
                <span className="meta-icon" aria-hidden="true">
                  pin
                </span>{" "}
                {siteContent.venue}
              </span>
              <span className="hero-meta-item">
                <span className="meta-icon" aria-hidden="true">
                  cal
                </span>{" "}
                {siteContent.date}
              </span>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>{siteContent.sections.about}</h2>
          <p>{siteContent.about}</p>
        </section>

        <section className="section">
          <h2>{siteContent.sections.topics}</h2>
          <ul className="topics-list">
            {siteContent.topics.map((area) => (
              <li key={area.title}>
                <strong>{area.title}</strong> — {area.question}
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>{siteContent.speakers.heading}</h2>
          <p className="section-note">{siteContent.speakers.text}</p>
        </section>

        <section className="section">
          <h2>{siteContent.sections.organizers}</h2>
          <div className="people">
            {siteContent.organizers.map((organizer) => (
              <OrganizerCard key={organizer.name} organizer={organizer} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2>{siteContent.sections.importantDates}</h2>
          <ul className="dates-list">
            {siteContent.importantDates.map(([label, value]) => (
              <li key={label}>
                <span className="label">{label}</span>
                <span className="value">{value}</span>
              </li>
            ))}
          </ul>
        </section>
      </PageFrame>
    </SiteShell>
  );
}

import Image from "next/image";
import { PageFrame, SiteShell } from "@/components/learning-agents-shell";
import { siteContent } from "@/data/siteContent";

export default function SchedulePage() {
  const page = siteContent.pages.schedule;
  const [timeColumn, sessionColumn] = siteContent.scheduleColumns;

  return (
    <SiteShell active="schedule">
      <PageFrame title={page.title} description={page.description}>
        <p className="schedule-note">{page.note}</p>

        <section className="subpage-section">
          <h2>Tentative Program</h2>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>{timeColumn}</th>
                <th>{sessionColumn}</th>
              </tr>
            </thead>
            <tbody>
              {siteContent.schedule.map(([time, event]) => (
                <tr key={`${time}-${event}`}>
                  <td className="time">{time}</td>
                  <td className={event.includes("Break") ? "event event-break" : "event"}>
                    {event}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="subpage-section">
          <h2>{siteContent.speakers.heading}</h2>
          <p className="section-note">{siteContent.speakers.note}</p>
          <div className="speakers-grid">
            {siteContent.speakers.people.map((speaker) => (
              <a
                className="organizer-link"
                href={speaker.website}
                key={speaker.name}
                target="_blank"
                rel="external nofollow noopener"
              >
                <div className="speaker">
                  <div className="speaker-avatar">
                    <Image
                      src={speaker.image.src}
                      alt={speaker.image.alt}
                      width={72}
                      height={72}
                    />
                  </div>
                  <div className="speaker-name">{speaker.name}</div>
                  <div className="speaker-affiliation">{speaker.shortTitle}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="subpage-section">
          <h2>Accepted Papers</h2>
          <p className="placeholder">{page.acceptedPapersText}</p>
        </section>
      </PageFrame>
    </SiteShell>
  );
}

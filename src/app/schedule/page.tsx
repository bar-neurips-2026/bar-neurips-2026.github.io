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
          <p className="placeholder">{siteContent.speakers.text}</p>
        </section>

        <section className="subpage-section">
          <h2>Accepted Papers</h2>
          <p className="placeholder">{page.acceptedPapersText}</p>
        </section>
      </PageFrame>
    </SiteShell>
  );
}

import { OrganizerCard, PageFrame, SiteShell } from "@/components/learning-agents-shell";
import { siteContent } from "@/data/siteContent";

function MultilineText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, index) => (
        <span key={line}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </>
  );
}

export default function Home() {
  const callForPapers = siteContent.pages.callForPapers;
  const schedule = siteContent.pages.schedule;
  const organizers = siteContent.pages.organizers;
  const [timeColumn, sessionColumn] = siteContent.scheduleColumns;

  return (
    <SiteShell active="about">
      <PageFrame title={siteContent.title} description={siteContent.slogan} hideHeader>
        <section className="hero" id="top">
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

        <section className="section" id="about">
          <h2>{siteContent.sections.about}</h2>
          <p>{siteContent.about}</p>
        </section>

        <section className="section" id="topics">
          <h2>{siteContent.sections.topics}</h2>
          <p>{siteContent.topicIntro}</p>
          <ol className="home-topics-list">
            {siteContent.topics.map((area) => (
              <li className="home-topic" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.question}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="keynote-speakers">
          <h2>{siteContent.speakers.heading}</h2>
          <p className="section-note">{siteContent.speakers.note}</p>
          <div className="people">
            {siteContent.speakers.people.map((speaker) => (
              <OrganizerCard key={speaker.name} organizer={speaker} />
            ))}
          </div>
        </section>

        <section className="section" id="call-for-papers">
          <h2>{callForPapers.title}</h2>
          <p>{callForPapers.intro}</p>

          <div className="inline-block-section">
            <h3>{siteContent.sections.topics}</h3>
            <div className="cfp-topics-columns">
              {callForPapers.topicColumns.map((column, index) => (
                <ul className="cfp-topics-list" key={`cfp-column-${index + 1}`}>
                  {column.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="inline-block-section">
            <h3>Submission Guidelines</h3>
            <table className="info-table">
              <tbody>
                {callForPapers.submissionGuidelines.map(([label, value]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>
                      <MultilineText text={value} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section" id="important-dates">
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

        <section className="section" id="schedule">
          <h2>{siteContent.sections.schedule}</h2>
          <p className="schedule-note">{schedule.note}</p>
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

          <div className="inline-block-section">
            <h3>Accepted Papers</h3>
            <p className="placeholder">{schedule.acceptedPapersText}</p>
          </div>
        </section>

        <section className="section" id="organizers">
          <h2>{siteContent.sections.organizers}</h2>
          <div className="people">
            {siteContent.organizers.map((organizer) => (
              <OrganizerCard key={organizer.name} organizer={organizer} />
            ))}
          </div>

          <div className="inline-block-section" id="contact">
            <h3>{organizers.contactHeading}</h3>
            <p>{organizers.contactText}</p>
            <p className="contact-emails">
              {organizers.contactEmails.map((email) => (
                <a className="contact-link" href={`mailto:${email}`} key={email}>
                  {email}
                </a>
              ))}
            </p>
          </div>
        </section>
      </PageFrame>
    </SiteShell>
  );
}

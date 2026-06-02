import { PageFrame, SiteShell } from "@/components/learning-agents-shell";
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

export default function CallForPapersPage() {
  const page = siteContent.pages.callForPapers;

  return (
    <SiteShell active="call-for-papers">
      <PageFrame title={page.title} description={page.description}>
        <p className="cfp-intro">{page.intro}</p>

        <section className="cfp-section">
          <h2>{siteContent.sections.topics}</h2>
          <div className="cfp-topics-columns">
            {page.topicColumns.map((column, index) => (
              <ul className="cfp-topics-list" key={`cfp-column-${index + 1}`}>
                {column.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section className="cfp-section">
          <h2>Submission Guidelines</h2>
          <table className="info-table">
            <tbody>
              {page.submissionGuidelines.map(([label, value]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>
                    <MultilineText text={value} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="cfp-section">
          <h2>{siteContent.sections.importantDates}</h2>
          <table className="info-table">
            <tbody>
              {siteContent.importantDates.map(([label, value]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">{page.note}</p>
        </section>
      </PageFrame>
    </SiteShell>
  );
}

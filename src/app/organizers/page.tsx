import Image from "next/image";
import { PageFrame, SiteShell } from "@/components/learning-agents-shell";
import { siteContent } from "@/data/siteContent";

export default function OrganizersPage() {
  const page = siteContent.pages.organizers;

  return (
    <SiteShell active="organizers">
      <PageFrame title={page.title} description={page.description}>
        <section className="subpage-section">
          <h2>{page.committeeHeading}</h2>
          <div className="organizers-grid">
            {siteContent.organizers.map((organizer) => (
              <a
                className="organizer-link"
                href={organizer.website}
                key={organizer.name}
                target="_blank"
                rel="external nofollow noopener"
              >
                <div className="organizer">
                  <div className="organizer-avatar">
                    <Image
                      src={organizer.image.src}
                      alt={organizer.image.alt}
                      width={72}
                      height={72}
                    />
                  </div>
                  <div className="organizer-name">{organizer.name}</div>
                  <div className="organizer-affiliation">{organizer.shortTitle}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="subpage-section">
          <h2>{page.contactHeading}</h2>
          <p>{page.contactText}</p>
          <p className="contact-emails">
            {page.contactEmails.map((email) => (
              <a className="contact-link" href={`mailto:${email}`} key={email}>
                {email}
              </a>
            ))}
          </p>
        </section>
      </PageFrame>
    </SiteShell>
  );
}

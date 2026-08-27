import Link from "next/link";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata = {
  title: "Sitemap - Nagarjuna ICT Club",
  description: "Complete site map of Nagarjuna ICT Club - Find all pages and sections of our website",
};

const sitemapData = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", url: "/", description: "Welcome to Nagarjuna ICT Club" },
      { name: "About", url: "/about", description: "Learn about our club and mission" },
      { name: "Contact", url: "/contact", description: "Get in touch with us" },
    ],
  },
  {
    title: "Events & Activities",
    links: [
      { name: "Events", url: "/events", description: "Upcoming and past events" },
      { name: "Gallery", url: "/gallery", description: "Photo gallery of our activities" },
    ],
  },
  {
    title: "Team & Members",
    links: [
      { name: "Team Members", url: "/members", description: "Meet our club members" },
      { name: "R&D Team", url: "/RandDTeam", description: "Research and Development team" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", url: "/blog", description: "Latest articles and updates" },
      { name: "Research Papers", url: "/pdf", description: "Academic papers and research" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <ScrollUp />
      
      {/* Page Header */}
      <section className="pt-28 lg:pt-32" role="banner" aria-labelledby="sitemap-title">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-[120px] xl:pb-[160px] 2xl:pb-[200px]">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-8/12 xl:w-7/12">
                <SectionTitle
                  title="Site Map"
                  paragraph="Complete navigation guide to all pages and sections of Nagarjuna ICT Club website. Find what you're looking for quickly and easily."
                  mb="44px"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="pb-16 pt-16 lg:pb-[120px] lg:pt-[120px]" role="main" aria-labelledby="sitemap-content">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3" role="navigation" aria-label="Site navigation sections">
            {sitemapData.map((section, index) => (
              <div 
                key={index} 
                className="rounded-lg border border-body-color/[.15] p-6 dark:border-white/[.15]"
                role="region"
                aria-labelledby={`section-${index}`}
              >
                <h3 
                  id={`section-${index}`}
                  className="mb-4 text-xl font-bold text-black dark:text-white"
                >
                  {section.title}
                </h3>
                <nav aria-label={`${section.title} navigation`}>
                  <ul className="space-y-3" role="list">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} role="listitem">
                        <Link
                          href={link.url}
                          className="group flex flex-col transition-all duration-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                          aria-describedby={`desc-${index}-${linkIndex}`}
                        >
                          <span className="font-semibold text-black dark:text-white group-hover:text-primary">
                            {link.name}
                          </span>
                          <span 
                            id={`desc-${index}-${linkIndex}`}
                            className="text-sm text-body-color dark:text-body-color-dark"
                          >
                            {link.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div 
            className="mt-16 rounded-lg bg-primary/[.05] p-8 dark:bg-primary/[.1]"
            role="complementary"
            aria-labelledby="accessibility-info"
          >
            <h3 
              id="accessibility-info"
              className="mb-4 text-xl font-bold text-black dark:text-white"
            >
              About This Sitemap
            </h3>
            <div className="text-body-color dark:text-body-color-dark">
              <p className="mb-4">
                This sitemap provides a comprehensive overview of all pages and sections available on the Nagarjuna ICT Club website. 
                It&apos;s designed to help both users and search engines navigate our site effectively.
              </p>
              <p className="mb-4">
                <strong>Accessibility Features:</strong>
              </p>
              <ul className="list-inside list-disc space-y-2" role="list">
                <li>Clear navigation structure with descriptive links</li>
                <li>Semantic HTML markup for screen readers</li>
                <li>High contrast design for better visibility</li>
                <li>Keyboard navigation support</li>
                <li>Descriptive text for each page</li>
                <li>ARIA labels and roles for assistive technologies</li>
                <li>Focus indicators for keyboard users</li>
              </ul>
            </div>
          </div>

          {/* Quick Navigation */}
          <div 
            className="mt-8 rounded-lg border border-body-color/[.15] p-6 dark:border-white/[.15]"
            role="navigation"
            aria-labelledby="quick-nav"
          >
            <h3 
              id="quick-nav"
              className="mb-4 text-lg font-bold text-black dark:text-white"
            >
              Quick Navigation
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="rounded bg-primary px-4 py-2 text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Go to homepage"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="rounded bg-primary px-4 py-2 text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Learn about our club"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="rounded bg-primary px-4 py-2 text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Contact us"
              >
                Contact
              </Link>
              <Link
                href="/events"
                className="rounded bg-primary px-4 py-2 text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="View our events"
              >
                Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
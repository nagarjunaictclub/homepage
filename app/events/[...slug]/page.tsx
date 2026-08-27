import eventData from "@/components/Events/eventData";
import EventDetailClient from "@/components/Events/EventDetailClient";
import { Metadata } from "next";

function findEventBySlug(slug: string | string[]) {
  if (!slug) return undefined;
  const slugString = Array.isArray(slug) ? slug.join("/") : slug;
  const decodedSlug = decodeURIComponent(slugString).trim();
  const normalizedSlug = decodedSlug.toLowerCase().replace(/[^a-z0-9]/g, "");

  return eventData.find((item) => {
    // 1. Match navigationPath (exact or normalized)
    if (
      item.navigationPath &&
      (item.navigationPath.toLowerCase() === decodedSlug.toLowerCase() ||
        item.navigationPath.toLowerCase().replace(/[^a-z0-9]/g, "") ===
        normalizedSlug)
    ) {
      return true;
    }

    // 2. Match title without spaces
    const titleNoSpaces = item.title.replaceAll(/\s/g, "").toLowerCase();
    if (titleNoSpaces === decodedSlug.toLowerCase()) {
      return true;
    }

    // 3. Match normalized title
    const normalizedTitle = item.title.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (normalizedTitle === normalizedSlug) {
      return true;
    }

    // 4. Match ID
    if (item.id.toString() === decodedSlug) {
      return true;
    }

    return false;
  });
}

type Props = {
  params: { slug: string | string[] } | Promise<{ slug: string | string[] }>;
  searchParams?:
  | { [key: string]: string | any }
  | Promise<{ [key: string]: string | any }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug;
  const slugString = Array.isArray(rawSlug)
    ? rawSlug.join("/")
    : rawSlug || "";
  const decodedSlug = decodeURIComponent(slugString).trim();
  const matchedEvent = findEventBySlug(slugString);

  if (!matchedEvent) {
    return {
      title: `${decodedSlug || "Event"} | Nagarjuna ICT Club`,
      description:
        "Explore events and tech workshops hosted by Nagarjuna ICT Club.",
    };
  }

  const cleanDescription = matchedEvent.description
    ? matchedEvent.description.replace(/<[^>]*>?/gm, "").slice(0, 160)
    : `Join us for ${matchedEvent.title} at Nagarjuna College of IT on ${matchedEvent.eventDate}.`;

  const canonicalUrl = `https://www.nagarjunaictclub.com/events/${matchedEvent.navigationPath || matchedEvent.title.replaceAll(/\s/g, "")
    }`;

  return {
    title: `${matchedEvent.title} | Nagarjuna ICT Club`,
    description: cleanDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${matchedEvent.title} | Nagarjuna ICT Club`,
      description: cleanDescription,
      url: canonicalUrl,
      siteName: "Nagarjuna ICT Club",
      images: [
        {
          url: matchedEvent.image,
          width: 1200,
          height: 630,
          alt: matchedEvent.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${matchedEvent.title} | Nagarjuna ICT Club`,
      description: cleanDescription,
      images: [matchedEvent.image],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const rawSlug = resolvedParams?.slug;
  const slugString = Array.isArray(rawSlug)
    ? rawSlug.join("/")
    : rawSlug || "";
  const decodedSlug = decodeURIComponent(slugString).trim();

  const matchedEvent = findEventBySlug(slugString);

  return (
    <EventDetailClient
      matchedEvent={matchedEvent}
      slug={decodedSlug}
      fallbackSearchParams={resolvedSearchParams}
    />
  );
}

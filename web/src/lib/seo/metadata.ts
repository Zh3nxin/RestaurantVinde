import type { Metadata } from "next";
import { getAbsoluteUrl, siteConfig, withBasePath } from "@/lib/seo/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const canonicalPath = withBasePath(path);
  const canonicalUrl = getAbsoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

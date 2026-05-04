const fallbackSiteUrl = "https://restaurant-vinde.vercel.app";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl;

const configuredBasePath = process.env.NEXT_BASE_PATH?.trim() || "";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function normalizeBasePath(path: string) {
  if (!path) return "";
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash.endsWith("/")
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;
}

export const siteConfig = {
  name: "Restaurant Vinde",
  siteUrl: normalizeSiteUrl(configuredSiteUrl),
  basePath: normalizeBasePath(configuredBasePath),
  locale: "da_DK",
  language: "da",
  defaultTitle: "Restaurant Vinde",
  titleTemplate: "%s | Restaurant Vinde",
  defaultDescription:
    'Kinesisk restaurant og Kina buffet ved Hasle Torv i Aarhus V. Oplev "all you can eat", sushi, take away og Dinner Transportable hos Restaurant Vinde.',
};

export function withBasePath(path: string) {
  if (!path || path === "/") {
    return siteConfig.basePath || "/";
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.basePath}${normalizedPath}`;
}

export function getAbsoluteUrl(path = "/") {
  return new URL(withBasePath(path), `${siteConfig.siteUrl}/`).toString();
}

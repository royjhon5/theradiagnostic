import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://theradiagnostics.com",
      lastModified: new Date(),
    },
  ];
}

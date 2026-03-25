export default function sitemap() {
  const baseUrl = "https://karan5599.tech";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

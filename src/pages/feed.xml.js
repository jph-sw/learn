import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const lf06 = await getCollection("lf06");
  return rss({
    // `<title>` field in output xml
    title: "learn - jan",
    // `<description>` field in output xml
    description: "a notes collection",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    stylesheet: "/styles.xsl",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: lf06.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/lf06/post/${post.slug}`,
    })),
    // (optional) inject custom xml
    customData: `<language>de</language>`,
  });
}

import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

// ** import components
import GroupedBasedBlogSlider from "./__components/category-based-blogs";
import Head from "@/components/shared/head";

// ** import seo
import { blogJsonLd, blogMetadata } from "../blog/__meta/BlogsPage";
import { CATEGORY_QUERY } from "./__configs/category_queries";

// ** import images
import headBg from "@/assets/images/pages/blogs/head.png";

export const metadata = blogMetadata;
const Blogs = async () => {
  const options = { next: { revalidate: 30 } };

  let allCategory: SanityDocument[] = [];
  try {
    allCategory = await client.fetch<SanityDocument[]>(
      CATEGORY_QUERY,
      {},
      options
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd),
        }}
      />
      <Head
        heading="Industry Insights"
        subHeading="Trends, Technology, and the Future of Logistics"
        bgImg={headBg}
      />
      {allCategory?.length > 0 && (
        <GroupedBasedBlogSlider categories={allCategory} />
      )}
    </div>
  );
};

export default Blogs;

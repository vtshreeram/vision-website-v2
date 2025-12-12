/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// ** import utils

// ** import blog sub components

// * import blog formate
import ArticleSkeleton from "../__components/ArticleSkeleton";
import markdownToHtml from "../_libs/markdownToHtml";
import { client } from "@/sanity/lib/client";

// ** import blog sub components

// * import blog formate
import PostFormatAudio from "../__components/PostFormatAudio";
import PostFormatGallery from "../__components/PostFormatGallery";
import PostFormatQuote from "../__components/PostFormatQuote";
import PostFormatVideo from "../__components/PostFormatVideo";
import PostFormatStandard from "../__components/PostFormatStandard";
// @ts-ignore
import toMarkdown from "@sanity/block-content-to-markdown";
import { SanityDocument } from "next-sanity";
import RelatedBlogs from "../__components/RelatedBlogs";
// import GroupedBlogs from '../__components/group-blogs'
// import ServerSideBlogGroup from '../__components/server-side-group'
import InstagramOne from "../__components/InstagramOne";

import { cn } from "../_libs/utils";
import ServerSideBlogGroup from "../__components/server-side-group";
import { blogFontConfig } from "../__configs/font";
import { Typography } from "@/components/ui/Typography";
import { POSTS_QUERY } from "../__configs/dyanamic_queries";

export default async function DynamicBlog({ postData }: any) {
  // console.log({ postData });
  const options = { next: { revalidate: 30 } };
  const serializers = {
    types: {
      code: (props: { node: { language: string; code: string } }) =>
        "```" + props.node.language + "\n" + props.node.code + "\n```",
    },
  };
  const markDownContent = toMarkdown(postData.content, {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    serializers,
  });
  // console.log(markDownContent);
  const content = await markdownToHtml(markDownContent || "");
  const socialMedia = postData?.author?.socialMedia;
  const socialKeys = socialMedia ? Object.keys(socialMedia) : [];
  const post = { ...postData, socialKeys, content, postFormat: "audio" };
  // console.log({ post });

  const allPosts = await client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    options
  );

  // const catePosts = allPosts?.filter(
  //   post => slugify(post?.cate) === slugify(postData.cate),
  // )

  // // check getCategoryData slug  & slug  is is same. if yes remove it
  // const index = catePosts.findIndex(post => post.slug === postData.slug)
  // if (index !== -1) {
  //   catePosts.splice(index, 1)
  // }

  if (!post || !allPosts) {
    return <ArticleSkeleton />;
  }

  console.log({
    post,
  });
  const PostFormatHandler = () => {
    if (post.postFormat === "video") {
      console.log("here");
      // @ts-ignore
      return <PostFormatVideo postData={post} allData={allPosts} />;
    } else if (post.postFormat === "audio") {
      console.log("here");
      return <PostFormatAudio postData={post} allData={allPosts} />;
    } else if (post.postFormat === "gallery") {
      console.log("here");
      // @ts-ignore
      return <PostFormatGallery postData={post} allData={allPosts} />;
    } else if (post.postFormat === "quote") {
      console.log("here");
      return <PostFormatQuote postData={post} allData={allPosts} />;
    } else {
      console.log("here");
      return <PostFormatStandard postData={post} allData={allPosts} />;
    }
  };

  return (
    <>
      <main className={cn(blogFontConfig.subtitle, "bg-white")}>
        <div className="blog-post mx-auto lg:max-w-7xl global-padding-container ">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
            <PostFormatHandler />
            <div className="sticky top-24 mt-14 px-3 lg:px-0 h-fit">
              <div className="space-y-20 pb-8">
                <RelatedBlogs
                  categoryName={post?.category?.name}
                  currentBlogId={post?._id}
                />
              </div>
            </div>
          </div>
          <div className="single-related-blog-trimuk px-3 lg:px-0">
            <Typography
              variant="Medium_H3"
              className={cn(
                "mb-6 mt-12 block !text-[31px]",
                blogFontConfig.title
              )}
            >
              Related Blogs
            </Typography>
            <ServerSideBlogGroup
              categoryName={post?.category?.name}
              currentBlogId={post?._id}
            />
          </div>
        </div>
        <div className="single-related-blog-trimuk !bg-primary/10">
          <div className="!mx-auto px-3 lg:!max-w-7xl lg:px-0">
            <InstagramOne parentClass="lg:block" />
          </div>
        </div>
      </main>
    </>
  );
}

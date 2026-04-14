/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import IcoSearch from "../../__icons/ico-search";
import { Input } from "../../__components/ui/input";
import { Typography } from "@/components/ui/Typography";
import Head from "@/components/shared/head";
import { cn } from "../../_libs/utils";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/shared/Breadcrumb";

import { useEffect, useState } from "react";

import { client } from "@/sanity/lib/client";
import { SanityDocument } from "sanity";

// ** import images
import headBg from "@/assets/images/pages/blogs/head.png";

//  React swiper **
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import IcoClear from "../../__icons/ico-clear";
// import { Avenir, Itc } from "@/app/fonts";
import Loader from "../../__components/Loader";
import BlogCard from "../../__components/blog-card";
import { blogFontConfig } from "../../__configs/font";
import { siteInfo } from "../../__configs/siteInfo";
import { CATEGORY_BLOG_QUERY, CATEGORY_QUERY, RECENT_QUERY } from "../queris";

// const CATEGORY_QUERY = `*[_type == "category"]{
//   _id,
//   name,
//   "slug": slug.current,
//   "blogCount": count(*[_type == "blog" && references(^._id)])
// }
// `
const CategoryBlogs = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [searchString, setSearchString] = useState("");
  const [categorySlug, setCategorySlug] = useState<string | null>(null);
  const [category, setCategory] = useState<SanityDocument[]>([]);
  const [loader, setLoader] = useState(false);
  const [categoryNotFound, setCategoryNotFound] = useState(false);
  const [querySearchQuery, setSearchQuery] = useState(CATEGORY_BLOG_QUERY);

  const options = { next: { revalidate: 30 } };

  const [posts, setPosts] = useState<SanityDocument[]>([]);

  console.log({
    tagPosts: category,
  });

  // Resolve params Promise
  useEffect(() => {
    params.then((resolved) => {
      setCategorySlug(resolved.slug);
    });
  }, [params]);

  useEffect(() => {
    setLoader(true);
    if (!categorySlug) {
      setLoader(false);
      return;
    }
    client
      .fetch<SanityDocument[]>(
        categorySlug === "recent" ? RECENT_QUERY : querySearchQuery,
        {
          searchTerm: searchString,
          categorySlug: categorySlug === "recent" ? "" : categorySlug,
        },
        options
      )
      .then((value) => {
        console.log(value);
        setPosts(value);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setPosts([]);
        setLoader(false);
      });
  }, [searchString, categorySlug, querySearchQuery]);

  useEffect(() => {
    setLoader(true);
    setCategoryNotFound(false);
    client
      .fetch<SanityDocument[]>(
        CATEGORY_QUERY,
        {
          slug: categorySlug,
        },
        options
      )
      .then((value) => {
        if (!value[0]) {
          setCategoryNotFound(false);
          setCategory([]);
        } else {
          setCategory(value);
        }
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setCategory([]);
        setLoader(false);
        setCategoryNotFound(true);
      });
  }, [categorySlug]);

  if (categoryNotFound && categorySlug !== "recent") {
    return notFound();
  }

  return (
    <div>
      <Head
        heading={categorySlug || "Category"}
        link="/blog"
        linkText="Blog"
        subHeading={categorySlug || "Category"}
        bgImg={headBg}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white global-padding-container">
        <div className="max-w-7xl mx-auto py-4 px-4 md:px-[52px]">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: categorySlug || "Category" },
            ]}
          />
        </div>
      </div>

      <div className="px-4 pt-20 md:px-[52px]">
        <div className="flex flex-col items-center justify-center gap-4">
          <Typography
            variant="Medium_H3"
            className={cn(
              blogFontConfig.title,
              `text-center capitalize text-secondary`
            )}
          >
            {categorySlug} Blogs
          </Typography>
          <Typography
            variant="Regular_H5"
            className={cn(
              blogFontConfig.subtitle,
              `text-center text-gray max-w-2xl mx-auto`
            )}
          >
            {siteInfo.description}
          </Typography>
          <div className="mb- relative mt-4 w-full md:w-[400px]">
            <Input
              className="w-full rounded-[4px] px-[14px] py-3 pr-10 placeholder:text-light_gray focus:!outline-primary focus-visible:!outline-primary"
              placeholder="Search logistics insights..."
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            {searchString ? (
              <IcoClear
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  setSearchString("");
                }}
              />
            ) : (
              <IcoSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-primary" />
            )}
          </div>
        </div>
      </div>

      {/* <div className='mx-auto mb-16 flex w-5/6 flex-wrap items-center justify-center gap-3  capitalize lg:w-3/4 '>
        {allCategories?.map((item, index) => (
          <Typography
            key={index}
            variant='Regular_H6'
            className={cn(
              `rounded-full bg-[#F1592B]/10 px-4  py-2 text-[#F1592B]`,
              categorySlug === item?.slug && 'bg-primary text-white',
            )}
            // @ts-ignore
            onClick={() => setCategorySlug(item?.slug)}
            link={`/blog/category/${item.slug}`}
          >
            {item?.name as string}
          </Typography>
        ))}
      </div> */}
      <div className="mt-20">
        {loader ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div className="!relative mx-auto mb-20 grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {posts.map((item, index) => (
              <BlogCard data={item} key={index} />
            ))}
          </div>
        )}
        {!loader && posts?.length < 1 && (
          <Typography
            variant="Medium_H4"
            className={cn(
              "block pb-7 text-center text-[31px]",
              blogFontConfig.title
            )}
          >
            No blog found
          </Typography>
        )}
      </div>
    </div>
  );
};

export default CategoryBlogs;

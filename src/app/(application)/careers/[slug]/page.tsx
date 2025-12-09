// ** import core package
import { notFound } from "next/navigation";

// ** import components
import JobDetailClient from "./job-detail-client";
import { Banner } from "@/components/shared";
import Head from "@/components/shared/head";

// **Import data
import { jobsData } from "../data";

// ** import images
import headBg from "@/assets/images/pages/careers/head-img.png";

const JobPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  // Convert the slug to a job title format (e.g., "back-end-developer" to "Back End Developer")
  const jobTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Find the job data matching the jobTitle
  const job = jobsData.find((job) => job.title === jobTitle);

  // If no job is found, return a 404 page
  if (!job) {
    return notFound();
  }

  return (
    <main>
      <Head
        heading="Careers"
        subHeading={jobTitle}
        bgImg={headBg}
        link="/careers"
        linkText="Careers"
      />
      <JobDetailClient job={job} />
      <Banner />
    </main>
  );
};

export default JobPage;

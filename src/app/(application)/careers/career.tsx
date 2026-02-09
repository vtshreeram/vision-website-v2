"use client";

// ** import core package
import Link from "next/link";
import { useRouter } from "next/navigation";

// ** import assets
import {
  IcoArrowBox,
  IcoBag,
  IcoChair,
  IcoLocation,
} from "@/assets/icons/career";

// ** import data
import { jobsData } from "./data";
import { JobData } from "@/types/job";

// ** import utils
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/Typography";

interface InfoItemProps {
  icon: React.ReactNode;
  text: string;
}

interface JobCardProps extends JobData {
  className?: string;
}

const JobCard = (props: JobCardProps) => {
  const {
    title,
    department,
    positions,
    job_type,
    location,
    className,
  } = props;
  const router = useRouter();
  const jobSlug = title.replace(/\s+/g, "-");

  return (
    <div
      onClick={() => router.push(`/careers/${jobSlug}`)}
      className={cn("w-full bg-white cursor-pointer shadow-lg px-5 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300", className)}
    >
      <div className="flex justify-between items-center">
        <Typography
          variant="SemiBold_H4"
          className="font-garamond text-primary-foreground "
        >
          {title}
        </Typography>
        <Link
          href={`/careers/${jobSlug}`}
          className="text-primary-foreground flex items-center gap-2"
        >
          <span className="hidden md:block">More Details</span>
          <IcoArrowBox />
        </Link>
      </div>
      <Typography variant="Regular_H5" className="mt-2 text-primary-foreground">
        {department}
      </Typography>
      <div className="flex flex-wrap gap-x-4 gap-y-3 mt-4">
        <InfoItem icon={<IcoChair />} text={String(positions)} />
        <InfoItem icon={<IcoBag />} text={job_type.join(" / ")} />
        <InfoItem icon={<IcoLocation />} text={location} />
      </div>
    </div>
  );
};

const InfoItem = ({ icon, text }: InfoItemProps) => (
  <div className="flex items-center gap-2">
    <div>{icon}</div>
    <Typography variant="Regular_H5" className="text-primary-foreground">
      {text}
    </Typography>
  </div>
);

const Career = () => {
  return (
    <section className="bg-background py-16 lg:py-20 container global-padding-container mx-auto">
      <div
        className="space-y-6 lg:max-w-5xl mx-auto"
      >
        {jobsData.map((job: JobData) => (
          <JobCard key={job.title} {...job} />
        ))}
      </div>
    </section>
  );
};

export default Career;

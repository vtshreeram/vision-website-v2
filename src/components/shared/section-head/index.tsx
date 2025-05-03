// ** import core packages
import { ReactElement } from "react";

// ** import component
import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

const SectionHead = ({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: {
  title: ReactElement | string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) => {
  return (
    <div className={cn("text-center max-w-xl mx-auto", className)}>
      <Typography
        variant="SemiBold_H3"
        className={cn(` text-foreground`, titleClassName)}
      >
        {title}
      </Typography>
      <Typography
        variant="Regular_H6"
        className={cn(` block mt-2 text-gray`, descriptionClassName)}
      >
        {description}
      </Typography>
    </div>
  );
};

export default SectionHead;

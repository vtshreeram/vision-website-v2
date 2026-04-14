import { ReactNode } from "react";
import { Typography } from "@/components/ui/Typography";

interface SubLabelProps {
  children: ReactNode;
  className?: string;
}

export const SubLabel = ({ children, className = "" }: SubLabelProps) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-background rounded-sm ${className}`}>
      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
      <Typography variant="caption" className="font-medium text-secondary">
        {children}
      </Typography>
    </div>
  );
};

export default SubLabel;

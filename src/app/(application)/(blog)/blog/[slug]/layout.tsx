import { ReactNode } from "react";
import { cn } from "../_libs/utils";
import { dmSans } from "../__configs/font";
const DynamicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cn("blog-layout-custom-style", dmSans.className)}>
      {children}
    </div>
  );
};

export default DynamicLayout;

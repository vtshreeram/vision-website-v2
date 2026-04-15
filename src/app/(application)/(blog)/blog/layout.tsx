//  ** import core packages
import { ReactNode } from "react";

//  ** import styles
import "../../../../blog-styles/style.scss";

//  ** import utils
import { cn } from "./_libs/utils";

//  ** import font
import { dmSans } from "./__configs/font";

const IskconBlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={cn(
        "blog-layout-custom-style",
        dmSans.variable,
        dmSans.className
      )}
    >
      {children}
      {/* <Banner /> */}
    </div>
  );
};

export default IskconBlogLayout;

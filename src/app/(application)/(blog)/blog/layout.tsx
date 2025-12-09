//  ** import core packages
import { ReactNode } from "react";

//  ** import styles
import "../../../../blog-styles/style.scss";
import "../../../../blog-styles/global.css";

//  ** import utils
import { cn } from "./_libs/utils";

//  ** import font
import { poppins } from "./__configs/font";

const IskconBlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={cn(
        "blog-layout-custom-style",
        poppins.variable,
        poppins.className
      )}
    >
      {children}
      {/* <Banner /> */}
    </div>
  );
};

export default IskconBlogLayout;

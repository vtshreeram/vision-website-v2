import { DM_Sans } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const blogFontConfig = {
  title: dmSans.className,
  subtitle: dmSans.className,
};

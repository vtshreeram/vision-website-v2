// ** import core packages
import Link from "next/link";

// ** import icon
import {
  IcoLocation,
  IcoMail,
  IcoInstagramOutline,
  IcoFacebookOutline,
  IcoLinkedinOutline,
  IcoTwitterOutline,
} from "@/assets/icons";

// ** import config
import { siteConfig } from "@/config";

const HeaderTop = () => {
  return (
    <div className="lg:block hidden w-full bg-transparent text-white global-padding-container mt-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-white pb-3.5">
        {/* Left: Email */}
        <Link
          href={`mailto:${siteConfig.EMAIL}`}
          aria-label="Email"
          className="flex items-center gap-2 min-w-0 !text-white"
        >
          <IcoMail />
          <span className="truncate">operation@visionstransport.com.my</span>
        </Link>

        {/* Center: Address */}
        <div className="flex items-center gap-2 min-w-0 flex-1 justify-center">
          <IcoLocation className="w-5 h-5 text-white" />
          <span className="truncate text-center">
            No 2A-1 Jalan Kemuning Prima C33/C, Seksyen 33, 40400
          </span>
        </div>
        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          <Link href={siteConfig.INSTAGRAM_URL} aria-label="Instagram">
            <IcoInstagramOutline />
          </Link>
          <Link href={siteConfig.TWITTER_URL} aria-label="Twitter">
            <IcoTwitterOutline />
          </Link>
          <Link href={siteConfig.FACEBOOK_URL} aria-label="Facebook">
            <IcoFacebookOutline />
          </Link>
          <Link href={siteConfig.LINKEDIN_URL} aria-label="LinkedIn">
            <IcoLinkedinOutline />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// ** import core packages
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ** import third party packages
import { Menu, X } from "react-feather";
import { IoIosArrowDown } from "react-icons/io";

// ** import components
import { Typography } from "@/components/ui/Typography";
import HeaderTop from "./header-top";

// ** import assets
import LogoHeader from "@/assets/logo-header";
import LogoFooter from "@/assets/logo-footer";

// ** import utils
import { cn } from "@/lib/utils";

type NavLink = {
  title: string;
  href?: string;
  target?: string;
  subLinks?: { title: string; href?: string; target?: string }[];
};

const navLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About us", href: "/about-us" },
  // {
  //   title: "Services",
  //   subLinks: [
  //     {
  //       title: "Services",
  //       href: "/services",
  //     },
  //   ],
  // },

  { title: "Services", href: "/services" },
  { title: "Sustainability", href: "/sustainability" },
  { title: "CSR", href: "/csr" },
  // { title: "Clientele", href: "/clientele" },
  // { title: "Gallery", href: "/gallery" },
  {
    title: "Tracking",
    href: "https://track.visionstransport.com.my/",
    target: "_blank",
  },
  { title: "Blog", href: "/blog" },
  { title: "Careers", href: "/careers" },
  { title: "Contact us", href: "/contact-us" },
];

interface HeaderProps {
  isBlog?: boolean;
}

const Header = ({ isBlog = false }: HeaderProps) => {
  const location = usePathname();
  const [activeDropdown, setActiveDropdown] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleDropdown = (dropdownName: string) =>
    setActiveDropdown((prev) => (prev === dropdownName ? "" : dropdownName));

  const closeMobileNav = () => setExpanded(false);

  return (
    <>
      {!isBlog && <HeaderTop />}
      <header
        className={cn(
          " bg-transparent  z-50 ",
          isBlog ? "bg-white  border-b border-stroke" : " mt-4 bg-transparent"
        )}
      >
        <div className={cn("max-w-7xl mx-auto global-padding-container ", isBlog ? "py-1 lg:py-2" : "py-1 lg:py-0")}>
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0 z-20">
              <Link
                href="/"
                className="flex gap-3 items-center"
                aria-label="Vision Home"
              >
                {!isBlog ? <LogoHeader /> : <LogoFooter className="h-auto w-[140px]" />}
               
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                className="text-primary"
                type="button"
                onClick={() => {
                  handleDropdown("");
                  setExpanded((prevExpanded) => !prevExpanded);
                }}
                aria-expanded={expanded}
                aria-label={expanded ? "Close menu" : "Open menu"}
              >
                <span
                  style={{ display: expanded ? "none" : "block" }}
                  aria-hidden="true"
                >
                  <Menu />
                </span>

                <span
                  style={{ display: expanded ? "block" : "none" }}
                  aria-hidden="true"
                >
                  <X />
                </span>
              </button>
            </div>

            {/* desktop nav */}
            <div className="hidden lg:flex lg:gap-8 lg:items-center lg:justify-center">
              <ul className="flex items-center justify-between gap-6">
                {navLinks.map((link) => {
                  const isParentActive = link.href && location === link.href;
                  const isAnySubLinkActive =
                    link.subLinks &&
                    link.subLinks.some(
                      (subLink) =>
                        subLink.href &&
                        (location === subLink.href ||
                          location.startsWith(subLink.href))
                    );

                  const activeParent = isParentActive ? "!font-bold " : "";

                  const activeDropdownLink = isAnySubLinkActive
                    ? "!font-bold "
                    : "";

                  return link.subLinks ? (
                    <li
                      key={link.title}
                      className={`group/main relative p-3 h-12 cursor-pointer whitespace-nowrap`}
                    >
                      <Typography
                        variant="Regular_H6"
                        className={cn(
                          "text-white  duration-300  inline-flex items-center gap-2",
                          activeDropdownLink
                        )}
                      >
                        {link.title}{" "}
                        <IoIosArrowDown
                          className="rotate-0 group-hover/main:rotate-180 duration-300"
                          size={20}
                        />
                      </Typography>
                      <ul
                        className={`absolute min-w-44 bg-white left-0 top-12 hidden py-4 group-hover/main:block`}
                      >
                        {link.subLinks.map((subLink, idx) => {
                          return subLink.href ? (
                            <Link
                              key={subLink.title}
                              href={subLink?.href}
                              target={subLink.target}
                            >
                              <li
                                className={`px-5 py-2 whitespace-nowrap !text-gray_ cursor-pointer hover:bg-primary/10 flex items-center gap-2`}
                              >
                                <Typography
                                  variant="Regular_H6"
                                  className="block"
                                >
                                  {subLink.title}
                                </Typography>
                              </li>
                            </Link>
                          ) : (
                            <li
                              key={idx}
                              className="relative px-5 py-2 whitespace-nowrap hover:bg-primary hover:text-gray_ cursor-pointer group"
                            >
                              <div className="flex justify-between items-center">
                                <Typography variant="Regular_H6">
                                  {subLink.title}
                                </Typography>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ) : (
                    <li
                      key={link.title}
                      className="duration-300 inline-flex items-center nav-link-hover"
                    >
                      <Typography
                        variant="Regular_H6"
                        link={link.href}
                        className={cn(
                          activeParent,
                          isBlog ? "!text-black" : "!text-white"
                        )}
                        target={link.target}
                      >
                        {link.title}
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </header>

      {/*  Mobile nav */}
      <nav
        className={`fixed left-0 top-0 lg:hidden w-full !z-[9999999] bg-white overflow-x-hidden px-5 flex-col ${
          expanded ? "flex h-[100dvh]" : "hidden h-0"
        }`}
      >
        <div className="flex items-center justify-between pt-1">
          <div className="flex-shrink-0 z-20">
            <Link
              href="/"
              className="flex gap-3 items-center"
              aria-label="Vision Home"
            >
              <LogoFooter className="h-auto w-[140px]" />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              className="text-primary"
              type="button"
              onClick={() => {
                handleDropdown("");
                setExpanded((prevExpanded) => !prevExpanded);
              }}
              aria-expanded={expanded}
              aria-label={expanded ? "Close menu" : "Open menu"}
            >
              <span
                style={{ display: expanded ? "none" : "block" }}
                aria-hidden="true"
              >
                <Menu />
              </span>

              <span
                style={{ display: expanded ? "block" : "none" }}
                aria-hidden="true"
              >
                <X />
              </span>
            </button>
          </div>
        </div>
        <ul className="flex-grow py-8 space-y-4">
          {navLinks.map((link, idx) =>
            link.subLinks ? (
              <li key={idx}>
                <div className="h-7 overflow-hidden text-xl md:!text-xl font-semibold">
                  <p
                    onClick={() => handleDropdown(link.title)}
                    className="text-primary inline-flex gap-2 items-center"
                  >
                    {link.title}{" "}
                    <IoIosArrowDown className="-rotate-90" size={20} />
                  </p>
                </div>
                <ul
                  className={`${
                    activeDropdown === link.title ? "block" : "hidden"
                  } my-3 `}
                >
                  {link.subLinks.map((subLink, idx) => {
                    return (
                      <li
                        key={idx || subLink.title}
                        className="px-3 py-2 whitespace-nowrap text-primary"
                      >
                        {subLink.href ? (
                          <Link
                            href={subLink.href}
                            target={subLink.target}
                            onClick={closeMobileNav}
                          >
                            <div className="h-7 overflow-hidden text-xl md:!text-xl font-medium">
                              <p className="text-foreground inline-flex gap-2 items-center">
                                {subLink.title}{" "}
                              </p>
                            </div>
                          </Link>
                        ) : (
                          <div className="flex gap-2 items-center">
                            <Typography
                              variant="Regular_H5"
                              className="text-foreground text-xl"
                            >
                              {subLink.title}
                            </Typography>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li key={idx} className="h-7 overflow-hidden">
                {link.href && (
                  <Link
                    href={link?.href}
                    target={link.target}
                    onClick={closeMobileNav}
                    className="block text-xl md:!text-xl font-semibold"
                  >
                    <p className="text-foreground">{link.title} </p>
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;

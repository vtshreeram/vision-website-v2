/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// ** import core package
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ** import third party package
import { Menu, X } from "react-feather";
import { IoIosArrowDown } from "react-icons/io";
import { motion as m } from "framer-motion";

// import ui component
import { Typography } from "@/components/ui/Typography";

// import libs
import { cn } from "@/lib/utils";

// motion variants
const variants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  visible: (i: any) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeIn", delay: i },
  }),
  hidden: {
    y: 25,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const heightVariant = {
  initial: {
    height: 0,
  },
  incr: {
    height: "90dvh",
    transition: { duration: 0.2, ease: "easeIn" },
  },
  decr: {
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

type NavLink = {
  title: string;
  href?: string;
  subLinks?: { title: string; href?: string }[];
};

const navLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About us", href: "/about-us" },
  {
    title: "Treatment",
    subLinks: [
      {
        title: "Inch loss Therapy",
        href: "/inch-loos-therapy",
      },
      { title: "CoolSculpting", href: "/cool-sculpting" },
      {
        title: "FDI Injections",
        href: "/fdi-injections",
      },
    ],
  },

  // { title: "Blog", href: "#" },
  // { title: "Gallery", href: "/gallery" },
  { title: "Contact us", href: "/contact-us" },
];

const Header = () => {
  const location = usePathname();
  const [activeDropdown, setActiveDropdown] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleDropdown = (dropdownName: string) =>
    setActiveDropdown((prev) => (prev === dropdownName ? "" : dropdownName));

  const closeMobileNav = () => setExpanded(false);

  return (
    <header className="py-4 lg:py-6 bg-white shadow-md z-max sticky top-0">
      <div className="max-w-container mx-auto global-padding-container">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 z-20">
            <Link
              href="/"
              className="flex gap-3 items-center"
              aria-label="Metabola Home"
            >
              Logo
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

                const activeParent = isParentActive ? "text-primary " : "";

                const activeDropdownLink = isAnySubLinkActive
                  ? "text-primary "
                  : "";

                return link.subLinks ? (
                  <li
                    key={link.title}
                    className={`group/main relative p-3 h-12 cursor-pointer whitespace-nowrap`}
                  >
                    <Typography
                      variant="Regular_H6"
                      className={cn(
                        "text-gray_ hover:text-primary duration-300 md:text-lg   inline-flex items-center gap-2",
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
                      className={`absolute min-w-44 bg-white left-0 top-12 hidden pb-6 pt-7 group-hover/main:block`}
                    >
                      {link.subLinks.map((subLink, idx) => {
                        return subLink.href ? (
                          <Link key={subLink.title} href={subLink?.href}>
                            <li
                              className={`px-5 py-2 whitespace-nowrap text-gray_ cursor-pointer hover:bg-primary/10 flex items-center gap-2`}
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
                    className={cn(
                      "text-gray_ hover:text-primary duration-300 md:text-lg inline-flex items-center",
                      activeParent
                    )}
                  >
                    <Typography
                      variant="Regular_H6"
                      link={link.href}
                      className="md:text-lg"
                    >
                      {link.title}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/*  Mobile nav */}
        <m.nav
          initial="initial"
          animate={expanded ? "incr" : "decr"}
          variants={heightVariant}
          className={`absolute flex lg:hidden  left-0 w-full top-16 h-[calc(100dvh-50px)] !z-[9999999] bg-white overflow-x-hidden px-5  flex-col `}
        >
          <ul className="flex-grow py-8 space-y-4">
            {navLinks.map((link, idx) =>
              link.subLinks ? (
                <li key={idx}>
                  <div className="h-7 overflow-hidden text-xl md:!text-xl font-semibold">
                    <m.p
                      onClick={() => handleDropdown(link.title)}
                      initial="initial"
                      animate={expanded ? "visible" : "hidden"}
                      variants={variants}
                      custom={idx * 0.02}
                      className="text-primary inline-flex gap-2 items-center"
                    >
                      {link.title}{" "}
                      <IoIosArrowDown className="-rotate-90" size={20} />
                    </m.p>
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
                            <Link href={subLink.href} onClick={closeMobileNav}>
                              <div className="h-7 overflow-hidden text-xl md:!text-xl font-medium">
                                <m.p
                                  initial="initial"
                                  animate={
                                    activeDropdown ? "visible" : "hidden"
                                  }
                                  variants={variants}
                                  custom={idx * 0.02}
                                  className="text-primary inline-flex gap-2 items-center"
                                >
                                  {subLink.title}{" "}
                                </m.p>
                              </div>
                            </Link>
                          ) : (
                            <div className="flex gap-2 items-center">
                              <Typography
                                variant="Regular_H5"
                                className="text-primary text-xl"
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
                      onClick={closeMobileNav}
                      className="block text-xl md:!text-xl font-semibold"
                    >
                      <m.p
                        initial="initial"
                        animate={expanded ? "visible" : "hidden"}
                        variants={variants}
                        custom={idx * 0.02}
                        className="text-primary"
                      >
                        {link.title}{" "}
                      </m.p>
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>

          <div className="p-6">
            <Link href={"/contact-us"}>icons</Link>
          </div>
        </m.nav>
      </div>
    </header>
  );
};

export default Header;

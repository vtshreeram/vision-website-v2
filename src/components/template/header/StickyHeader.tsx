"use client";

// ** import core packages
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// ** import third party packages
import { Menu, X } from "react-feather";
import { IoIosArrowDown } from "react-icons/io";

// ** import components
import { Typography } from "@/components/ui/Typography";

// ** import assets
import LogoHeader from "@/assets/logo-header";

// ** import utils
import { cn } from "@/lib/utils";
import LogoFooter from "@/assets/logo-footer";

type NavLink = {
  title: string;
  href?: string;
  target?: string;
  subLinks?: { title: string; href?: string; target?: string }[];
};

const navLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About us", href: "/about-us" },
  { title: "Services", href: "/services" },
  { title: "Sustainability", href: "/sustainability" },
  { title: "CSR", href: "/csr" },
  {
    title: "Tracking",
    href: "https://track.visionstransport.com.my/",
    target: "_blank",
  },
  { title: "Blog", href: "/blog" },
  { title: "Careers", href: "/careers" },
  { title: "Contact us", href: "/contact-us" },
];

const StickyHeader = () => {
  const location = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky header after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdown = (dropdownName: string) =>
    setActiveDropdown((prev) => (prev === dropdownName ? "" : dropdownName));

  const closeMobileNav = () => setExpanded(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-lg"
        >
          {/* Top dark grey bar */}
          {/* <div className="h-1 bg-gray-800"></div> */}
          <div className="max-w-7xl mx-auto global-padding-container lg:py-1">
            <div className="flex items-center justify-between h-16 ">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="flex gap-3 items-center"
                  aria-label="Vision Home"
                >
                  <LogoFooter className="h-auto w-[140px]" />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                {navLinks.map((link) => {
                  const isActive = location === link.href;
                  const activeParent = isActive
                    ? "text-primary font-semibold"
                    : "";

                  return link.subLinks ? (
                    <div key={link.title} className="relative group">
                      <button
                        onClick={() => handleDropdown(link.title)}
                        className={cn(
                          "flex items-center gap-1 text-foreground hover:text-primary transition-colors nav-link-hover",
                          activeParent
                        )}
                      >
                        <Typography variant="Regular_H6">
                          {link.title}
                        </Typography>
                        <IoIosArrowDown
                          className={cn(
                            "transition-transform duration-200",
                            activeDropdown === link.title && "rotate-180"
                          )}
                        />
                      </button>
                      {activeDropdown === link.title && (
                        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[180px]">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.title}
                              href={subLink.href || "#"}
                              target={subLink.target}
                              className="block px-4 py-2 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                              onClick={() => setActiveDropdown("")}
                            >
                              {subLink.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.title}
                      href={link.href || "#"}
                      target={link.target}
                      className={cn(
                        "text-foreground hover:text-primary transition-colors nav-link-hover",
                        activeParent
                      )}
                    >
                      <Typography variant="Regular_H6">{link.title}</Typography>
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  className="text-foreground"
                  type="button"
                  onClick={() => {
                    handleDropdown("");
                    setExpanded(!expanded);
                  }}
                  aria-expanded={expanded}
                  aria-label={expanded ? "Close menu" : "Open menu"}
                >
                  <span
                    style={{ display: expanded ? "none" : "block" }}
                    aria-hidden="true"
                  >
                    <Menu className="text-primary" />
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
          </div>
        </motion.header>
      )}

      {/* Mobile Navigation */}
      <nav
        className={`fixed left-0 top-0 bottom-0 lg:hidden w-full !z-[9999999] bg-white overflow-hidden px-5 flex-col ${
          expanded ? "flex h-[100dvh]" : "hidden h-0"
        }`}
      >
        <div className="flex items-center justify-between pt-1">
          <div className="flex-shrink-0 z-20">
            <Link
              href="/"
              className="flex gap-3 items-center"
              aria-label="Vision Home"
              onClick={closeMobileNav}
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
                setExpanded(!expanded);
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
          {navLinks.map((link, idx) => {
            const isActive = location === link.href;

            return link.subLinks ? (
              <li key={idx}>
                <div className="h-7 overflow-hidden text-xl md:!text-xl font-semibold">
                  <p
                    onClick={() => handleDropdown(link.title)}
                    className={cn(
                      "inline-flex gap-2 items-center cursor-pointer",
                      isActive ? "text-primary" : "text-foreground"
                    )}
                  >
                    {link.title}{" "}
                    <IoIosArrowDown
                      className={cn(
                        "-rotate-90 transition-transform duration-200",
                        activeDropdown === link.title && "rotate-0"
                      )}
                      size={20}
                    />
                  </p>
                </div>
                <ul
                  className={`${
                    activeDropdown === link.title ? "block" : "hidden"
                  } my-3 `}
                >
                  {link.subLinks.map((subLink, subIdx) => {
                    return (
                      <li
                        key={subIdx || subLink.title}
                        className="px-3 py-2 whitespace-nowrap text-foreground"
                      >
                        {subLink.href ? (
                          <Link
                            href={subLink.href}
                            target={subLink.target}
                            onClick={closeMobileNav}
                          >
                            <div className="h-7 overflow-hidden text-xl md:!text-xl font-medium">
                              <p className="text-foreground hover:text-primary inline-flex gap-2 items-center">
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
                    href={link.href}
                    target={link.target}
                    onClick={closeMobileNav}
                    className="block text-xl md:!text-xl font-semibold"
                  >
                    <p
                      className={cn(
                        isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      {link.title}{" "}
                    </p>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </AnimatePresence>
  );
};

export default StickyHeader;

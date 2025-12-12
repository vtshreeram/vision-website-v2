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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed top-0 left-0 right-0 z-[100] bg-secondary shadow-lg"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <Link
                                    href="/"
                                    className="flex gap-3 items-center"
                                    aria-label="Vision Home"
                                >
                                    <LogoFooter />
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
                                                    "flex items-center gap-1 text-white hover:text-primary transition-colors nav-link-hover",
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
                                                "text-white hover:text-primary transition-colors nav-link-hover",
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
                                    className="text-white"
                                    type="button"
                                    onClick={() => setExpanded(!expanded)}
                                    aria-expanded={expanded}
                                    aria-label={expanded ? "Close menu" : "Open menu"}
                                >
                                    {expanded ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        <AnimatePresence>
                            {expanded && (
                                <motion.nav
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="lg:hidden overflow-hidden"
                                >
                                    <div className="py-4 space-y-2">
                                        {navLinks.map((link) => {
                                            const isActive = location === link.href;

                                            return link.subLinks ? (
                                                <div key={link.title}>
                                                    <button
                                                        onClick={() => handleDropdown(link.title)}
                                                        className={cn(
                                                            "flex items-center justify-between w-full py-2 text-white",
                                                            isActive && "text-primary font-semibold"
                                                        )}
                                                    >
                                                        <span>{link.title}</span>
                                                        <IoIosArrowDown
                                                            className={cn(
                                                                "transition-transform duration-200",
                                                                activeDropdown === link.title && "rotate-180"
                                                            )}
                                                        />
                                                    </button>
                                                    {activeDropdown === link.title && (
                                                        <div className="pl-4 space-y-2">
                                                            {link.subLinks.map((subLink) => (
                                                                <Link
                                                                    key={subLink.title}
                                                                    href={subLink.href || "#"}
                                                                    target={subLink.target}
                                                                    className="block py-2 text-white/80 hover:text-primary"
                                                                    onClick={closeMobileNav}
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
                                                        "block py-2 text-white hover:text-primary",
                                                        isActive && "text-primary font-semibold"
                                                    )}
                                                    onClick={closeMobileNav}
                                                >
                                                    {link.title}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </motion.nav>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    );
};

export default StickyHeader;

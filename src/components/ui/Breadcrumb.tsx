"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { Typography } from "@/components/ui/Typography";

/**
 * Breadcrumb - Navigation path indicator component
 */
const Breadcrumb = () => {
    const pathname = usePathname();

    // Don't show breadcrumb on home page
    if (pathname === "/") return null;

    // Generate breadcrumb items from path
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbItems = pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        const label = segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        return { href, label };
    });

    return (
        <nav
            aria-label="Breadcrumb"
            className="bg-background py-3 global-padding-container"
        >
            <div className="max-w-7xl mx-auto">
                <ol className="flex items-center flex-wrap gap-2 text-sm">
                    {/* Home link */}
                    <li className="flex items-center">
                        <Link
                            href="/"
                            className="text-gray hover:text-primary transition-colors flex items-center gap-1"
                        >
                            <Home size={16} />
                            <span>Home</span>
                        </Link>
                    </li>

                    {/* Path segments */}
                    {breadcrumbItems.map((item, index) => (
                        <li key={item.href} className="flex items-center">
                            <ChevronRight size={16} className="text-gray mx-1" />
                            {index === breadcrumbItems.length - 1 ? (
                                <Typography
                                    variant="Medium_H6"
                                    className="text-primary font-medium"
                                >
                                    {item.label}
                                </Typography>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-gray hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumb;

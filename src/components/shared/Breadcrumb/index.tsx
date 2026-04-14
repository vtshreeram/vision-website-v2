"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string | any;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center gap-2 text-sm text-gray-600",
        className
      )}
    >
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <ChevronRight
                size={16}
                className="text-gray-400"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

import Link from "next/link";
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background global-padding-container">
      <div className="text-center space-y-6">
        <Typography variant="Bold_H1" className="text-foreground">
          Service Not Found
        </Typography>
        <Typography variant="Regular_H5" className="text-gray">
          The service you&apos;re looking for doesn&apos;t exist.
        </Typography>
        <div className="flex gap-4 justify-center">
          <Link href="/services">
            <Button variant="primary">View All Services</Button>
          </Link>
          <Link href="/">
            <Button variant="secondary">Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background global-padding-container">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <Typography variant="Bold_H1" className="text-primary text-6xl mb-4">
            404
          </Typography>
          <Typography variant="Bold_H2" className="text-foreground mb-4">
            Page Not Found
          </Typography>
          <Typography variant="Regular_H6" className="text-gray mb-8">
            The page you&apos;re looking for doesn&apos;t exist.
          </Typography>
        </div>

        <div className="space-y-4">
          <Link href="/" className="block">
            <Button variant="primary" className="w-full">
              Go Home
            </Button>
          </Link>
          <Link href="/contact-us" className="block">
            <Button variant="secondary" className="w-full">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

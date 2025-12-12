import Link from "next/link";
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background global-padding-container">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="h-20 w-20 rounded-full bg-secondary-background flex items-center justify-center text-primary">
            <AlertCircle className="h-10 w-10" />
          </div>
        </div>

        <div className="mb-8">
          <Typography variant="Bold_H1" className="text-primary text-6xl mb-4">
            404
          </Typography>
          <Typography variant="Bold_H2" className="text-foreground mb-2">
            Page Not Found
          </Typography>
          <Typography variant="Regular_H6" className="text-gray mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
          </Typography>
        </div>

        <div className="space-y-4">
          <Link href="/" className="block">
            <Button variant="primary" className="w-full">
              Back to Home
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

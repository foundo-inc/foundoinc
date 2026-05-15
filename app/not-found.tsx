import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-6xl md:text-8xl font-extrabold text-muted-foreground/20 mb-4">404</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-3">Page Not Found</h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/contact">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, Home, Search, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-slate-50">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-40 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-gradient-to-br from-slate-100 to-transparent rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="w-full max-w-2xl relative z-10">
          <div className="text-center space-y-8">
            {/* Large 404 Number */}
            <div className="space-y-4">
              <div className="inline-block">
                <h1 className="text-9xl md:text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600">
                  404
                </h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                Page Not Found
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
              We couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or perhaps there&apos;s a typo in the URL.
            </p>

            {/* Quick Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-12 pt-8 border-t border-slate-200">
              <Link
                href="/"
                className="group p-4 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
              >
                <Home className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground group-hover:text-blue-600">Home</span>
              </Link>
              
              <Link
                href="/about"
                className="group p-4 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
              >
                <Search className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground group-hover:text-blue-600">About</span>
              </Link>
              
              <Link
                href="/contact"
                className="group p-4 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
              >
                <HelpCircle className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground group-hover:text-blue-600">Contact</span>
              </Link>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/">
                <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Back to Home
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                >
                  Get Help
                </Button>
              </Link>
            </div>

            {/* Helpful Tips */}
            <div className="mt-16 p-6 bg-slate-100 rounded-xl border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">What you can try:</h3>
              <ul className="text-sm text-slate-700 space-y-2 text-left max-w-sm mx-auto">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-1.5 mr-3 flex-shrink-0"></span>
                  <span>Check the URL for typos or errors</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-1.5 mr-3 flex-shrink-0"></span>
                  <span>Return to the home page and navigate from there</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-1.5 mr-3 flex-shrink-0"></span>
                  <span>Contact our support team if you need assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

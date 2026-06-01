export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">Page not found</p>
      <a href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
        Go back home
      </a>
    </div>
  );
}

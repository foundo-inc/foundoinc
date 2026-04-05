const Footer = () => (
  <footer className="py-12 border-t">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-xl font-extrabold text-primary">Foundo</span>
          <p className="text-sm text-muted-foreground mt-1">Helping international founders start U.S. businesses since 2023.</p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">© {new Date().getFullYear()} Foundo. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

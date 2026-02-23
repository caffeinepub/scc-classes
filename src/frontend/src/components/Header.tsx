import { GraduationCap } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/generated/scc-logo.dim_200x200.png" 
            alt="SCC Classes Logo" 
            className="h-10 w-10 rounded-lg"
          />
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">SCC Classes</span>
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('courses')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Courses
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

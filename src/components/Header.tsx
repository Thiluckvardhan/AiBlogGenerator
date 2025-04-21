
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blog-primary to-blog-secondary bg-clip-text text-transparent">
            ContentForge
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-blog-primary transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blog-primary transition-colors">
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-blog-primary transition-colors">
            About
          </a>
          <Button variant="default" className="bg-blog-primary hover:bg-blog-secondary">
            Get Started
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 border-b shadow-lg">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-blog-primary transition-colors py-2">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blog-primary transition-colors py-2">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-blog-primary transition-colors py-2">
              About
            </a>
            <Button variant="default" className="bg-blog-primary hover:bg-blog-secondary w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

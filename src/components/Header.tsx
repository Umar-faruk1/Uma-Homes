
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Properties', 'About', 'Services', 'Contact'];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className={`border-b border-white/20 transition-opacity duration-300 ${
        isScrolled ? 'opacity-0 h-0' : 'opacity-100 h-auto'
      }`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm text-white">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@livesta.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Follow Us:</span>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-gold-500 transition-colors">FB</a>
                <a href="#" className="hover:text-gold-500 transition-colors">TW</a>
                <a href="#" className="hover:text-gold-500 transition-colors">IN</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className={`transition-colors duration-300 ${
              isScrolled ? 'text-navy-600' : 'text-white'
            }`}>LIVE</span>
            <span className="text-gold-500">STA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-all duration-300 hover:text-gold-500 relative group ${
                  isScrolled ? 'text-navy-600' : 'text-white'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button with Sidebar */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className={`md:hidden transition-colors duration-300 ${
                  isScrolled ? 'text-navy-600' : 'text-white'
                }`}
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-navy-600 text-white border-l-0">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="text-2xl font-bold mb-6">
                  <span className="text-white">LIVE</span>
                  <span className="text-gold-500">STA</span>
                </div>
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-medium text-white hover:text-gold-500 transition-colors py-2 border-b border-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-6 border-t border-white/20">
                  <div className="flex flex-col space-y-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone size={16} />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail size={16} />
                      <span>info@livesta.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;

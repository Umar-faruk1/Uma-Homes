
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  // Mock user state - in real app, this would come from auth context
  const isLoggedIn = false; // Change to true to see logged-in state
  const userType: 'user' | 'agent' | 'admin' = 'user';

  const getDashboardLink = () => {
    if (userType === 'agent') return '/agent/dashboard';
    if (userType === 'admin') return '/admin/dashboard';
    return '/dashboard';
  };

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
          <Link to="/" className="text-2xl font-bold">
            <span className={`transition-colors duration-300 ${
              isScrolled ? 'text-navy-600' : 'text-white'
            }`}>LIVE</span>
            <span className="text-gold-500">STA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-300 hover:text-gold-500 relative group ${
                  isScrolled ? 'text-navy-600' : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <Link to={getDashboardLink()}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`${isScrolled ? 'border-navy-600 text-navy-600 hover:bg-navy-600' : 'border-white text-white hover:bg-white hover:text-navy-600'}`}
                    >
                      Dashboard
                    </Button>
                  </Link>
                  <Link to="/profile">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`${isScrolled ? 'border-navy-600 text-navy-600 hover:bg-navy-600' : 'border-white text-white hover:bg-white hover:text-navy-600'}`}
                    >
                      Profile
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`${isScrolled ? 'border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white' : 'border-white text-white hover:bg-white hover:text-navy-600'}`}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button 
                      size="sm"
                      className="bg-gold-500 hover:bg-gold-600 text-white"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
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
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-lg font-medium text-white hover:text-gold-500 transition-colors py-2 border-b border-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-6 border-t border-white/20">
                  {isLoggedIn ? (
                    <div className="space-y-3">
                      <Link 
                        to={getDashboardLink()}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button className="w-full bg-gold-500 hover:bg-gold-600">
                          Dashboard
                        </Button>
                      </Link>
                      <Link 
                        to="/profile"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-navy-600">
                          Profile
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Link 
                        to="/login"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-navy-600">
                          Sign In
                        </Button>
                      </Link>
                      <Link 
                        to="/register"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button className="w-full bg-gold-500 hover:bg-gold-600">
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
                
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


import React, { useState, useEffect } from 'react';
import { Menu, Plus, BarChart3, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import AddListingModal from '@/components/modals/AddListingModal';

const AgentHeader = () => {
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
    { name: 'Dashboard', href: '/agent/dashboard' },
    { name: 'My Listings', href: '/agent/listings' },
    { name: 'Analytics', href: '/agent/analytics' },
    { name: 'Profile', href: '/agent/profile' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/agent/dashboard" className="text-2xl font-bold">
            <span className="text-navy-600">UMA</span>
            <span className="text-gold-500">Homes</span>
            <span className="text-sm text-gray-600 ml-2">Agent</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="font-medium transition-all duration-300 hover:text-gold-500 relative group text-navy-600"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              <AddListingModal />
              <Link to="/agent/analytics">
                <Button variant="outline" size="sm" className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white">
                  <BarChart3 size={16} className="mr-2" />
                  Analytics
                </Button>
              </Link>
              <Link to="/agent/profile">
                <Button variant="outline" size="sm" className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white">
                  <Settings size={16} className="mr-2" />
                  Settings
                </Button>
              </Link>
              <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                <LogOut size={16} className="mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-navy-600">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-navy-600 text-white border-l-0">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="text-2xl font-bold mb-6">
                  <span className="text-white">UMA</span>
                  <span className="text-gold-500">HOMES</span>
                  <span className="text-sm text-gray-300 block">Agent Portal</span>
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
                
                <div className="pt-6 border-t border-white/20 space-y-3">
                  <div onClick={() => setIsMobileMenuOpen(false)}>
                    <AddListingModal />
                  </div>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-navy-600">
                    <BarChart3 size={16} className="mr-2" />
                    Analytics
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-navy-600">
                    <Settings size={16} className="mr-2" />
                    Settings
                  </Button>
                  <Button className="w-full bg-red-500 hover:bg-red-600">
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default AgentHeader;

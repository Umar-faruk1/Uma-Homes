
import React, { useState, useEffect } from 'react';
import { Menu, Heart, User, LogOut, Settings, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from '@/contexts/AuthContext';

const UserHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed navItems since we're removing the navigation links

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/dashboard" className="text-2xl font-bold">
            <span className="text-navy-600">UMA</span>
            <span className="text-gold-500">HOMES</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <Button variant="outline" size="sm" className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white">
                <Bell size={16} />
              </Button>
              
              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg" alt={user?.name || 'User'} />
                      <AvatarFallback className="bg-navy-600 text-white">
                        {user?.name?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user?.name || 'User'}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/saved-properties" className="cursor-pointer">
                      <Heart className="mr-2 h-4 w-4" />
                      <span>Saved Properties</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="cursor-pointer text-red-600 focus:text-red-600"
                    onClick={logout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
                 </div>
                 
                 <div className="pt-6 border-t border-white/20 space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg" alt={user?.name || 'User'} />
                      <AvatarFallback className="bg-gold-500 text-white">
                        {user?.name?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{user?.name || 'User'}</p>
                      <p className="text-xs text-white/70">{user?.email}</p>
                    </div>
                  </div>
                  
                                     <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                     <Button className="w-full bg-gold-500 hover:bg-gold-600">
                       <Settings size={16} className="mr-2" />
                       Dashboard
                     </Button>
                   </Link>
                   <Link to="/saved-properties" onClick={() => setIsMobileMenuOpen(false)}>
                     <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-navy-600">
                       <Heart size={16} className="mr-2" />
                       Saved Properties
                     </Button>
                   </Link>
                   <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                     <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-navy-600">
                       <User size={16} className="mr-2" />
                       Profile
                     </Button>
                   </Link>
                   <Button 
                     className="w-full bg-red-500 hover:bg-red-600"
                     onClick={logout}
                   >
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

export default UserHeader;

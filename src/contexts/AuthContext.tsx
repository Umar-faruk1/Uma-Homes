import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  email: string;
  name: string;
  type: 'user' | 'agent' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    try {
      // Simulate API call - in real app, this would be an actual API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication logic
      let userData: User | null = null;
      
      // Simple mock users for testing
      if (email === 'user@example.com' && password === 'password') {
        userData = {
          id: '1',
          email: 'user@example.com',
          name: 'John User',
          type: 'user'
        };
      } else if (email === 'agent@example.com' && password === 'password') {
        userData = {
          id: '2',
          email: 'agent@example.com',
          name: 'Jane Agent',
          type: 'agent'
        };
      } else if (email === 'admin@example.com' && password === 'password') {
        userData = {
          id: '3',
          email: 'admin@example.com',
          name: 'Admin User',
          type: 'admin'
        };
      }
      
      if (userData) {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        
        // Navigate to appropriate dashboard
        if (userData.type === 'agent') {
          navigate('/agent/dashboard');
        } else if (userData.type === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/dashboard');
        }
        
        setLoading(false);
        return true;
      } else {
        setLoading(false);
        return false;
      }
    } catch (error) {
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

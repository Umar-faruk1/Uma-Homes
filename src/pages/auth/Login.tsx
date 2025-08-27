

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Footer from '@/components/Footer';

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const form = useForm<LoginForm>();
  const { login, loading } = useAuth();
  const { toast } = useToast();
  const [error, setError] = useState('');

  const onSubmit = async (data: LoginForm) => {
    setError('');
    const success = await login(data.email, data.password);
    
    if (!success) {
      setError('Invalid email or password. Please try again.');
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-navy-600">Sign In</CardTitle>
            <p className="text-gray-600">Welcome back to Uma Homes</p>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  rules={{ required: 'Email is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  rules={{ required: 'Password is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {error && (
                  <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-md">
                    {error}
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-navy-600 hover:bg-navy-700"
                  disabled={loading}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </Button>
                
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-gold-500 hover:text-gold-600 font-medium">
                      Sign up
                    </Link>
                  </p>
                  <p className="text-sm text-gray-600">
                    Are you a real estate agent?{' '}
                    <Link to="/agent-register" className="text-gold-500 hover:text-gold-600 font-medium">
                      Agent Registration
                    </Link>
                  </p>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;

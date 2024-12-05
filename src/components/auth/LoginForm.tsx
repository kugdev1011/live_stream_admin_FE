import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
const LoginForm: React.FC = () => {

  const navigator = useNavigate();
  const { toast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === "" || password === "") {
      toast({
        description: "Email or password is empty", variant: "destructive",
      })
      return;
    }
    navigator('/dashboard')
  }
  return (
    <div className="space-y-4 max-w-md mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800">Login</h2>
      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left pl-2">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <Label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left pl-2">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          placeholder="••••••••"
        />
      </div>
      <Button
        type="button"
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Login
      </Button>
      <p className="text-sm text-gray-600">
        <a href="/forgot-password" className="text-blue-600 hover:underline">
          Forgot Password?
        </a>
      </p>
      <p className="text-sm text-gray-600">
        Don't have an account? &nbsp;&nbsp;
        <a href='/register' className="text-blue-600 hover:underline">
          Register
        </a>
      </p>
    </div>
  );
};

export default LoginForm;

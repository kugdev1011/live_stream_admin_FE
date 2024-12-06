import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const RegisterForm: React.FC = () => {
  return (
    <div className="space-y-4 max-w-md mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800">Register</h2>
      <div>
        <Label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left pl-2">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your Name"
        />
      </div>
      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left pl-2">
          Email
        </Label>
        <Input
          id="email"
          type="email"
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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          placeholder="••••••••"
        />
      </div>
      <div>
        <Label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 text-left pl-2">
          Confirm Password
        </Label>
        <Input
          id="confirm-password"
          type="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          placeholder="••••••••"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Register
      </Button>
      <p className="text-sm text-gray-600">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default RegisterForm;

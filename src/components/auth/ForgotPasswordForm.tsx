import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const ForgotPasswordForm: React.FC = () => {
  return (
    <div className="space-y-4 max-w-md mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800">Reset Password</h2>
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
      <Button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Send Code
      </Button>
      <p className="text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="/register" className="text-blue-600 hover:underline">
          Register
        </a>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;

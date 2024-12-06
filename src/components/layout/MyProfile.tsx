import React from 'react';
import { User } from 'lucide-react';

const MyProfile: React.FC = () => {
    return (
        <button
            className="flex items-center space-x-2 p-2 rounded hover:border-none"
            onClick={() => alert('Navigating to My Account')}
            aria-label="My Account"
        >
            <User className="w-5 h-5" />
            <span>My Account</span>
        </button>
    );
};

export default MyProfile;
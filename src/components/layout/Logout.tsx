import React from 'react';
import { LogOut } from 'lucide-react';

const LogoutButton: React.FC = () => {
    const handleLogout = () => {
        alert('Logging out...');
    };
    return (
        <button
            className="flex items-center space-x-2 p-2 rounded hover:border-none"
            onClick={handleLogout}
            aria-label="Logout"
        >
            <LogOut className=" w-5 h-5" />
            <span className="">Logout</span>
        </button>
    );
};

export default LogoutButton;
import React from 'react';
import { logout } from '../shared/utils/auth';
type Props = {};

const Dashboard = (props: Props) => {
    const handleLogout = () => {
        return logout();
    };
    return (
        <div>
            <button onClick={handleLogout}>
                <h2>LOG OUT</h2>
            </button>
        </div>
    );
};

export default Dashboard;

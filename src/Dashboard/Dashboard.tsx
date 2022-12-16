import React from 'react';
import { logout } from '../shared/utils/auth';
type Props = {};

const Dashboard = (props: Props) => {
    const handleLogout = () => {
        // logout -> error
        // logout() -> 정상
        //  return logout -> error x  logout 동작 x
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

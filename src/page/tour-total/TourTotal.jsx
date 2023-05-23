import React from 'react';
import { Outlet } from 'react-router-dom';

function TourTotal(props) {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default TourTotal;
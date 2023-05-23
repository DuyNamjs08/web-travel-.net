import React from 'react';
import { Outlet } from 'react-router-dom';

function BlogTotal(props) {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default BlogTotal;
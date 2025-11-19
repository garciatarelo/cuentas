import { useState } from 'react'

import Sidebar from '../layouts/sidebar';
import Header from '../layouts/header';
import { Outlet } from 'react-router-dom';


function Dashboard() {

    

    return (
        <>
            <div className="d-flex">

                <Sidebar />

                <div className="content-area flex-grow-1">


                    <Header />

                    <Outlet>

                    </Outlet>

                </div>

            </div>
        </>
    )
}

export default Dashboard

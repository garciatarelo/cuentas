import { useState } from 'react'

import Card from '../layouts/card';
import CreditCard from '../layouts/credit-card';

function Home() {


    return (
        <>


            <div className="content-area flex-grow-1">

                <div className="row g-4">



                    <div className="col-md-4">
                        <Card amount={8450.75} title={"Main Balance"} percent={5.2} />
                    </div>




                    <div className="col-md-4">
                        <CreditCard bank={"Bankio"} cardnumber={"2984 5678 9838 3723"} nameperson={"Aubrey Sabina"} expiration={"07/26"} />
                    </div>


                    <div className="col-md-4">
                        <Card amount={5200} title={"Total Income"} percent={8.5} />
                    </div>


                    <div className="col-md-4">
                        <div className="card-main">
                            <small>Total Expenses</small>
                            <h3 className="fw-bold mt-2">$3,750.90</h3>
                            <span className="badge bg-danger">-4.2%</span>
                        </div>
                    </div>

                </div>


                <div className="card-main mt-4">
                    <h5 className="fw-bold mb-3">Recent Transfer Activity</h5>
                </div>
                 <table className="table align-middle">
                    <thead>
                        <tr>
                            <th>Date & Time</th>
                            <th>Description</th>
                            <th>Account</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="recent-transfer-row">
                            <td>Feb 5, 2025</td>
                            <td><img src="https://i.pravatar.cc/50?img=32" /> Alex Johnson</td>
                            <td>Savings (***5678)</td>
                            <td>$500.00</td>
                        </tr>

                        <tr>
                            <td>Feb 4, 2025</td>
                            <td><i className="fa-brands fa-netflix me-2 text-danger"></i> Netflix Billing</td>
                            <td>Billing</td>
                            <td>$15.99</td>
                        </tr>

                        <tr className="recent-transfer-row">
                            <td>Feb 3, 2025</td>
                            <td><img src="https://i.pravatar.cc/50?img=14" /> John Doe</td>
                            <td>Savings (***9876)</td>
                            <td>$450.00</td>
                        </tr>

                    </tbody>
                </table>
               

            </div>
        </>
    )
}

export default Home

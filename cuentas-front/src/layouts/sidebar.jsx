export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <h4 className="fw-bold mb-4"><i className="fa-solid fa-building-columns me-2"></i>Bankio</h4>

                <div className="menu-title">Main Menu</div>
                <a href="#"><i className="fa-solid fa-chart-line me-2"></i> Dashboard</a>
                <a href="#"><i className="fa-solid fa-chart-pie me-2"></i> Analytics</a>
                <a href="#"><i className="fa-solid fa-arrow-right-arrow-left me-2"></i> Transactions</a>
                <a href="#"><i className="fa-solid fa-coins me-2"></i> Investments</a>
                <a className="active" href="#"><i className="fa-solid fa-bolt me-2"></i> Transfers</a>
                <a href="#"><i className="fa-solid fa-credit-card me-2"></i> Card</a>
                <a href="#"><i className="fa-solid fa-gift me-2"></i> Rewards</a>

                <div className="menu-title">Others</div>
                <a href="#"><i className="fa-solid fa-lock me-2"></i> Security</a>
                <a href="#"><i className="fa-solid fa-gear me-2"></i> Settings</a>
                <a href="#"><i className="fa-solid fa-headset me-2"></i> Support</a>
            </div>
        </>
    )
}
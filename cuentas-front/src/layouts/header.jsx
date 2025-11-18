export default function Header() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 className="fw-bold">Welcome, Aubrey Sabina!</h3>
                    <p className="text-muted">Effortlessly manage your finances with real-time insights.</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <i className="fa-regular fa-envelope fs-5"></i>
                    <i className="fa-regular fa-bell fs-5"></i>
                    <img src="https://i.pravatar.cc/100?img=47" className="avatar" />
                </div>
            </div>
        </>
    )
}
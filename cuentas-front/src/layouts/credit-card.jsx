export default function CreditCard({bank, cardnumber, nameperson, expiration}) {
    return (
        <>
            <div className="credit-card">
                <h5>{bank}</h5>
                <div className="credit-card-number">{cardnumber}</div>
                <div className="d-flex justify-content-between">
                    <span>{nameperson}</span>
                    <span>{expiration}</span>
                </div>
            </div>
        </>
    )
}
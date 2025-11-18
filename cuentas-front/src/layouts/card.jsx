export default function Card({amount,title, percent}) {
    return (
        <>
             <div className="card-main">
                <small className="text-muted">{title}</small>
                <h3 className="fw-bold mt-2">${amount.toFixed(2)}</h3>
                {percent >=0 && (<span className="badge bg-success">{percent}</span>)}
                {percent < 0 && (<span className="badge bg-danger">{percent}</span>)}
                
            </div>
            
        </>
    )
}
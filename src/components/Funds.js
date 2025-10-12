import { Link } from "react-router-dom"

export default function Funds() {
    return (
        <>
          <div className="funds">
            <p>Instant, zero-cost fund transfer with UPI</p>
            <Link className="btn btn-green">Add funds</Link>
            <Link className="btn btn-blue">Withdraw</Link>
          </div>
          <div className="row">
            <div className="col">
                <span>
                    <p>Equity</p>
                </span>
            </div>
          </div>
        </>
    )
}
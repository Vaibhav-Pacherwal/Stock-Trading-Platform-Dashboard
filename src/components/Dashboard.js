import App from "./Apps"
import Funds from "./Funds"
import Holdings from "./Holdings"
import Positions from "./Positions"
import Orders from "./Orders"
import Summary from "./Summary"
import WatchList from "./WatchList"
import { GeneralContextProvider } from "./GeneralContext";

import {Routes, Route} from "react-router-dom"

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <GeneralContextProvider>
                <WatchList />
            </GeneralContextProvider>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Summary />}/>
                    <Route path="/orders" element={<Orders />}/>
                    <Route path="/holdings" element={<Holdings />}/>
                    <Route path="/positions" element={<Positions />}/>
                    <Route path="/funds" element={<Funds />}/>
                    <Route path="/apps" element={<App />}/>
                </Routes>
            </div>
        </div>
    )
}
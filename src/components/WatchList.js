import { Tooltip, Grow } from "@mui/material"
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { watchlist } from "../data/data"
import { useState } from "react"

export default function WatchList() {
    return (
        <div className="watchlist-container">
            <div className="search-container">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                    className="search"
                />
                <span className="counts"> {watchlist.length} / 50</span>
            </div>

            <ul className="list">
                {watchlist.map((stock, index) => {
                    return <WatchListItem key={index} stock={stock} />
                })}
            </ul>
        </div>
    )
}

function WatchListItem({ stock }) {
    let [showWatchListActions, setShowWatchListActions] = useState(false)

    function handleMouseEnter(e) {
        setShowWatchListActions(true)
    }

    function handleMouseExit(e) {
        setShowWatchListActions(false)
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? (
                        <KeyboardArrowDown className="down" />
                    ) : <KeyboardArrowUp className="up" />}
                    <span className="price">{stock.price}</span>
                </div>
            </div>
            {showWatchListActions && <WatchListActions uid={stock.name} />}
        </li>
    )
}

function WatchListActions({ uid }) {
    return (
        <span className="actions">
            <span>
                <Tooltip
                    title="Buy (B)"
                    placement="top"
                    arrow
                    TransitionComponent={Grow}
                >
                    <button className="buy">Buy</button>
                </Tooltip>
                <Tooltip
                    title="Sell (S)"
                    placement="top"
                    arrow
                    TransitionComponent={Grow}
                >
                    <button className="sell">Sell</button>
                </Tooltip>
                <Tooltip
                    title="Analytics (A)"
                    placement="top"
                    arrow
                    TransitionComponent={Grow}
                >
                    <button className="action">
                        <BarChartOutlinedIcon className="icon" />
                    </button>
                </Tooltip>
                <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
                    <button className="action">
                        <MoreHorizIcon className="icon" />
                    </button>
                </Tooltip>
            </span>
        </span>
    );
}
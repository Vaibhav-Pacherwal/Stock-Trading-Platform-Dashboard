import { useState } from "react"
import { Link } from "react-router-dom"

export default function Menu() {
    let [selectedMenu,setSelectedMenu] = useState(0)
    let [isProfileSelected,setIsProfileSelected] = useState(false)

    let handleMenuClick = (index) => {
        setSelectedMenu(index)
    }

    let handleProfileClick = (index) => {
        setIsProfileSelected(!isProfileSelected)
    }

    let menuClass = "menu"
    let activeMenuClass = "menu selected"

    return (
        <div className="menu-container text-center">
            <img src="logo.png" style={{ width: "50px" }} />
            <div className="menus">
                <ul>
                    <li className="mt-4">
                        <Link 
                          style={{textDecoration:"none"}} 
                          to="/" onClick={()=>handleMenuClick(0)}
                        >
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link 
                          style={{textDecoration:"none"}} 
                          to="/orders" onClick={()=>handleMenuClick(1)}
                        >
                            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
                        </Link>
                    </li>
                    <li>
                        <Link 
                          style={{textDecoration:"none"}} 
                          to="/holdings" onClick={()=>handleMenuClick(2)}
                        >
                            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
                        </Link>
                    </li>
                    <li>
                        <Link 
                          style={{textDecoration:"none"}} 
                          to="/positions" onClick={()=>handleMenuClick(3)}
                        >
                            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
                        </Link>
                    </li>
                    <li>
                        <Link 
                          style={{textDecoration:"none"}} 
                          to="/funds" onClick={()=>handleMenuClick(4)}
                        >
                            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
                        </Link>
                    </li>
                    <li>
                        <Link 
                          style={{textDecoration:"none"}} 
                          to="/apps" onClick={()=>handleMenuClick(5)}
                        >
                            <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
                        </Link>
                    </li>
                </ul>
                <hr style={{transform: "rotate(90deg"}}/>
                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar mb-1">ZU</div>
                    <p className="username mt-2">USERID</p>
                </div>
                {isProfileSelected}
            </div>
        </div>
    )
}
import logoOsis from "../asetc/img/logoOsis.svg"
import "./Header.css"

function Header() {
    return (
        <div className="header-centr">
        <div className="header-maxwith">
                <div className="div-nav">
                    <nav className="nav">
                        <ul className="ul-div">
                           
                                <img src={logoOsis}></img>
                           
                            <li>Home</li>
                            <li>Join OSIS</li>
                            <li>Lounchpad</li>
                            <li>MetaBadges</li>
                            <li>Staking</li>
                            <div className="button">
                        <button >BUY OSIS</button>
                    </div>
                        </ul>
                    </nav>
                  
            </div>
        </div>
        </div>
       
       
    )
    
}

export default Header
import "./Ecosystem.css"
import shop from "../asetc/img/shop.svg"
import surf from "../asetc/img/surf.svg"
import things from "../asetc/img/things.svg"
import hand from "../asetc/img/hand.svg"

function Ecosystem (){
    return(
        <div className="ecosystem-centre">
        <div className="ecosistem-max-width">
            <div className="ecosystem-title">
            <h2 className="ecosystem-h2">OSIS Ecosystem</h2>
            <p className="contiener-p">This is what will be possible with the coming launch of the OSIS ecosystem</p>
            </div>
            <div className="ecosystem-content">
            <div>
            <img src={surf}></img>
            <h3>Surf</h3>
            <p className="ecosystem-p">Surf & search Web3 securely, interact with decentralized apps, verify businesses & people, & learn more about how to use Web3.</p>
            </div>
            <div>
            <img src={things}></img>
            <h3>Store things</h3>
            <p className="ecosystem-p">Use OSIS to save files, photos, assets, and more on the decentralized web. Create Web3 websites & dApps without the need for a server. Turn your family photo album into an eternal memory by storing it in Web3.</p>
            </div>
            <div>
            <img src={shop}></img>
            <h3>Shop</h3>
            <p className="ecosystem-p">Get access to the global marketplace without borders using digital currencies. Buy products & services directly & safely with your privacy intact.</p>
            </div>
            </div>
            <div className="contiener">
            <img src={hand}></img>
            <h3>Trade</h3>
            <p className="ecosystem-p">Find credible information on legitimate projects to invest into. The next Uber, Apple, & Amazon will leverage Web3 & you can be the first to participate</p>
            </div>
            
        </div>
        </div>
    )
}

export default Ecosystem;
import "./WhatOsis.css"
import your from "../asetc/img/your.png"

function WhatOsis() {
    return (
        <div className="whatosis-centre">
            <div className="watosi-max-widhth">
                <div className="watosis-content">
                    <h6 className="whatosis-h6">What is OSIS?</h6>

                    <p className="wahtosis-p">OSIS is the first Web3 Search Engine that will allow anyone to surf, create, manage & discover dApps, assets and projects all in one place seamlessl</p>
                    <h6 className="whatosis-h6"> Why?</h6>
                    <p className="wahtosis-p">Once web3 is indexed, it’ll be more user-friendly, with less risk from scams, creating more economic opportunity for everyone. This inevitably leads to mass adoption, just as it did in the 2000s with Google</p>
                    <div class="container-osisMap-text-button">
                        <button>BUY OSIS</button>
                    </div>
                </div>
                <div className="whatosis-img" >
                    <img src={your}></img>
                </div>
            </div>

        </div>

    )
}
export default WhatOsis
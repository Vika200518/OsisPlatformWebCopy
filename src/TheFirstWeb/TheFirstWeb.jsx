import "./TheFirstWeb.css"
import logo from "../asetc/img/logo.svg"

function TheFirstWeb() {
    return (
        <div className="theFirstWeb-centre">
            <div className="theFirstWeb-max-width">
                <div className="theFirstWeb-contant">
                    <div className="theFirstWeb-title">
                        <h1>The First Web3</h1>
                        <h1>Search Engine</h1>
                        <h6 className="div-h6">We are building the first ever Search Engine, like a Web3  Google, that will allow creators, businesses and consumers to buy, sell and create in the decentralized world</h6>
                        <div class="container-searchEngine-content-button">
                            <button>BUY OSIS</button>
                        </div>
                    </div>
                    <div >
                        <img className="theFirstWeb-img" src={logo}></img>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default TheFirstWeb
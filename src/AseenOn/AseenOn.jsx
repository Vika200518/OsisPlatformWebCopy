import "./AseenOn.css"
import img from "../asetc/img/img.png"
import yaho from "../asetc/img/yaho.png"
import nasdaq from "../asetc/img/nasdaq.png"
import digital from "../asetc/img/digital.png"
import bloomb from "../asetc/img/bloomb.png"
import blockchain from "../asetc/img/blockchain.png"
import fox from "../asetc/img/fox.png"
import news from "../asetc/img/news.png"
import crypton from "../asetc/img/crypton.png"


function AseenOn(){
    return(
        <div className="Aseenon-centre">
            <div className="aseenon-max-widht">
            <h2 className="aseenon-centre">A seen on</h2>

            <div className="Aseenon-img" >
                <div>
          <img  src={img}></img>
          <img src={yaho}></img>
          <img src={blockchain}></img>
          </div>
          <div>
          <img src={nasdaq}></img>
          <img src={bloomb}></img>
          <img src={digital}></img>
          </div>
          <div>
          <img src={fox}></img>
          <img src={news}></img>
          <img src={crypton}></img>
          </div>
            </div>
        </div>
        </div>
    )
}
export default AseenOn
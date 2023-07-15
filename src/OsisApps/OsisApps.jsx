import "./OsisApps.css"
import currency from "../asetc/img/currency.png"
import launchpad from "../asetc/img/launchpad.png"
import metaBadges from "../asetc/img/metaBadges.png"
import search from "../asetc/img/search.png"
import soon from "../asetc/img/soon.png"
import staking from "../asetc/img/staking.png"
import university from "../asetc/img/university.png"


function OsisApps(){
    return(
        <div className="osisaps-content">
            <div className="osisapps-contiener">
<h2 className="osisapps-centr">OSIS Apps</h2>
<div className="osisapps-img">
    <div>
<img src={currency}></img>
<p className="osis-p">OSIS <br/>
Currency</p>
</div>
<div>
<img src={launchpad}></img>
<p className="osis-p">Launchpad</p>
</div>
<div>
<img src={metaBadges}></img>
<p className="osis-p">MetaBadges</p>
</div>
<div>
<img src={staking}></img>
<p className="osis-p">Staking <br/>
Platform</p>
</div>
<div>
<img src={university}></img>
<p className="osis-p">OSIS <br/>
University</p>
</div>
<div>
<img src={soon}></img>
<p className="osis-p">Dashboard <br/>
Coming <br/>
soon</p>
</div>
<div>
<img src={search}></img>
<p className="osis-p">OSIS <br/>
Search <br/>
Coming <br/>
soon</p>
</div>

</div>
        </div>
        </div>
    )
}
export default OsisApps;
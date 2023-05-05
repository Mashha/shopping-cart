import "./homeSectionOne.css"
import shipping from "../../images/shipping.png"
import stores from "../../images/stores.png"
import guarantee from "../../images/guarantee.png"

function HomeSectionOne() {
  return (
    <div className="home-section-one">
        <div className="home-section-one-inner">
            <div className="icons">
                <img src={shipping} alt="" />
                <h4>Free shipping</h4>
                <p>Enjoy free standard shipping on all plants and planters.</p>
            </div>
            <div className="icons">
                <img src={guarantee} alt="" />
                <h4>30 day guarantee</h4>
                <p>If your plant arrives damaged or unhealthy, we replace it for free.</p>
            </div>
            <div className="icons">
                <img src={stores} alt="" />
                <h4>Local stores</h4>
                <p>If you want hands on experience, visit us in one of the stores.</p>
            </div>
        </div>
    </div>
  )
}

export default HomeSectionOne
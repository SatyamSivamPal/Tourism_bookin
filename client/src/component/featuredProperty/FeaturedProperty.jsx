import "./featuredProperty.css";
import room from "../../image/room1.jpg";


const FeaturedProperty = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={room} alt="" className="fpImg" />
        <span className="fpName">Bungalow Stare Miasto</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={room} alt="" className="fpImg" />
        <span className="fpName">La Sapinette</span>
        <span className="fpCity">Chennai</span>
        <span className="fpPrice">Starting from $200</span>
        <div className="fpRating">
          <button>8.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={room} alt="" className="fpImg" />
        <span className="fpName">MFC Erfurter Seen</span>
        <span className="fpCity">North Goa</span>
        <span className="fpPrice">Starting from $90</span>
        <div className="fpRating">
          <button>8.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={room} alt="" className="fpImg" />
        <span className="fpName">Finca Esperanza</span>
        <span className="fpCity">Kerala</span>
        <span className="fpPrice">Starting from $1000</span>
        <div className="fpRating">
          <button>8.2</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;

import saladbowl from "./saladbowl.svg";
import smoothiebowl from "./smoothiebowl.svg";
import chilliwings from "./chilliwings.svg";
import noodles from "./noodles.svg";
import "./MostOrdered.scss";

const MostOrdered = () => {
  return (
    <div className="ongoing-card">
      <h1 className="card-title">Most Ordered</h1>
      <div className="d-flex pt-2 flex-column ordered-items-container">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <img
              width="24px"
              height="24px"
              src={saladbowl}
              alt="salad bowl"
            ></img>
            <div className="d-flex flex-column">
              <div className="row-heading">Fresh Salad Bowl</div>
              <div className="row-heading-small">
                Order: <span className="order-num">120</span>
              </div>
            </div>
          </div>
          <div className="price">Rs. 1000</div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <img
              width="24px"
              height="24px"
              src={smoothiebowl}
              alt="salad bowl"
            ></img>
            <div className="d-flex flex-column">
              <div className="row-heading">Smoothie Salad Bowl</div>
              <div className="row-heading-small">
                Order: <span className="order-num">89</span>
              </div>
            </div>
          </div>
          <div className="price">Rs. 1250</div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <img
              width="24px"
              height="24px"
              src={chilliwings}
              alt="salad bowl"
            ></img>
            <div className="d-flex flex-column">
              <div className="row-heading">Hot Chilli Wings</div>
              <div className="row-heading-small">
                Order: <span className="order-num">76</span>
              </div>
            </div>
          </div>
          <div className="price">Rs. 700</div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <img
              width="24px"
              height="24px"
              src={noodles}
              alt="salad bowl"
            ></img>
            <div className="d-flex flex-column">
              <div className="row-heading">Chicken Noodles</div>
              <div className="row-heading-small">
                Order: <span className="order-num">60</span>
              </div>
            </div>
          </div>
          <div className="price">Rs. 1000</div>
        </div>
      </div>
    </div>
  );
};
export default MostOrdered;

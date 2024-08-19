import chartbar from "./chart-bar.svg";
import "./Customers.scss";
import loyalCustomers from "./loyalcustomers.svg";

const Customers = () => {
  return (
    <div className="customers">
      <h1 className="card-title">Customers</h1>
      <div className="d-flex pt-2 flex-column align-items-center">
        <div className="num-customers">103,467</div>
        <img width="280px" height="24px" src={chartbar} alt="chart bar"></img>
        <div className="bullet-list">
          <ul className="list-container">
            <li className="list-item"> Snackout Loyal Customers Since July</li>
            <li className="list-item"> New Customers</li>
          </ul>
        </div>
        <div className="pt-4">
          <img
            width="100%"
            height="40px"
            src={loyalCustomers}
            alt="loyalCustomers"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Customers;

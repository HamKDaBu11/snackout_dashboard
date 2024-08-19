import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box } from "@mui/material";
import Card from "../Card/Card";
import Delivery from "../Svg/Delivery";
import Dinein from "../Svg/Dinein";
import Pickups from "../Svg/Pickups";
import Revenue from "../Svg/Revenue";
import "./TransactionHistory.scss";
import Ongoing from "../Ongoing/Ongoing";
import MostOrdered from "../MostOrdered/MostOrdered";
import Customers from "../Customers/Customers";

const CARD_DATA: any = [
  {
    title: "Revenue",
    color: "#a796e4",
    image: <Revenue />,
    percentage: "10",
    isRising: true,
  },
  {
    title: "Delivery",
    color: "#fe8b8b",
    image: <Delivery />,
    percentage: "10",
    isRising: true,
  },
  {
    title: "Pick ups",
    color: "#04c7d3",
    image: <Pickups />,
    percentage: "10",
    isRising: false,
  },
  {
    title: "Dine in",
    color: "#5ee2ab",
    image: <Dinein />,
    percentage: "10",
    isRising: true,
  },
];

const TransactionHistory = () => {
  return (
    <div className="transaction-history container">
      <Box component="main" sx={{ p: 1, boxShadow: 0 }}>
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="h5 mb-0 fw-bold snackout-text">
              Welcome back, Anzish
            </h5>
            <small className="transaction-history__sub-heading">
              Monitor the Transaction History
            </small>
            <p></p>
            <h5 className="h5 fw-bold snackout-text">Dashboard</h5>
          </div>
          <div>
            <NotificationsIcon />
          </div>
        </div>
        <div className="responsive-cards">
          {CARD_DATA.map((card: any) => {
            // let svg = Delivery
            return (
              <Card className="transaction-history__card" card_info={card} />
            );
          })}
        </div>
        <div className="responsive-delivery-cards w-full pt-3">
          <div className="col">
            <Ongoing />
          </div>
          <div className="col">
            <MostOrdered />
          </div>
          <div className="col">
            <Customers />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default TransactionHistory;

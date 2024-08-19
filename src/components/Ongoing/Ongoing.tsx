import "./Ongoing.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Ongoing.scss";

const Ongoing = () => {
  return (
    <div className="ongoing-card d-flex flex-column">
      <div className="d-flex justify-content-between w-100">
        <h1 className="card-title">Ongoing</h1>
        <span className="viewAllBtn">
          View All
          <ChevronRightIcon />
        </span>
      </div>
      <div className="ongoing-row">
        <div className="circle"></div>
      </div>
      <div className="ongoing-row"></div>
      <div className="ongoing-row"></div>
    </div>
  );
};
export default Ongoing;

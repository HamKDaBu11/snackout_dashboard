import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "./Ongoing.scss";

const theme: any = createTheme({
  palette: {
    primary: {
      main: "#e9cafc",
    },
  },
});

const RESTAURANT_BOOKINGS = [
  {
    rest_id: 1,
    rest_name: 'Restaurant 1',
    type: 'Reservation',
    item: 'Type 2',
    date: '20 Dec',
    time: '3:30pm'
  },
  {
    rest_id: 2,
    rest_name: 'Restaurant 2',
    type: 'Delivery',
    item: 'chAdeMO',
    date: '12 Nov',
    time: '1:00pm'
  },
  {
    rest_id: 3,
    rest_name: 'Restaurant 3',
    type: 'Pick up',
    item: 'GBT',
    date: '08 Oct',
    time: '12:00am'
  },
]

const Ongoing = (props: any) => {
  return (
    <div className="ongoing d-flex flex-column justify-content-between">
      <div className="d-flex justify-content-between w-100">
        <h1 className="ongoing__card-title">Ongoing</h1>
        <span className="ongoing__viewAllBtn">
          View All
          <ChevronRightIcon />
        </span>
      </div>

      {
        RESTAURANT_BOOKINGS.map((booking: any) => {
          return (
            <div className="ongoing__row p-2">
              {/* <div className="circle"></div> */}
              <div className="ongoing__flexbox d-flex justify-content-between">
                <div className="d-flex w-50">
                  <ThemeProvider theme={theme}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        width: 35,
                        height: 35,
                        borderRadius: 25,
                        bgcolor: 'primary.main'
                      }}
                    >
                      <span>{booking.rest_id}</span>
                    </Box>
                  </ThemeProvider>
                  <div className="d-flex flex-column flex-grow-1 px-2">
                    <small className="ongoing__reservation-type fw-bold">{booking.item}</small>
                    <small className="ongoing__reservation-datetime fw-bold">{booking.date} at {booking.time}</small>
                  </div>
                </div>
                <div className="ongoing__booking-data d-flex flex-column">
                  <small className="ongoing__booked-at fw-light">Booked at</small>
                  <p className="ongoing__booked-restaurant fw-bold m-0">{booking.rest_name}</p>
                  <small className="ongoing__booked-time">Booked for 30 minutes</small>
                </div>
              </div>
            </div>
          )
        })
      }
      {/* <div className="ongoing__row"></div>
      <div className="ongoing__row"></div> */}
    </div>
  );
};
export default Ongoing;

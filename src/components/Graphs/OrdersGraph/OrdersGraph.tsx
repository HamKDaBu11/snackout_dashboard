import { Box, createTheme, ThemeProvider } from '@mui/material';
import './OrdersGraph.scss';

const theme: any = createTheme({
  palette: {
    primary: {
      main: "#cbc0f0",
    },
  },
});

const OrdersGraph = () => {
  return (
    <div className='orders-graph p-3'>
      <h6 className='orders-graph__heading h6 fw-bold m-0'>Order Time</h6>
      <small className='orders-graph__sub-heading'>Today</small>

      <div className='d-flex justify-content-end pb-5'>
        <ThemeProvider theme={theme}>
          <Box
            className="orders-graph__box"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="start"
            sx={{
              width: 120,
              height: 75,
              borderRadius: 1,
              bgcolor: 'primary.main',
              p: 2
            }}>
              <small className='orders-graph__box-afternoon pb-1'>Afternoon</small>
              <small className='orders-graph__box-time pb-2'>1pm - 4pm</small>
              <small className='orders-graph__box-orders'>1.890 orders</small>
            </Box>
        </ThemeProvider>
      </div>

      <div className='orders-graph__chart'></div>

      <div className='orders-graph__times d-flex justify-content-between'>
        <div className='d-flex flex-column'>
          <small className='orders-graph__afternoon'>Afternoon</small>
          <small className='orders-graph__time-percentage'>40%</small>
        </div>
        <div className='d-flex flex-column'>
          <small className='orders-graph__evening'>Evening</small>
          <small className='orders-graph__time-percentage'>32%</small>
        </div>
        <div className='d-flex flex-column'>
          <small className='orders-graph__morning'>Morning</small>
          <small className='orders-graph__time-percentage'>28%</small>
        </div>
      </div>
    </div>
  )
}

export default OrdersGraph

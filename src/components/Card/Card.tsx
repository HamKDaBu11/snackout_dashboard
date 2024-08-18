import {
    Box,
    Card as CardBody,
    CardContent,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import "./Card.scss";
  
  const theme: any = createTheme({
    palette: {
      primary: {
        main: "#a796e4",
        light: "#fe8b8b",
        dark: "#04c7d3",
        contrastText: "#5ee2ab",
      },
    },
  });
  
  const Card = (props: any) => {
    console.log(props.card_info);
    return (
      <CardBody className={`${props.className} card w-100`}>
        <CardContent>
          <div className="d-flex flex-column align-items-between">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center card__title">
                <ThemeProvider theme={theme}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 25,
                      bgcolor: "primary.main",
                      ...(props.card_info.title === "Revenue" && {
                        bgcolor: "primary.main",
                      }),
                      ...(props.card_info.title === "Delivery" && {
                        bgcolor: "primary.light",
                      }),
                      ...(props.card_info.title === "Pick ups" && {
                        bgcolor: "primary.dark",
                      }),
                      ...(props.card_info.title === "Dine in" && {
                        bgcolor: "primary.contrastText",
                      }),
                    }}
                  >
                    {props.card_info.image}
                  </Box>
                </ThemeProvider>
                <h6 className="h6 fw-bold m-0">{props.card_info.title}</h6>
              </div>
              {props.card_info.isRising ? (
                <span className="card__percentage--rising">
                  {props.card_info.percentage}%
                  <div className="card__arrowup"> </div>
                </span>
              ) : (
                <span className="card__percentage--dropping">
                  {props.card_info.percentage}%
                  <div className="card__arrowdown"> </div>
                </span>
              )}
              {/* <span className='card__percentage'>{props.card_info.percentage}</span> */}
            </div>
  
            {props.card_info.title === "Revenue" ? (
              <h4 className="h4 fw-bold pt-2" style={{ color: "#a796e4" }}>
                Rs 149,330<small className="card__small">.35</small>
              </h4>
            ) : props.card_info.title === "Delivery" ? (
              <h4 className="h4 fw-bold pt-2" style={{ color: "#fe8b8b" }}>
                Rs 149,330<small className="card__small">.35</small>
              </h4>
            ) : props.card_info.title === "Dine in" ? (
              <h4 className="h4 fw-bold pt-2" style={{ color: "#5ee2ab" }}>
                Rs 149,330<small className="card__small">.35</small>
              </h4>
            ) : props.card_info.title === "Pick ups" ? (
              <h4 className="h4 fw-bold pt-2" style={{ color: "#04c7d3" }}>
                Rs 149,330<small className="card__small">.35</small>
              </h4>
            ) : null}
          </div>
        </CardContent>
      </CardBody>
    );
  };
  
  export default Card;
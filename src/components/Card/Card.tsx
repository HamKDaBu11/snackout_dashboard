import { Box, Card as CardBody, CardContent, createTheme, ThemeProvider } from '@mui/material';
import './Card.scss';

const theme: any = createTheme({
    palette: {
        primary: {
            main: '#a796e4',
            light: '#fe8b8b',
            dark: '#04c7d3',
            contrastText: '#5ee2ab',
        },
    },
});

const Card = (props: any) => {

    return (
        <CardBody className={`${props.className} card`}>
            <CardContent>
                <div className='d-flex flex-column align-items-between'>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex justify-content-between align-items-center card__title'>
                            <ThemeProvider theme={theme}>
                                <Box
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='center'
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 25,
                                        bgcolor: 'primary.main'
                                    }}>
                                    {props.card_info.image}
                                </Box>
                            </ThemeProvider>
                            <h6 className='h6 fw-bold'>{props.card_info.title}</h6>
                        </div>
                        {
                            props.card_info.isRising

                                ?

                                <span className='card__percentage--rising'>{props.card_info.percentage}%</span>

                                :

                                <span className='card__percentage--dropping'>{props.card_info.percentage}%</span>

                        }
                        {/* <span className='card__percentage'>{props.card_info.percentage}</span> */}
                    </div>
                    <h4 className={`card__${props.card_info.color} h4 fw-bold`}>Rs 149,330<small className='card__small'>.35</small></h4>
                </div>
            </CardContent>
        </CardBody>
    )
}

export default Card

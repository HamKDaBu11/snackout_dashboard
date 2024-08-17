import { BentoOutlined, ChevronRight, DashboardOutlined, ExpandLess, ExpandMore, MailLock, SettingsOutlined } from '@mui/icons-material';
import { Collapse, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import Input from '../Input/Input';
import './SideNavigation.scss';


const SideNavigation = () => {
    const [openFirst, setOpenFirst] = React.useState(true);
    const [openSecond, setOpenSecond] = React.useState(true);

    const handleClickFirstNest = () => {
        setOpenFirst(!openFirst);
    };

    const handleClickSecondNest = () => {
        setOpenSecond(!openSecond);
    };

    const DrawerList = (
        <Box sx={{ width: 300 }} role="options">
            <Input className='justify-content-center py-2' placeholder="Search" />
            <List>
                {['Dashboard', 'Restaurants'].map((text, index) => (
                    <ListItem className='pe-2' key={text} disablePadding>
                        {index === 1 ?
                            <ListItemButton onClick={handleClickFirstNest}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? < DashboardOutlined /> : <BentoOutlined />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                                {openFirst ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            :

                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? < DashboardOutlined /> : <MailLock />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        }

                    </ListItem>
                ))}
            </List>
            <Divider />
            <Collapse in={openFirst} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton className='pe-4' sx={{ pl: 9 }} onClick={handleClickSecondNest}>
                        <ListItemText primary="Restaurant 1" />
                        {openSecond ? <ExpandMore /> : <ExpandLess />}
                    </ListItemButton>
                    {openSecond

                        ?

                        ['Details', 'Menu', 'Bookings', 'Transaction History', 'Reviews & Feedback'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton sx={{ pl: 10 }}>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))

                        :

                        <div></div>

                    }
                </List>
            </Collapse>
            <Divider />
            <ListItemButton sx={{ pl: 9 }}>
                <ListItemText primary="Add New Restaurant" />
                <ChevronRight sx={{ fontSize: 25 }} />
            </ListItemButton>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <SettingsOutlined />
                    </ListItemIcon>
                    <ListItemText primary='Profile Settings' />
                </ListItemButton>
            </ListItem>
            <Divider />
        </Box>
    )

    return (
        <div>
            <Drawer open={true}>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default SideNavigation

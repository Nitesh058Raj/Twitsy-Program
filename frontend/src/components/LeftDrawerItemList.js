import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Home, Bookmark } from '@mui/icons-material';
import { COLORS } from '../constants/colors';
import { setActiveTab } from "../redux/activeTab/activeTabAction";

const LeftDrawerItemList = () => {
    const ItemList = ['Home', 'My Tweets'];
    const ItemIconList = ['Home', 'Bookmark'];
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const currentTab = useSelector(
        state => state.activeTabReducer.activeTab
    );

    const onTabClicked = (tabName) => {
        dispatch(setActiveTab(tabName));
        tabName === "Home" ? navigate("home") : navigate("mytweets");
    }

    const isActiveTab = (tabName) => {
        return tabName === currentTab ? true : false;
    }

    const getIcon = (item, clicked) => {
        switch (item) {
            case 'Home':
                return <Home fontSize="large" sx={{ color: clicked ? COLORS.primary : 'white' }} />;
            case 'Bookmark':
                return <Bookmark fontSize="large" sx={{ color: clicked ? COLORS.primary : 'white' }} />;
            default:
                return null;
        }
    };

    return (
        <List sx={{ padding: 0 }}>
            {ItemList.map((item, key) => {
                return (
                    <ListItemButton
                        key={key}
                        disableTouchRipple={true}
                        sx={{
                            color: isActiveTab(item) ? COLORS.primary : COLORS.white,
                            height: 80,
                            paddingLeft: 5,
                            borderLeftWidth: 3,
                            borderLeftStyle: 'solid',
                            borderLeftColor: (theme) =>
                                theme.palette.mode === 'dark' && isActiveTab(item) ? COLORS.primary : COLORS.background_dark,
                        }}
                        onClick={() => onTabClicked(item)}
                    >
                        <ListItemIcon>
                            {getIcon(ItemIconList[key], isActiveTab(item))}
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography sx={{ fontSize: 28 }}> {item} </Typography>
                        } />
                    </ListItemButton>
                )
            })}
        </List>
    );
}

export default LeftDrawerItemList;

import { Settings } from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import setUser from "../redux/currentUser/currentUserAction";

const ProfileBox = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        console.log("Checking userInfo");
        if (userInfo) {
            dispatch(setUser([
                userInfo.name,
                userInfo.email
            ]));
        }
    }, [dispatch])

    const currentUser = useSelector(
        (state) => state.userReducer.userInfo
    );

    return (
        <Box sx={{ mt: 1, mb: 2 }}>
            <Box sx={{ pl: 1, pr: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ pl: 2, fontSize: 28 }}> ◉ Profile</Typography>
                <IconButton> <Settings />  </IconButton>
            </Box>
            <Box sx={{
                display: 'flex', alignItems: 'center', flexDirection: 'column',
                justifyContent: 'center', mt: 5
            }}>
                <Avatar sx={{ width: 220, height: 220, mb: 3 }} />
                <Typography variant="h5"> {currentUser[0]} </Typography>
                <Typography >{currentUser[1]} </Typography>
            </Box>
        </Box>
    );
}
export default ProfileBox;

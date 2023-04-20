import { Settings } from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";

const ProfileBox = () => {
    return (
        <Box sx={{ mt: 1, mb: 2 }}>
            <Box sx={{ pl: 1, pr: 2, display: 'flex', justifyContent: 'space-between'}}>
                <Typography sx={{ pl: 2, fontSize: 28 }}> ◉ Profile</Typography>
                <IconButton> <Settings />  </IconButton>
            </Box>
            <Box sx={{
                display: 'flex', alignItems: 'center', flexDirection: 'column',
                justifyContent: 'center', mt: 5
            }}>
                <Avatar sx={{ width: 220, height: 220, mb: 3 }} />
                <Typography variant="h5">Dummy User</Typography>
                <Typography >dummy@mock.com</Typography>
            </Box>
        </Box>
    );
}
export default ProfileBox;

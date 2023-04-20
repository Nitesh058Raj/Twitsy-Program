import { Avatar, Box, Typography } from "@mui/material";

const ProfileBox=()=>{
  return(
    <Box sx={{mt: 1, mb: 1}}>
      <Typography sx={{ pl: 2, fontSize: 28 }}> ◉ Profile</Typography>
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

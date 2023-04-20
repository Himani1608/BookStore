import { useState } from "react";
import { Box, Typography, Menu ,MenuItem ,styled} from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'

const Component = styled(Menu)`
    margin-top: 5px;
`;

const Profile = ({ account , setAccount}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const Logout = () => {
    setAccount('');
  }

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2 , cursor:"pointer"}}>{account}</Typography>
      </Box>
      <Component
        anchorEl={open}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {handleClose(); Logout();}}>
            <PowerSettingsNewIcon style={{color:'blue' , fontSize:"medium"}}/>
            <Typography style={{marginLeft:20 , fontSize:14}}>Logout</Typography>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
 
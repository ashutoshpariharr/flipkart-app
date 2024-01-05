import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    setAccount("");
  };

  return (
    <>
      <Box>
        <Typography
          onClick={handleClick}
          style={{ marginTop: 2, cursor: "pointer" }}
        >
          {account}
          <KeyboardArrowDownIcon />
        </Typography>
      </Box>
      <Menu
        sx={{ marginTop: 3 }}
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          <PowerSettingsNewIcon
            sx={{ marginRight: 2 }}
            color="primary"
            fontSize="small"
          />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;

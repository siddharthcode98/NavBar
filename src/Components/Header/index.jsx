import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
const NavBar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: "#f3f6fd",
        "&.MuiStack-root": { padding: "10px 50px " },
        "@media(max-width:425px)": { "&.MuiStack-root": { padding: "5px" } },
      }}
    >
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ "@media(max-width:425px)": { display: "none" } }}
        >
          <MenuIcon sx={{ "@media(max-width:425px)": { display: "none" } }} />
          <Typography
            sx={{
              fontFamily: " DM Sans,sans-serif",
              fontWeight: "700;",
              "@media(max-width:720px)": { display: "none" },
            }}
          >
            Portfolio
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "30px",

            boxShadow:
              " 0 2px 6px 0 rgba(136,148,171,.2),0 24px 20px -24px rgba(71,82,107,.1);",
          }}
        >
          <InputBase placeholder="Search" />
          <SearchIcon
            sx={{
              "@media(max-width:425px)": { width: "15px", height: "15px" },
            }}
          />
        </Stack>
      </Stack>

      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <DarkModeOutlinedIcon
          sx={{ "@media(max-width:425px)": { width: "15px", height: "15px" } }}
        />
        <AddCircleIcon
          sx={{ "@media(max-width:425px)": { width: "15px", height: "15px" } }}
        />
        <NotificationsNoneOutlinedIcon
          sx={{ "@media(max-width:425px)": { width: "15px", height: "15px" } }}
        />
        <Box>
          <Divider orientation="vertical" />
        </Box>

        <Avatar
          sx={{
            width: "24px",
            height: "24px",
            "@media(max-width:425px)": { width: "15px", height: "15px" },
          }}
        >
          H
        </Avatar>
        <Typography
          sx={{
            fontFamily: " DM Sans,sans-serif",
            fontWeight: "700;",
            "@media(max-width:425px)": { display: "none" },
          }}
        >
          Aybuke
        </Typography>
      </Stack>
    </Stack>
  );
};

export default NavBar;

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    zIndex='999'
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItmes: "center", margin: '0 15px' }}>
      <img src={logo} alt="logo" width={100} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;

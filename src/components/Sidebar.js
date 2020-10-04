import React from "react";
import "./Sidebar.css";
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SidebarRow from "./SidebarRow";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={EmojiFlagIcon} title="Category" />
      <SidebarRow Icon={PeopleIcon} title="Events" />
      <SidebarRow Icon={ChatIcon} title="Hire Guide" />
      <SidebarRow Icon={StoreFrontIcon} title="Support" />
      <SidebarRow Icon={VideoLibraryIcon} title="Blogs" />
      <Button variant="outlined" className="sidebar__signout" fullWidth>
        Sign Out
      </Button>
    </div>
  );
}

export default Sidebar;

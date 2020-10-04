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
      <SidebarRow Icon={EmojiFlagIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StoreFrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <Button variant="outlined" className="sidebar__signout" fullWidth>
        Sign Out
      </Button>
    </div>
  );
}

export default Sidebar;

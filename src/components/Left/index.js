import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/Person";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TwitterIcon from "@material-ui/icons/Twitter";
import ExploreIcon from "@material-ui/icons/Explore";
import LockIcon from "@material-ui/icons/Lock";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import "./left.css";

export default function Left() {
  return (
    <div className="left__container">
      <TwitterIcon className="list__icon" />
      <ul className="left__text">
        <li>
          <HomeIcon />
          <span>Home</span>
        </li>
        <li>
          <ExploreIcon /> <span>Explore</span>
        </li>
        <li>
          <NotificationsIcon />
          <span>Notifications</span>
        </li>
        <li>
          <MailOutlineIcon />
          <span>Messages</span>
        </li>
        <li>
          <BookmarkBorderIcon />
          <span>Bookmarks</span>
        </li>
        <li>
          <ListAltIcon />
          <span>Lists</span>
        </li>
        <li>
          <PersonIcon />
          <span>Profile</span>
        </li>
        <li>
          <MoreHorizIcon />
          <span> More</span>
        </li>
      </ul>
      <button className="button__tweet">Tweet</button>

      <div className="profile__down">
        <img
          alt=""
          src="https://pbs.twimg.com/profile_images/1285140955922931712/EzqruMt8_normal.jpg"
        />
        <div className="profile__names">
          <p>
            {" "}
            Sseonga e..{" "}
            <span>
              {" "}
              <LockIcon />
            </span>
          </p>
          <p>@senoga4real</p>
        </div>
        <div>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
}

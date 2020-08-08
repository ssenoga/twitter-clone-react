import React from "react";

import "./left.css";

export default function Left() {
  return (
    <div className="left__container">
      <ul>
        <li>Twitter</li>
        <li>Explore</li>
        <li>Notifications</li>
        <li>Messages</li>
        <li>Bookmarks</li>
        <li>Lists</li>
        <li>Profile</li>
        <li>More</li>
      </ul>
      <button>Tweet</button>
    </div>
  );
}

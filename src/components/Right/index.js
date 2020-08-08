import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./right.css";

export default function Right() {
  return (
    <div className="right__container">
      <div className="input__wrapper">
        <input type="search" placeholder="Search twitter" />
        <span>
          <SearchIcon />
        </span>
      </div>

      {/* whats happeinf */}
      <div className="right__happening">
        <div className="happening__title">
          <h3>Trends For You</h3>
          <SettingsIcon />
        </div>
        <div className="card">
          <header>
            <p>Trending in Uganda</p>
            <ExpandMoreIcon />
          </header>
          <article>
            <h5>Bobi Wine </h5>
            <p>245k Tweets</p>
          </article>
        </div>

        <div className="card">
          <header>
            <p>Trending in Uganda</p>
            <ExpandMoreIcon />
          </header>
          <article>
            <h5>Bobi Wine </h5>
            <p>245k Tweets</p>
          </article>
        </div>
        <div className="card">
          <header>
            <p>Trending in Uganda</p>
            <ExpandMoreIcon />
          </header>
          <article>
            <h5>Bobi Wine </h5>
            <p>245k Tweets</p>
          </article>
        </div>
        <div className="card">
          <header>
            <p>Trending in Uganda</p>
            <ExpandMoreIcon />
          </header>
          <article>
            <h5>Bobi Wine </h5>
            <p>245k Tweets</p>
          </article>
        </div>
        <div className="card">
          <header>
            <p>Trending in Uganda</p>
            <ExpandMoreIcon />
          </header>
          <article>
            <h5>Bobi Wine </h5>
            <p>245k Tweets</p>
          </article>
        </div>
        <div className="showmore">
          <h3>Show more </h3>
        </div>
      </div>
      {/* who to follow */}
      <div className="card__follow">
        <header>
          <h3>Who to follow</h3>
        </header>
        <div className="user">
          <img
            alt=""
            src="https://pbs.twimg.com/profile_images/1222136283339853833/dr25E9Lk_bigger.jpg"
          />
          <div className="user__text">
            <h5>Danny Thampson</h5>
            <p>@DThompsonDev</p>
          </div>
          <button className="follow_btn">Follow</button>
        </div>
        <div className="user">
          <img
            alt=""
            src="https://pbs.twimg.com/profile_images/1222136283339853833/dr25E9Lk_bigger.jpg"
          />
          <div className="user__text">
            <h5>Danny Thampson</h5>
            <p>@DThompsonDev</p>
          </div>
          <button className="follow_btn">Follow</button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ImageIcon from "@material-ui/icons/Image";
import GifIcon from "@material-ui/icons/Gif";
import BarChartIcon from "@material-ui/icons/BarChart";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import EventIcon from "@material-ui/icons/Event";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import "./central.css";

export default function Central() {
  return (
    <div className="central__container">
      <div className="center__upperHeader">
        <h3>Lastest Tweets</h3>
      </div>

      <div className="tweet__addSection">
        <div className="sender__image">
          <img
            alt=""
            src="https://pbs.twimg.com/profile_images/1285140955922931712/EzqruMt8_bigger.jpg"
          />
        </div>
        <div className="tweet__info">
          <div className="info__input">
            <input type="text" placeholder="What's happening?" />
          </div>
          <div className="tweet__inputs">
            <div className="info__icons">
              <ImageIcon />
              <GifIcon />
              <BarChartIcon />
              <EmojiEmotionsIcon />
              <EventIcon />
            </div>

            <div className="tweet__buttons">
              <button disabled="true">Tweet</button>
            </div>
          </div>
        </div>
      </div>

      <div className="tweets__list">
        <div className="tweet__card">
          <div className="tweeter__image">
            <img
              alt=""
              src="https://pbs.twimg.com/profile_images/1203400518405697536/b63qF4VF_bigger.jpg"
            />
          </div>
          <div className="tweet__text">
            <div className="tweet__header">
              <p>
                <span>Deejay Markrebel</span> @Markrebel13 <sup>.</sup> 44m
              </p>
            </div>
            <div className="tweet__caption">
              <p>#NTVDanceParty</p>
              <p>Get ready...</p>
            </div>
            <div className="tweet__pic">
              <img
                alt=""
                src="https://pbs.twimg.com/media/Ee6BpfiXYAAMS84?format=jpg&name=small"
              />
            </div>
            <div className="tweet__buttons">
              <div>
                <ChatBubbleOutlineRoundedIcon /> 2
              </div>
              <div>
                {" "}
                <RepeatRoundedIcon /> 4
              </div>
              <div>
                <FavoriteBorderRoundedIcon /> 24{" "}
              </div>
              <div>
                <PublishRoundedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

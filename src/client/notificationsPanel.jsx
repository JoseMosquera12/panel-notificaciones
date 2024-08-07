import { Grid } from "@mui/material";

import webber from "../assets/images/avatar-mark-webber.webp";
import gray from "../assets/images/avatar-angela-gray.webp";
import jacob from "../assets/images/avatar-jacob-thompson.webp";
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import kimberly from "../assets/images/avatar-kimberly-smith.webp";
import natham from "../assets/images/avatar-nathan-peterson.webp";
import anna from "../assets/images/avatar-anna-kim.webp";

import { Notification } from "../components/Notification";
import { useState } from "react";

const mockNotifications = [
  {
    name: " Mark Webber ",
    action: "react",
    target: {
      type: "post",
      content: " reacted to your recent post",
      post: "My first tournament today!",
    },
    isRead: false,
    date: "1m ago",
    avatar: webber,
  },
  {
    name: " Angela Gray ",
    action: "follow",
    target: {
      type: "post",
      content: " follow you ",
    },
    isRead: false,
    date: "5m ago",
    avatar: gray,
  },
  {
    name: " Jacob Thompson ",
    action: "Join",
    group: " Chess club",
    target: {
      type: "post",
      content: "has joined your group ",
    },

    isRead: false,
    date: "1 day ago",
    avatar: jacob,
  },
  {
    name: " Rizky Hasanuddin ",
    action: "send message",
    target: {
      type: "post",
      content: " sent you a private message ",
    },
    isRead: true,
    date: "5 days ago",
    avatar: rizky,
  },
  {
    name: " Kimberly Smith ",
    action: "comment",
    target: {
      type: "post",
      content: "commented on your picture",
    },
    isRead: true,
    date: "1 week ago",
    avatar: kimberly,
  },
  {
    name: " Nathan Peterson ",
    action: "react",
    target: {
      type: "post",
      content:
        "reacted to your recent post 5 end-game strategies to increase your win rate",
    },
    isRead: true,
    date: "2 weeks ago",
    avatar: natham,
  },
  {
    name: " Anna Kim ",
    action: "left",
    target: {
      type: "post",
      content: "left the group",
    },
    group: " Chess club",
    isRead: false,
    date: "2 weeks ago",
    avatar: anna,
  },
];


const NotificationsPanel = () => {
  const [countNotifications, setCountNotifications] = useState(4)
  const [isRead, setIsRead] = useState(false)

  const handlePostClick = (event) => {
    const post = event.currentTarget; 
    const status = event.querySelector('.status');
    status.classList.remove('is-read'); // verificar o acomodar is-read o not-read
    setCountNotifications((prevNotification) => Math.max(0, prevNotification - 1));
    if (countNotifications === 1){
      setIsRead(true);
    }
  };

  const handleMarkAllRead = () => {
    setCountNotifications(0)
    setIsRead(true)
  } 
  return (
    <>  
        <div className="notificacion">
    <h3 className="title"> Notifications <span className="number"> {countNotifications} </span> </h3>
    <p className={`mark ${!isRead ? 'markAllRead' : ''}`} onClick={handleMarkAllRead} >  Marcar todo como leido</p>
  </div>
  
    <Grid container direction={"column"}>
      {mockNotifications.map((notification) => (
        <Grid item>
          <Notification notification={notification} />
        </Grid>
      ))}
    </Grid>
 </>
  );
};


export default NotificationsPanel;

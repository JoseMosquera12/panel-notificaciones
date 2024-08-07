import { Avatar, Grid } from "@mui/material";
import { useState } from "react";



export const Notification = ({ notification }) => {

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
    
    <Grid container className="layout-helper">

    <Grid className="post" onClick={handlePostClick}>  

    <Grid item className="Imagenes">
        <Avatar className="Avatar" alt="Remy Sharp" src={notification.avatar} />
      </Grid>

    <Grid className="Message">

      <Grid item className="content-message">
        
       <a href = "#"> {notification.name} </a> 

       <div className= "info">        
        <p className="content"> {notification.target.content} <strong> {notification.target.post} </strong> </p> 
        <span className={ `status ${isRead ? 'not-read' : ''}`}> </span> {/* verificar o acomodar is-read o not-read */}
      </div>

       <a href = "#"> {notification.group} </a>
       
      </Grid >

      <p> {notification.date} </p> 

    </Grid>
    </Grid>

    </Grid>
    </>
  );
};

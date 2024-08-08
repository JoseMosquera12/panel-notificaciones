import { Avatar, Grid } from "@mui/material";


export const Notification = ({ notification }) => {

  return (
    <>
    <Grid container className="layout-helper">

      <Grid item className="Imagenes">
        <Avatar className="Avatar" alt="Remy Sharp" src={notification.avatar} />
      </Grid>

    <Grid className="Message">

      <Grid item className="content-message">    
       <a href = "#"> {notification.name} </a> 
       <div className= "info">        
        <p className="content"> {notification.target.content} <strong> {notification.target.post} </strong> </p> 
      </div>

       {notification.target.message ? <a href="#" className="car"> {notification.target.message} </a> : '' }

       <a href = "#">{notification.group} </a>
      </Grid >

      <p> {notification.date} </p> 

    </Grid>

    </Grid>
    </>
  );
};

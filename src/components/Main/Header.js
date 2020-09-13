import React, { useContext } from "react";
import { app } from "../../base";
import { AuthContext } from "../../Auth";
import { makeStyles } from '@material-ui/core/styles'

import NotFound from "../../common/NotFound";
import { AppBar, IconButton, Toolbar, Button, Typography } from "@material-ui/core";
import Logo from '../../img/logo.png'
   
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: '#ffffff' 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#14213d'
  },
  textColor: {
    color: '#14213d',
    marginRight: '1rem'  
  },
  imgSize: {
    height: '2.4rem',
  }
}));


export default function Header() { 
  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);

  var admins = app.database().ref("admins/");
  admins.on("value", function (snapshot) {
    console.log(snapshot.val());
  });

  return (
    <React.Fragment>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <IconButton size ="small" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img className ={classes.imgSize} src = {Logo} alt ="Logo image" /> 
          </IconButton>
          <Typography variant = "h6" className = {classes.title}>
            Helix Medical
          </Typography>
          <Typography variant="body1" className={classes.title}>
            Your current Covid status is: 
          </Typography>
          <Typography variant="body1" className={classes.textColor}> 
            Logged in as: {currentUser.email.substring(0, currentUser.email.indexOf('@'))}
          </Typography>
          <Button className={classes.textColor} onClick = {() => app.auth().signOut()} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  ); 
}

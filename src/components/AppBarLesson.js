import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import FilteredLessons from './FilteredLessons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    toolbar: {
        minHeight: 100,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(3),
        
      },
  }));

function AppBarLesson({uniqueLessons, onChangeLesson, uniqueLesson}) {
    const classes = useStyles();
   
    return (        
        <>
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
        Your Lessons Library
        </Typography>
        <FilteredLessons uniqueLessons={uniqueLessons} onChangeLesson={onChangeLesson} 
        uniqueLesson={uniqueLesson} />
        </Toolbar>
            </AppBar> 
        </>
    )
}

export default AppBarLesson

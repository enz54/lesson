import React from 'react';import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(1),        
      },
    },
      textField:{          
      width: 600 ,
      height:50,
      display: 'block',
      paddingLeft:50

      }
    
  }));


function FilteredLessons({uniqueLessons, onChangeLesson,uniqueLesson}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Autocomplete
              multiple
              limitTags={1}
              id="multiple-limit-tags"
              options={uniqueLessons}
              getOptionLabel={(option) => option}
              value ={uniqueLesson}
              onChange = { e => onChangeLesson(e.target.innerText)}
              renderInput={(params) => (
              <TextField className={classes.textField} {...params} 
                          variant="filled"  placeholder="Pick One..." />
                  )}
          />
        </div>
    )
}

export default FilteredLessons

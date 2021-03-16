import { useEffect } from 'react';
import CardLesson from './components/CardLesson';
import AppBarLesson from './components/AppBarLesson';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


function App() {
  const [cards, setCards] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [uniqueLesson, setUniqueLesson] = useState(["key-stage-4"])
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(8);
  
useEffect(() => {
  fetchLesson();
},[]);

const fetchLesson = async () => {
  const result = await axios.get('https://www.blackbullion.com/_dev/api/lessons');
  const res = result.data.data;
  setIsLoading(false);
  return setCards(res);
}
  // Unique card
  const allLessons = cards.map(card => card.url).map(res => res.split('/').pop());
  let uniqueLessons = Array.from(new Set(allLessons)).sort();
 

  // Unique filtered cards
  const uniqueFilteredCards = cards.filter( card => card.url.indexOf(uniqueLesson) !== -1)
 
  // Get current cardPerPage
  const indexOfLastCart = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCart - cardPerPage;
  const currentCards = uniqueFilteredCards.slice(indexOfFirstCard,indexOfLastCart);
 

  const onChangeLesson = (newValue) => {
    if(newValue === undefined) return;
    setUniqueLesson(  [ 
       newValue ]) 
  }

  const handleChange =  (event,newValue) => { setCurrentPage(newValue); }
  const classes = useStyles();


  return (
    <>
      <AppBarLesson cards={cards} uniqueLessons={uniqueLessons} 
                    onChangeLesson={onChangeLesson} uniqueLesson={uniqueLesson} />
      <Grid container>
        { 
          loading ? <div className={classes.root}>
                        <LinearProgress  color="secondary" />
                    </div> 
          : 
          <CardLesson cards={currentCards} 
                      cardPerPage={cardPerPage} currentPage={currentPage} 
                      handleChange={handleChange} />      
        }
      </Grid>
      
    </>
  );
}

export default App;

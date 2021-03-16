import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) =>({
    root: { 
         maxWidth: 200,        
    },
    media: { 
        height: 150,
    },
    gridTop:{
        paddingTop:20,
    },
    pagination:{
        '& > *': {
            marginTop: theme.spacing(4),
          },
    rounded: {
        color: '#fff',
        width: 70,
        height: 21,
        fontSize: 2+"rem",
    },
    }
  }));
 


function CardLesson({cards,cardPerPage,currentPage,handleChange}) {
    const classes = useStyles();
    return (
        <>
            
                <Grid container spacing={1} className={classes.gridTop}>                
                    { cards && cards.map((card,idx) => {

                            return <Grid key={idx} item xs={12} sm={6} md={3} lg={2}>
                            <Card  className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={card.image}
                                    title="Contemplative Reptile">
                                        <Avatar variant="rounded">
                                            {card.duration} min
                                        </Avatar>                                                              
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="subtitle2">
                                        {card.title}
                                        </Typography>
                                        <div style={{ width: 160, whiteSpace: "nowrap" }}>
                                        <Box
                                          component="div"
                                          my={1}
                                          textOverflow="ellipsis"
                                          overflow="hidden"
                                          bgcolor="background.paper"
                                        >
                                        {card.description}
                                        </Box>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                            </Grid>
                        })
                    }
                    <Grid container justify="center" alignItems="center">
                        <Pagination 
                            className={classes.pagination} 
                            count={cardPerPage} page={currentPage} 
                            onChange={handleChange} />
                    </Grid>
                </Grid>
                
            
        </>
    )
}

export default CardLesson

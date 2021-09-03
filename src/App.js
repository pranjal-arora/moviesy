import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts'
import movies from './images/movies.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
// import Post from './components/Posts/Post/Post';
import useStyles from './styles';


const App = () => {
    const [currentId, setCurrentId] =useState(0);
    const classes= useStyles();
    const dispatch= useDispatch();

    useEffect( ()=> {dispatch(getPosts());}, [currentId, dispatch]);//dispatch


    return(
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center"> Moviesy</Typography>
                <img className={classes.image} src={movies} alt="movies" width="60" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Form currentId={currentId} setCurrentId={setCurrentId} /> 
                        </Grid>

                    </Grid>
                </Container>
            </Grow>


        </Container>



        // <div>
        //     <h1>App</h1>
        // </div>
    );
};

export default App; 
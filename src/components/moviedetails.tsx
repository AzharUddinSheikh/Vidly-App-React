import React, { Component } from 'react';

interface MovieDetailProps {
    match : any,
    history : any
}
 
interface MovieDetailState {
}
 
class MovieDetail extends React.Component<MovieDetailProps, MovieDetailState> {


    handleMovie = () => {
        this.props.history.replace("/movies");
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Movie From {this.props.match.params.id}</h1>  
                <button className='btn btn-primary m-2' onClick={this.handleMovie}>save</button>
            </React.Fragment>
        );
    }
}
 
export default MovieDetail;
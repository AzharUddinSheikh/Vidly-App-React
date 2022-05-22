import React, { Component } from 'react';

interface MovieDetailProps {
    match : any
}
 
interface MovieDetailState {
    
}
 
class MovieDetail extends React.Component<MovieDetailProps, MovieDetailState> {

    render() { 
        const {match : any} = this.props;
        return (
            <h1>Movie From</h1>  
        );
    }
}
 
export default MovieDetail;
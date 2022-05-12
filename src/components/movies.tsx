import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';


class Movies extends Component {

    state = {
        movies : getMovies(),
    }

    handleDelete = (movie : any) => {
        const movies = this.state.movies.filter(m => m != movie);
        this.setState({movies});
    }

    render() : JSX.Element { 
        let {movies} = this.state;
        if (movies.length === 0) {
            return <p>No movies in the database</p>;
        }
        return ( 
            <React.Fragment>
                <p>showing {movies.length} movies in the database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        { movies.map( movie => (<tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={() => this.handleDelete(movie)} className='btn btn-danger'>Delete</button></td>
                        </tr>) )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;
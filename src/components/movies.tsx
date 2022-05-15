import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import Likes from './likes';


class Movies extends Component {

    state = {
        movies : getMovies(),
        pageSize : 4,
    }

    handleDelete = (movie : any) : void => {
        const movies = this.state.movies.filter(m => m !== movie);
        this.setState({movies});
    }


    handleLike = (movie : any) : void => {
        const movies = [...this.state.movies];
        let index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].like = !movies[index].like;
        this.setState({movies});
    }

    handlePageChange = () : void => {
        console.log("page Changed");
    }

    render() : JSX.Element { 
        let {movies, pageSize} = this.state;
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
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        { movies.map( movie => (<tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Likes onClick={() => this.handleLike(movie)} liked={movie.like}/></td>
                            <td><button onClick={() => this.handleDelete(movie)} className='btn btn-danger'>Delete</button></td>
                        </tr>) )}
                    </tbody>
                </table>
                <Pagination itemCount={movies.length} pageSize={pageSize} onPageChange={() => this.handlePageChange}/>
            </React.Fragment>
        );
    }
}
 
export default Movies;
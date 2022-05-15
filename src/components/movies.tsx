import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';
import Pagination from './common/pagination';
import Likes from './likes';
import {paginate} from '../utils/paginate';
import ListGroup from './common/listgroup';


interface movie {
        _id: string;
        title: string;
        genre: {
            _id: string;
            name: string;
        };
        numberInStock: number;
        dailyRentalRate: number;
        publishDate: string;
        like: boolean;
}

class Movies extends Component {

    state = {
        movies : [],
        pageSize : 4,
        currentPage : 1,
        genres : [],
        selectedGenre : "all",
    }

    componentDidMount () {
        this.setState({movies : getMovies(), genres: getGenres()})
    }

    handleDelete = (movie : any) : void => {
        const movies = this.state.movies.filter(m => m !== movie);
        this.setState({movies});
    }


    handleLike = (movie : movie) : void => {
        const movies = [...this.state.movies];
        let index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].like = !movies[index].like;
        this.setState({movies});
    }

    handlePageChange = (page:number) : void => {
        this.setState({currentPage:page})
    }

    handleSelect = (genre: any) => {
        this.setState({selectedGenre : genre})
    }

    render() : JSX.Element { 
        let {movies : allMovies, pageSize, currentPage, selectedGenre, genres} = this.state;
        if (allMovies.length === 0) {
            return <p>No movies in the database</p>;
        }

        const movies = paginate(allMovies, currentPage, pageSize);

        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col-3">
                        <ListGroup 
                            items={genres}
                            onItemSelect={this.handleSelect}
                            selectedItem={selectedGenre} 
                            />
                    </div>
                    <div className="col">
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
                        <Pagination 
                            itemCount={allMovies.length} 
                            pageSize={pageSize} 
                            onPageChange={this.handlePageChange}
                            currentPage={currentPage}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Movies;
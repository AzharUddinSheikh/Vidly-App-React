import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import ListGroup from './common/listgroup';
import MovieTable from './movieTable';
import _ from 'lodash';


interface MovieState {
    movies : any,
    pageSize : number,
    currentPage : number,
    genres : any,
    sortColumn : {path:String, order:boolean|"asc"|"desc"},
    selectedGenre? : any 
}

class Movies extends Component {

    state : MovieState = {
        movies : [],
        pageSize : 4,
        currentPage : 1,
        genres : [],
        sortColumn : {path:'title', order:"asc"}
    }

    componentDidMount () {

        const genres = [{'_id':'', 'name':'All Genre'}, ...getGenres()];
        this.setState({movies : getMovies(), genres})
    }

    handleDelete = (movie : any) : void => {
        const movies = this.state.movies.filter((m: any) => m !== movie);
        this.setState({movies});
    }


    handleLike = (movie : any) : void => {
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
        // setting current page to 1 
        this.setState({selectedGenre : genre, currentPage:1})
    }

    handleSort = (path : String) => {
        const sortColumn = {...this.state.sortColumn};
        if (sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === "asc" ? "desc" : "asc")
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
       this.setState({sortColumn})
    }

    render() : JSX.Element { 
        let {movies : allMovies, pageSize, currentPage, selectedGenre, genres, sortColumn} = this.state;
        if (allMovies.length === 0) {
            return <p>No movies in the database</p>;
        }

        const filtered = selectedGenre && selectedGenre._id
                            ? allMovies.filter((m: { genre: { _id: any; }; }) => m.genre._id === selectedGenre._id) 
                            : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

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
                        <p>showing {filtered.length} movies in the database</p>
                        <MovieTable 
                            movies={movies} 
                            onDelete={this.handleDelete} 
                            onLike={this.handleLike}
                            onSort={this.handleSort}/>  
                        <Pagination 
                            itemCount={filtered.length} 
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
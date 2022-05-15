import React, { Component } from 'react';
import Likes from './likes';

interface movie {
     _id: string;
     title: string;
     genre: {
          name: string;
     };
     numberInStock: number;
     dailyRentalRate: number;
     like?: boolean | undefined;
}

interface sortColumn {
     path: string,
     order : boolean | "asc" | "desc"
}

interface MovieTableProps {
     movies : any,
     onDelete : (movie:movie)=>void,
     onLike : (movie:movie) => void,
     onSort : (sortColumn : sortColumn) => void,
     sortColumn : sortColumn;
}


class MovieTable extends Component<MovieTableProps> {

     raiseSort = (path : string) => {
          const sortColumn = {...this.props.sortColumn};
          if (sortColumn.path === path) {
               sortColumn.order = (sortColumn.order === "asc" ? "desc" : "asc")
          } else {
               sortColumn.path = path;
               sortColumn.order = "asc";
          }
          this.props.onSort(sortColumn);
     }

     render() { 
          const {movies, onDelete, onLike} = this.props;
          return (
               <table className="table">
                    <thead>
                         <tr>
                              <th onClick={()=>this.raiseSort('title')} scope="col">Title</th>
                              <th onClick={()=>this.raiseSort('genre.name')} scope="col">Genre</th>
                              <th onClick={()=>this.raiseSort('numberInStock')} scope="col">Stock</th>
                              <th onClick={()=>this.raiseSort('dailyRentalRate')} scope="col">Rate</th>
                              <th scope='col'></th>
                              <th scope='col'></th>
                         </tr>
                    </thead>
                    <tbody>
                         { movies.map( (movie: movie) => (<tr key={movie._id}>
                              <td>{movie.title}</td>
                              <td>{movie.genre.name}</td>
                              <td>{movie.numberInStock}</td>
                              <td>{movie.dailyRentalRate}</td>
                              <td><Likes onClick={() => onLike(movie)} liked={movie.like}/></td>
                              <td><button onClick={() => onDelete(movie)} className='btn btn-danger'>Delete</button></td>
                         </tr>) )}
                    </tbody>
               </table>
          );
     }
}
 
export default MovieTable;

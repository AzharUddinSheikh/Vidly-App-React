import React, { Component } from 'react';
import TableHeader from './common/tableheader';
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

     columns = [
          {path:'title', label:'Title'},
          {path:'genre.name', label:'Genre'},
          {path:'numberInStock', label:'Stock'},
          {path:'dailyRentalRate', label:'Rate'},
          {key : 'like'},
          {key : 'delete'}
     ]

     render() { 
          const {movies, onDelete, onLike, sortColumn, onSort} = this.props;
          return (
               <table className="table">
                    <TableHeader 
                         columns={this.columns} 
                         sortColumn={sortColumn} 
                         onSort={onSort}/>
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

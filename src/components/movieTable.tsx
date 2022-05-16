import React, { Component } from 'react';
import TableBody from './common/tableBody';
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
          {key : 'like', content : (movie:any) => <Likes onClick={() => this.props.onLike(movie)} liked={movie.like}/>},
          {key : 'delete', content : (movie:any) => <button onClick={() => this.props.onDelete(movie)} className='btn btn-danger'>Delete</button>}
     ]

     render() { 
          const {movies, sortColumn, onSort} = this.props;
          return (
               <table className="table">
                    <TableHeader 
                         columns={this.columns} 
                         sortColumn={sortColumn} 
                         onSort={onSort}/>
                    <TableBody data={movies} columns={this.columns}/>
               </table>
          );
     }
}
 
export default MovieTable;

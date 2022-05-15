import React from 'react';
import Likes from './likes';


function MovieTable(props : any) {
     const {movies, onDelete, onLike} = props;
  return (
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
               { movies.map( (movie : any) => (<tr key={movie._id}>
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

export default MovieTable;
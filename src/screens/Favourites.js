import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteBookFromFavourite } from '../redux/actions';

class Favourites extends React.Component{

  handleDeleteFav = bookId => {
    this.props.deleteBookFromFavourite(bookId);
  }

  render(){
    const { books } = this.props;
        
    return (
      <div className='container'>
        <h1>Избранные книги</h1>
        <Link to='/books' className='btn btn-danger mb-3'>
          Вернуться к Списку книг
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Название</th>
              <th scope="col">Автор</th>
              <th scope="col">Цена</th>
              <th scope="col">Подробнее</th>
              <th scope="col">Избранное</th>
            </tr>
          </thead>
          <tbody>
          {books.length > 0 
            ?
              books.map((book)=>{
                return (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.price} BYN</td>
                    <td>
                      <Link to={`/books/${book.id}`} className='btn btn-danger'>Подробнее</Link>
                    </td>
                    <td>
                      <button 
                        className='btn btn-danger' 
                        onClick={()=>{this.handleDeleteFav(book.id)}}
                      >Удалить из Избранного</button>
                    </td>
                  </tr>
                )
              })
            :
              <tr>
                <td colSpan="5">
                  Список пока пуст
                </td>
              </tr>
          }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const favouriteIds = state.books.favoriteBooks;
  const books = state.books.items.filter(book => favouriteIds.includes(book.id));
  
  return {
    books: books,
  }
}

export default connect(mapStateToProps, { deleteBookFromFavourite })(Favourites);
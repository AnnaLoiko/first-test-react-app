import React from 'react';
import {Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';


import { likeBook, dislikeBook } from '../redux/actions';

class Books extends React.Component {

  handleLike = bookId => {
    this.props.likeBook(bookId);
  }
  handleDisLike = bookId => {
    this.props.dislikeBook(bookId);
  }

  render(){
    const { books } = this.props;

    return (
      <div className='container'>
      <h1>Каталог книг</h1>

      <div>
        <nav className="navbar navbar-expand navbar-light mb-3" style={{backgroundColor: "#e3f2fd"}} >
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to='/add'>Добавить книгу</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/favourites'>Избранные книги</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>





        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Название</th>
              <th scope="col">Автор</th>
              <th scope="col">Цена</th>
              <th scope="col">Подробнее</th>
              <th scope="col">Рейтинг</th>
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
                        onClick={()=>{this.handleLike(book.id)}}
                      >Like {book.likes}</button>
                      <button 
                        className='btn btn-dark ml-3' 
                        onClick={()=>{this.handleDisLike(book.id)}}
                      >Dislike {book.dislikes}</button> 
                    </td>
                  </tr>
                )
              })
              :
              <tr>
                <td colSpan="5">
                  Пусто
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.items
  }
}

const actions = { likeBook, dislikeBook };
export default connect(mapStateToProps, actions)(Books);
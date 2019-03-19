import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteBook, addBookToFavourite, deleteBookFromFavourite } from '../redux/actions';

class Single extends React.Component{
    
  handleDelete = () => {
    const { currentBook: { id }, favoriteBooks } = this.props;
    
    this.props.deleteBook(id);

    if (favoriteBooks.includes(id)) {
      this.props.deleteBookFromFavourite(id);
    }

    this.props.history.push('/books');
  }

  handleFav = () => {
    const { currentBook: { id }, favoriteBooks } = this.props;

    if (!favoriteBooks.includes(id)){
      this.props.addBookToFavourite(id);
      this.props.history.push('/favourites');
    }
  }
  
  render() {
    const { currentBook } = this.props;

    if (!currentBook) return null;
    
    return (
      <div className='container'>
        <Link to='/books' className='btn btn-secondary mb-3'>
          Вернуться к Списку книг
        </Link>
        <div className="card">
          <h5 className="card-header">{currentBook.title}</h5>
          <div className="card-body">
            <h5 className="card-title">{currentBook.author}</h5>
            <p className="card-text"><b>Цена:</b> {currentBook.price} руб</p>
            <button 
              className="btn btn-danger mr-3" 
              onClick={this.handleDelete}
            >Удалить</button>
            <button 
              className="btn btn-warning mr-3" 
              onClick={this.handleFav}
            >В избранное</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const bookId = +props.match.params.id;

  return {
    currentBook: state.books.items.find(book => book.id === bookId),
    favoriteBooks: state.books.favoriteBooks
  }
}

const actions = { deleteBook, addBookToFavourite, deleteBookFromFavourite };
export default connect(mapStateToProps, actions)(Single);
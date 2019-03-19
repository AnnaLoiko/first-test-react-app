import React from 'react';
import { connect } from 'react-redux';

import { createBook } from '../redux/actions';

const authors = ['Нет автора','Н.В. Гоголь','Л.Н. Толстой','Чак Паланик','Э.А. Асадов'];

class Form extends React.Component{
  state = {
    title: '',
    price: '',
    author: '',
    likes: 0,
    dislikes: 0,
  }

  handleChange = (e)=>{
    const {name, value} = e.target;
    this.setState({[name]:value}); 
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    const {title, price, author, likes, dislikes} = this.state;

    const book = {title, price, author, likes, dislikes};
    this.props.createBook(book);
    
    // this.setState({title:'', price:'', author:''});
    this.props.history.push('/books');
  }
  
  render(){
    const {title, price, author} = this.state;
    
    return (
      <div className="container">
      <h1>Добавление книги</h1>
      <form onSubmit={this.handleSubmit} className='container'>
        <div className="row">
          <div className="col">
            <input type="text" name="title" className="form-control" placeholder='Название' value={title} onChange={this.handleChange}></input>
          </div>
          <div className="col">
            <select className="form-control" name="author" value={author} onChange={this.handleChange}>
            {authors.map((item, i)=>{
              return (
                <option key={i} value={item}>{item}</option>
              )
            })}
            </select>
          </div>
          <div className="col">
            <input type="number" name="price" className="form-control" placeholder='Цена' value={price} onChange={this.handleChange}></input>
          </div>
          <button className="btn btn-danger">Добавить книгу</button>
        </div>
      </form>
      </div>
    )
  }
}

export default connect(null, { createBook })(Form);


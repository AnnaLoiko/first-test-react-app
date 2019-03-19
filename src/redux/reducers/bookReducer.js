const initialState = {
  items: [],
  favoriteBooks:[],
  currentId: 1,
}


export default function reducers(state = initialState, action){

  let book;
  let books;
  let favoriteBooks;
  
  switch (action.type) {
    case 'CREATE_BOOK':
      book = { ...action.payload, id: state.currentId };
      books = [...state.items, book];
    
      return {
        ...state, 
        items: books,
        currentId: state.currentId + 1
      }
          
    case 'UPDATE_BOOK':
      books = state.items.map(book => book.id === action.payload.id ? { ...book, ...action.payload } : book);
    
      return {
        ...state, 
        items: books,
      }
        
    case 'DELETE_BOOK':
      books = state.items.filter(book=> book.id !== action.payload);

      return {
        ...state,
        items: books,
      }
    
    case 'ADD_BOOK_TO_FAVOURITE':
      favoriteBooks = [...state.favoriteBooks, action.payload]

      return {
        ...state,
        favoriteBooks: favoriteBooks,
      }

    case 'DELETE_BOOK_FROM_FAVOURITE':
      favoriteBooks = state.favoriteBooks.filter(id => id !== action.payload);

      return {
        ...state,
        favoriteBooks: favoriteBooks,
      }

    case 'LIKE_BOOK':
      books = state.items.map(book => {
        if (book.id === action.payload) {
          return { ...book, likes: book.likes + 1 };
        }
        return book;
      });
      
      return {
        ...state,
        items: books,
      } 
      
    case 'DISLIKE_BOOK':
      books = state.items.map(book => {
        if (book.id === action.payload) {
          return { ...book, dislikes: book.dislikes + 1 };
        }
        return book;
      });
      
      return {
        ...state,
        items: books,
      } 

    default:
      return state;
  }
}
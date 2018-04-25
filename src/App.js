import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookGallery from "./BookGallery"
import SearchBooks from "./SearchBooks"
import * as BooksAPI from "./BooksAPI";

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  };

    bookIsUpdated = () => {
        this.getAllBooks();
    };

    getAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({ books: books })
        });
        console.log(BooksAPI.getAll());
    };

    componentDidMount() {
        this.getAllBooks();
    }

  render() {
    return (
      <div className='app'>
          <Route exact path='/' render={() => (
              <div className="list-books">
                  <BookGallery onBookIsUpdated={this.bookIsUpdated} books={this.state.books}></BookGallery>
                  <div className="open-search">
                      <Link to="search">Add a book</Link>
                  </div>
              </div>
          )}/>
          <Route path='/search' render={({history}) => (
              <SearchBooks onBookIsUpdated={this.bookIsUpdated} allBooks={this.state.books}/>
          )}/>
      </div>


      // <div className="app">
      //   {this.state.showSearchPage ? (
      //     <div className="search-books">
      //       <div className="search-books-bar">
      //         <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
      //         <div className="search-books-input-wrapper">
      //           {/*
      //             NOTES: The search from BooksAPI is limited to a particular set of search terms.
      //             You can find these search terms here:
      //             https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
      //
      //             However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
      //             you don't find a specific author or title. Every search is limited by search terms.
      //           */}
      //           <input type="text" placeholder="Search by title or author"/>
      //
      //         </div>
      //       </div>
      //       <div className="search-books-results">
      //         <ol className="books-grid"></ol>
      //       </div>
      //     </div>
      //   ) : (
      //       <div className="list-books">
      //          <BookGallery></BookGallery>
      //          <div className="open-search">
      //             <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      //          </div>
      //       </div>
      //   )}
      // </div>
    )
  }
}

export default BooksApp

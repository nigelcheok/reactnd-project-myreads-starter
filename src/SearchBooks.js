import React, { Component } from 'react'
import * as BooksAPI from "./BooksAPI";
import { Link } from 'react-router-dom'
import BookDisplay from "./BookDisplay";

class SearchBooks extends Component {
    state = {
       books: [],
    };

    bookIsUpdated = () => {
        this.props.onBookIsUpdated();
    };

    filterBooksByQuery = (query) => {
        if (query) {
            BooksAPI.search(query.trim()).then(success => {
                if (!success.error) {
                    this.setState({books: success});
                }
                else this.setState({books: []});
            });
        }
        else this.setState({books: []});
    };

    componentDidMount() {
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author"
                               onChange={event => this.filterBooksByQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { this.state.books.map((book, index) =>
                            <li key={index}>
                                <BookDisplay
                                    title={book.title}
                                    author={ book.authors ? book.authors.join(", ") : 'No author'}
                                    image={ book.imageLinks ?  book.imageLinks.smallThumbnail : ''}
                                    id={book.id}
                                    onBookIsUpdated={this.bookIsUpdated}
                                    shelf={ this.props.allBooks.map(b => b.id).includes(book.id) ? this.props.allBooks.filter(b => b.id === book.id)[0].shelf : 'none'}
                                />
                            </li>
                        )}

                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks
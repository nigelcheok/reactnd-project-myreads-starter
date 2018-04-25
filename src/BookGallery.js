import React, { Component } from 'react'
// import * as BooksAPI from "./BooksAPI";
import BookDisplay from "./BookDisplay";

class BookGallery extends Component {
    // state = {
    //     shelves: ['currentlyReading','wantToRead','read'],
    //     // books: [],
    // };

    bookIsUpdated = () => {
        this.props.onBookIsUpdated();
        // this.getAllBooks();
    };

    // getAllBooks = () => {
    //     BooksAPI.getAll().then((books) => {
    //         this.setState({ books: books })
    //     });
    //     console.log(BooksAPI.getAll());
    // };
    //
    // componentDidMount() {
    //     this.getAllBooks();
    // }

    render() {
        return (
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    { this.props.books.filter(book => book.shelf === 'currentlyReading').map((book, index) =>
                                        <li key={index}>
                                            <BookDisplay
                                                title={book.title}
                                                author={book.authors.join(", ")}
                                                image={book.imageLinks.smallThumbnail}
                                                shelf={book.shelf}
                                                id={book.id}
                                                onBookIsUpdated={this.bookIsUpdated}
                                            />
                                        </li>
                                    )}

                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    { this.props.books.filter(book => book.shelf === 'wantToRead').map((book, index) =>
                                        <li key={index}>
                                            <BookDisplay
                                                title={book.title}
                                                author={book.authors.join(", ")}
                                                image={book.imageLinks.smallThumbnail}
                                                shelf={book.shelf}
                                                id={book.id}
                                                onBookIsUpdated={this.bookIsUpdated}
                                            />
                                        </li>
                                    )}

                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    { this.props.books.filter(book => book.shelf === 'read').map((book, index) =>
                                        <li key={index}>
                                            <BookDisplay
                                                title={book.title}
                                                author={book.authors.join(", ")}
                                                image={book.imageLinks.smallThumbnail}
                                                shelf={book.shelf}
                                                id={book.id}
                                                onBookIsUpdated={this.bookIsUpdated}
                                            />
                                        </li>
                                    )}

                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookGallery
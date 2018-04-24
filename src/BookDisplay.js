import React, { Component } from 'react'
import * as BooksAPI from "./BooksAPI";

class BookDisplay extends Component {
    // state = {
    //     shelf: null,
    // };

    updateShelf = (event) => {
        let newShelf = event.target.value;
        // console.log(this.props.id);
        // console.log(newShelf);
        BooksAPI.update({ id: this.props.id }, newShelf).then((response) => {
            // console.log(response);
            this.props.onBookIsUpdated();
        });
    };

    // componentDidMount() {
    //     this.state.shelf = this.props.shelf;
    // };

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${this.props.image})`,
                        backgroundSize: 'cover',
                    }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.updateShelf} value={ this.props.shelf }>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ this.props.title }</div>
                <div className="book-authors">{ this.props.author }</div>
            </div>
        )
    }
}

export default BookDisplay
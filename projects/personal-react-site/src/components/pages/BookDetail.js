import React, {useContext} from "react"
import {useParams, Link} from "react-router-dom"

import {APIContext} from "../../APIContext"

function BookDetail(){
    const {bookId} = useParams()
    const {bookData, handleUnread, handleRead} = useContext(APIContext)
    const thisBook = bookData.find(book => book.id === bookId) 

    let authors = thisBook.volumeInfo.authors && thisBook.volumeInfo.authors.join(", ")
    return(
        <div className="content book-detail">
            {/* <a href="">{thisBook && thisBook.volumeInfo.categories}</a> */}
            <div className="detail-left">
                <img 
                    className="detail-img"
                    src={thisBook.volumeInfo.imageLinks && thisBook.volumeInfo.imageLinks.thumbnail} 
                    alt="no image"
                />
                <div>
                    <button className="detail-unread" onClick={() => handleUnread(thisBook)}>Want to Read</button>
                    <button className="detail-read" onClick={() => handleRead(thisBook)}>Read</button>
                </div>
            </div>
            <div className="detail-right">
                <h1 className="detail-element">{thisBook.volumeInfo.title && thisBook.volumeInfo.title}</h1>
                <h2 className="detail-element"><i>{thisBook.volumeInfo.subtitle && thisBook.volumeInfo.subtitle}</i></h2>
                <h3 className="detail-element">
                    {thisBook.volumeInfo.authors && `Author${thisBook.volumeInfo.authors.length > 1 ? "s" : ""}: `}
                    {authors}
                </h3>
                <p className="detail-element">{thisBook && thisBook.volumeInfo.description}</p>
                <p className="detail-element">
                    {
                        `${thisBook.volumeInfo.publisher ? 
                            `Publisher: ${thisBook && thisBook.volumeInfo.publisher}` : 
                            ""}`
                    } | {
                        thisBook && thisBook.volumeInfo.publishedDate ? 
                            `Date published: ${thisBook.volumeInfo.publishedDate}` : 
                            ""
                    } | <b>{thisBook && thisBook.volumeInfo.pageCount} pages</b>
                </p>
                <Link className="detail-element" to="/browse"><button>Go Back to Browse</button></Link>
            </div>
        </div>
    )
}

export default BookDetail
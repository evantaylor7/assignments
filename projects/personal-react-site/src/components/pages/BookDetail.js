import React, {useContext} from "react"
import {useParams} from "react-router-dom"

import {APIContext} from "../../APIContext"

function BookDetail(props){
    const {bookId} = useParams()
    const {bookData} = useContext(APIContext)
    const thisBook = bookData.find(book => book.id === bookId) 

    let authors = thisBook.volumeInfo.authors && thisBook.volumeInfo.authors.join(", ")
    return(
        <div className="content">
            <a href="">{thisBook && thisBook.volumeInfo.categories}</a>
            <h1>{thisBook.volumeInfo.title && thisBook.volumeInfo.title}</h1>
            <h2><i>{thisBook.volumeInfo.subtitle && thisBook.volumeInfo.subtitle}</i></h2>
            <img src={thisBook.volumeInfo.imageLinks && thisBook.volumeInfo.imageLinks.thumbnail} alt="no image"/>
            <h3>{thisBook.volumeInfo.authors && `Author${thisBook.volumeInfo.authors.length > 1 ? "s" : ""}: `}{authors}</h3>
            <p>{`${thisBook.volumeInfo.publisher ? `Publisher: ${thisBook && thisBook.volumeInfo.publisher}` : ""}`}</p>
            <p>{thisBook && thisBook.volumeInfo.publishedDate ? `Date published: ${thisBook.volumeInfo.publishedDate}` : ""}</p>
            <p>{thisBook && thisBook.volumeInfo.description}</p>
            <p><b>{thisBook && thisBook.volumeInfo.pageCount} pages</b></p>
        </div>
    )
}

export default BookDetail
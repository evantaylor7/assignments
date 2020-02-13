import React, {useContext} from "react"
import {useParams} from "react-router-dom"

import {APIContext} from "../../APIContext"

function BookDetail(props){
    const {bookId} = useParams()
    const {bookData} = useContext(APIContext)
    const thisBook = bookData.find(book => book.id === bookId) 

    return(
        <div className="content">
            <a href="">{thisBook && thisBook.volumeInfo.categories}</a>
            <h1>{thisBook && thisBook.volumeInfo.title}</h1>
            <h2><i>{thisBook && thisBook.volumeInfo.subtitle}</i></h2>
            <img src={thisBook && thisBook.volumeInfo.imageLinks.thumbnail} alt="no image"/>
            <h3>Author: {thisBook && thisBook.volumeInfo.authors}</h3>
            <p>Publisher: {thisBook && thisBook.volumeInfo.publisher}, {thisBook && thisBook.volumeInfo.publishedDate}</p>
            <p>{thisBook && thisBook.volumeInfo.description}</p>
            <p><b>{thisBook && thisBook.volumeInfo.pageCount} pages</b></p>
        </div>
    )
}

export default BookDetail
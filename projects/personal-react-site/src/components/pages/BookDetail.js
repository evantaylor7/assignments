import React, { useContext } from "react"
import {useParams} from "react-router-dom"

import {APIContextConsumer} from "../../APIContext"

function BookDetail(props){
    const {bookId} = useParams()
    const {bookData} = useContext(APIContextConsumer)
    console.log(222,bookData)
    const thisBook = bookData.find(book => book.id === bookId) 
    console.log(111, thisBook)
    return(
        <div>
            <h1>{thisBook && thisBook.volumeInfo.title}</h1>

        </div>
    )
}

export default BookDetail
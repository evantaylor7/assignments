import React, {useContext} from "react"
import SavedPagesNav from "./SavedPagesNav"
import {Link} from "react-router-dom"

import {APIContext} from "../../../APIContext"

function Unread(){
    const {unread, handleDeleteUnread} = useContext(APIContext)
    const book = unread && unread.map(item => {
        let authors = item.volumeInfo.authors && item.volumeInfo.authors.join(", ")
        return (
            <div className="book-container" key={item.id}>
                <Link to={`/${item.id}`}>
                    <h2>{item.volumeInfo.title}</h2>
                    <h3><i>{item.volumeInfo.subtitle}</i></h3>
                    <img 
                        src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail} 
                        alt="no image"
                    />
                </Link>
                <p>
                    {item.volumeInfo.authors && `Author${item.volumeInfo.authors.length > 1 ? "s" : ""}: `}
                    {authors}
                </p>
                <button onClick={() => handleDeleteUnread(item)}>Remove</button>
            </div>
        )
    })

    return(
        <div className="content saved-page">
            <SavedPagesNav />
            <div className="book-page">
                {book}
            </div>
        </div>
    )
}

export default Unread
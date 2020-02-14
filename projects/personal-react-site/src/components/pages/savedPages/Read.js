import React, {useContext} from "react"
import {Link} from "react-router-dom"
import SavedPagesNav from "./SavedPagesNav"

import {APIContext} from "../../../APIContext"


function Read(){
    const {read, handleDeleteRead} = useContext(APIContext)
    const book = read && read.map(item => {
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
                <button onClick={() => handleDeleteRead(item)}>Remove</button>
            </div>
        )
    })

    return(
        <div className="content">
            <SavedPagesNav />
            Read Page!!
            {book}
        </div>
    )
}

export default Read
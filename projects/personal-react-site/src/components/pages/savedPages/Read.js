import React, {useContext} from "react"
import {Link} from "react-router-dom"
import SavedPagesNav from "./SavedPagesNav"

import {APIContext} from "../../../APIContext"


function Read(){
    const {read, handleDeleteRead, theme} = useContext(APIContext)
    const book = read && read.map(item => {
        let authors = item.volumeInfo.authors && item.volumeInfo.authors.join(", ")
        return (
            <div className={`${theme}-book-container book-container`} key={item.id}>
                <Link className="book-link" to={`/${item.id}`}>
                    <div className={`${theme}-book-title book-title`}>
                        <h2 className="title-elements">{item.volumeInfo.title}</h2>
                        <h3 className="title-elements"><i>{item.volumeInfo.subtitle}</i></h3>
                        <img 
                            className="title-elements"
                            src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail} 
                            alt="no image"
                        />
                    </div>
                </Link>
                <p>
                    {item.volumeInfo.authors && `Author${item.volumeInfo.authors.length > 1 ? "s" : ""}: `}
                    {authors}
                </p><br/>
                <button onClick={() => handleDeleteRead(item)}>Remove</button>
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

export default Read
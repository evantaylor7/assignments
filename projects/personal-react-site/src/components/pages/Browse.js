import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {APIContext} from "../../APIContext"

function Browse(){
    const {bookData, 
        search, 
        genre, 
        sort, 
        searchChange, 
        genreChange, 
        sortChange, 
        page, 
        lastPage,
        handlePageChange, 
        handleRead, 
        handleUnread,
        theme} 
        = useContext(APIContext)

    const book = bookData && bookData.map(item => {
        let authors = item.volumeInfo.authors && item.volumeInfo.authors.join(", ")
        return (
            <div className={`${theme}-book-container book-container`} key={item.id}>
                <Link className="book-link" to={`/book/${item.id}`}>
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
                <button className="detail-unread" onClick={() => handleUnread(item)}>Want to Read</button>
                <button className="detail-read" onClick={() => handleRead(item)}>Read</button>
            </div>
        )
    })

    return(
        <div className="content browse-page">
            <form className={`${theme}-search-form search-form`} onSubmit={e => e.preventDefault()}>
                <h3 className="search-by">Search by title/author/keyword:</h3>
                <input 
                    value={search} 
                    className="search-input" 
                    onChange={searchChange} 
                    placeholder="start typing to see results"
                />
                <br/><br/><hr/><br/>
                <h3>Refine search by:</h3>
                <br/>
                <label>Genre: </label>
                <select className="genre-input" onChange={genreChange} value={genre}>
                    <option></option>
                    <option value="subject:nonfiction">Non-Fiction</option>
                    <option value="+subject:fiction">Fiction</option>
                    <option value="+subject:classics">Classics</option>
                    <option value="+subject:fantasy">Fantasy</option>
                    <option value="+subject:mystery">Mystery</option>
                    <option value="+subject:historical+fiction">Historical Fiction</option>
                    <option value="+subject:history">History</option>
                    <option value="+subject:romance">Romance</option>
                    <option value="+subject:science+fiction">Science Fiction</option>
                    <option value="+subject:poetry">Poetry</option>
                    <option value="+subject:self+help">Self-Help</option>
                </select>
                <br/><br/>
                <label>Sort by: </label>
                <select className="order-input" onChange={sortChange} value={sort}>
                    <option value="&orderBy=relevance">Relevance</option>
                    <option value="&orderBy=newest">Newest</option>
                </select>
            </form>
            <div className="book-page">
                {book}
            </div>
            <div className="page-change-container">
                <button 
                    className="page-button" 
                    onClick={() => handlePageChange("first")} 
                    disabled={page === 0}
                >
                    First
                </button>
                <button 
                    className="page-button" 
                    onClick={() => handlePageChange("decrement")} 
                    disabled={page === 0}
                >
                    Previous
                </button>
                <button 
                    className="page-button" 
                    onClick={() => handlePageChange("increment")} 
                    disabled={page > (lastPage - 12)}
                >
                    Next
                </button>
                <p>{search === "" ? "" : `Page ${(page / 12) + 1}`}</p>
            </div>
        </div>
    )
}

export default Browse
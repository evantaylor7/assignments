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
        handleUnread} 
        = useContext(APIContext)

    const book = bookData && bookData.map(item => {
        let authors = item.volumeInfo.authors && item.volumeInfo.authors.join(", ")
        return (
            <div className="book-container" key={item.id}>
                <Link className="book-link" to={`/${item.id}`}>
                    <div className="book-title">
                        <h2>{item.volumeInfo.title}</h2>
                        <h3><i>{item.volumeInfo.subtitle}</i></h3>
                        <img 
                            src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail} 
                            alt="no image"
                        />
                    </div>
                </Link>
                <p>
                    {item.volumeInfo.authors && `Author${item.volumeInfo.authors.length > 1 ? "s" : ""}: `}
                    {authors}
                </p>
                <button onClick={() => handleUnread(item)}>Want to Read</button>
                <button onClick={() => handleRead(item)}>Read</button>
            </div>
        )
    })

    return(
        <div className="content browse-page">
            <form className="search-form">
                <h3>Search by title/author/keyword:</h3>
                <input 
                    value={search} 
                    className="search-input" 
                    onChange={searchChange} 
                    placeholder="start typing to see results"
                />
                <br/><br/><hr/>
                <h3>Refine search by:</h3>
                <label>Genre: </label>
                <select onChange={genreChange} value={genre}>
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
                <select onChange={sortChange} value={sort}>
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
                <p>Page {(page / 12) + 1}</p>
            </div>
        </div>
    )
}

export default Browse
import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {APIContext} from "../../APIContext"

function Browse(){
    const {bookData, search, genre, sort, searchChange, genreChange, sortChange, page, lastPage, handlePageChange, handleRead, handleUnread} = useContext(APIContext)
    const book = bookData && bookData.map(item => {
        let authors = item.volumeInfo.authors && item.volumeInfo.authors.join(", ")

        return (
            <div key={item.id}>
                <Link to={`/${item.id}`}>
                    <h2>{item.volumeInfo.title}</h2>
                    <h3><i>{item.volumeInfo.subtitle}</i></h3>
                    <img src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail} alt="no image"/>
                </Link>
                <p>{item.volumeInfo.authors && `Author${item.volumeInfo.authors.length > 1 ? "s" : ""}: `}{authors}</p>
                <button value={item.id} onClick={handleUnread}>Want to Read</button>
                <button value={item.id} onClick={handleRead}>Read</button>
            </div>
        )
    })

    return(
        <div className="content">
            <h1>BOOKMARK!!!</h1>
            <form>
                <label>Search by title/author/keyword</label>
                <input value={search} className="search-input" onChange={searchChange} placeholder="start typing to see results"/><br />
                <label>Refine search by:</label><br/>
                <label>Genre/Subject:</label>
                <select onChange={genreChange} value={genre}>
                    <option></option>
                    <option value="subject:non-fiction">Non-Fiction</option>
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
                <label>Sort by: </label>
                <select onChange={sortChange} value={sort}>
                    <option value="&orderBy=relevance">Relevance</option>
                    <option value="&orderBy=newest">Newest</option>
                </select>
            </form>
            {book}
            <div className="page-change-container">
                <button onClick={() => handlePageChange("first")} disabled={page === 0}>First</button>
                <button onClick={() => handlePageChange("decrement")} disabled={page === 0}>Previous</button>
                <button onClick={() => handlePageChange("increment")}>Next</button>
            </div>
        </div>
    )
}

export default Browse
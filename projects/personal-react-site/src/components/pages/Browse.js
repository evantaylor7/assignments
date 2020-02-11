import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {APIContextConsumer} from "../../APIContext"

function Browse(){
    const {bookData, search, handleChange} = useContext(APIContextConsumer)
    console.log(bookData)
    // function handleSearch(){
    //     return(
    //         setSearch()
    //     )
    // }

    // function handlePageChange(e){
    //     window.scroll = 0
    //     const {value} = e.target
    //     return(
    //         setPage(value)
    //     )
    // }

    // function navPage(e){
    //     const {value} = e.target
    //     return(
    //         // setPage(prevPage => (prevPage + value))
    //         setPage(prevPage => (prevPage + value))
    //     )
    // }

    const book = bookData !== undefined && bookData.map(item => {
        return (
            <div key={item.id}>
                <Link to={`/${item.id}`}>{item.volumeInfo.title}</Link>
                <img src={(item.volumeInfo.imageLinks !== undefined) && item.volumeInfo.imageLinks.thumbnail} alt="image not found"/>
                <p>Author: {item.volumeInfo.authors !== undefined && item.volumeInfo.authors}</p>
            </div>
        )
    })

    return(

        <div>
            <h1>BOOKMARK!!!</h1>
            <form>
                <label>Search by title/author/keyword</label>
                <input onChange={handleChange} placeholder="start typing to see results"/><br />
                {/* <button onClick={handleSearch}>Submit</button> */}
            </form>
            {book}
            <div>
                {/* <button value="0" onClick={handlePageChange}>First</button>
                <button value="- 10" onClick={navPage}>Previous</button>
                <button value="+ 10" onClick={navPage}>Next</button>
                <button value={lastPage - 10} onClick={handlePageChange}>Last</button> */}
            </div>
        </div>
    )
}

export default Browse
import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {APIContext} from "../../APIContext"

function Browse(){
    const {bookData, search, handleChange} = useContext(APIContext)
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
    
    const book = bookData && bookData.map(item => {
        let authors = item.volumeInfo.authors.join(', ')

        return (
            <div key={item.id}>
                <Link to={`/${item.id}`}>
                    <h2>{item.volumeInfo.title}</h2>
                    <h3><i>{item.volumeInfo.subtitle}</i></h3>
                    <img src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail} alt="no image"/>
                </Link>
                <p>{item.volumeInfo.authors && "Author: "}{authors}</p>
            </div>
        )
    })

    return(

        <div className="content">
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
// import React from "react"

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             bookData: []
//         }
//     }

//     componentDidMount(){
//         fetch("https://www.googleapis.com/books/v1/volumes?q=stephen+king&key=&startIndex=220")
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 this.setState({
//                     bookData: data.items
//                 })
//             })
//     }
    
//     render(){
//         // const authors = this.state.bookData.map(item => <p>{item.volumeInfo.authors},</p>)
//         const book = this.state.bookData.map(item => (
//             <div>
//                 <h1>{item.volumeInfo.title}</h1>
//                 <img src={item.volumeInfo.imageLinks.thumbnail} alt="NO IMAGE"/>
//                 <p>Author: {item.volumeInfo.authors.map(auth => auth)}</p>
//             </div>
//             )
//         )
//         // const img = this.state.bookData.map(item => <img src={item.volumeInfo.imageLinks.thumbnail} />)
//         // const author = this.state.bookData.map(item => item.volumeInfo.authors.map(auth => <h2>{auth}</h2>))
//         return(
//             <div>
//                 {book}
//                 {/* {img} */}
//             </div>
//         )
//     }
// }

// export default App

import React, {useState, useEffect} from "react"
import dotENV from 'dotenv'
dotENV.config()

function App(){
    const [bookData, setBookData] = useState([])
    const [search, setSearch] = useState("popular")
    const [page, setPage] = useState(0)
    const apiKey = process.env.REACT_APP_API_KEY
    console.log(bookData)
    console.log(page)

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}&startIndex=${page}`)
            .then(response => response.json())
            .then(data => {
                setBookData(data.items)
            })
    }, [search, page])

    const book = bookData !== undefined && bookData.map(item => (
        <div>
            <h1>{item.volumeInfo.title}</h1>
            <img src={(item.volumeInfo.imageLinks !== undefined) && item.volumeInfo.imageLinks.thumbnail} alt="image not found"/>
            <p>Author: {item.volumeInfo.authors !== undefined && item.volumeInfo.authors}</p>
        </div>
    ))

    function handleChange(e){
        const value = e.target.value
        return(
            setSearch(value)
        )
    }

    // function handleSearch(){
    //     return(
    //         setSearch()
    //     )
    // }

    function handlePageChange(e){
        window.scroll = 0
        const {value} = e.target
        return(
            setPage(value)
            
        )
    }

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
                <button value="PrevPage - 10" onClick={handlePageChange}>Previous</button>
                <button value="0" onClick={handlePageChange}>1</button>
                <button value="10" onClick={handlePageChange}>2</button>
                <button value="20" onClick={handlePageChange}>3</button>
                <button value="prevPage + 10" onClick={handlePageChange}>Next</button>
            </div>
        </div>
    )
}

export default App
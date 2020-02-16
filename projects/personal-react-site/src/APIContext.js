import React, {useState, useEffect} from "react"
import axios from "axios"
import dotENV from ".../../dotenv"
dotENV.config()

export const APIContext = React.createContext()

export default function APIContextProvider(props){
    const [bookData, setBookData] = useState([])
    const [search, setSearch] = useState("")
    const [genre, setGenre] = useState("")
    const [sort, setSort] = useState("")
    const [page, setPage] = useState(0)
    const [lastPage, setLastPage] = useState(0)
    const [read, setRead] = useState([])
    const [unread, setUnread] = useState([])
    
    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}${genre}${sort}&key=${apiKey}&startIndex=${page}&maxResults=12`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                setBookData(data.items)
                setLastPage(data.totalItems)
            })
    }, [search, genre, sort, page])

    function searchChange(e){
        const value = e.target.value
        setSearch(value)
    }

    function genreChange(e){
        const value = e.target.value
        setGenre(value)
    }

    function sortChange(e){
        const value = e.target.value
        setSort(value)
    }

    function handlePageChange(e){
        window.scrollTo(0, 0)
        setPage(prevPage => {
            if(e === "decrement"){
                return prevPage - 12
            } else if(e === "increment"){
                return prevPage += 12
            } else{
                return 0
            }
        })
    }

    function handleRead(item){
        alert("Book saved in 'read'!")
        setRead([...read, item])
    }

    function handleUnread(item){
        alert("Book saved in 'want to read'!")
        setUnread([...unread, item])
    }

    function handleDeleteRead(item){
        setRead(read.filter(book => {
            return book.id !== item.id
        }))
    }

    function handleDeleteUnread(item){
        setUnread(unread.filter(book => {
            return book.id !== item.id
        }))
    }

    return(
        <APIContext.Provider value=
            {{
            bookData, 
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
            read, 
            unread,
            handleDeleteRead,
            handleDeleteUnread
            }}
        >
            {props.children}
        </APIContext.Provider>
    )
}
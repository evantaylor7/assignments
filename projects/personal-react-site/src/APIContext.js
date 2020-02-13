import React, {useState, useEffect} from "react"
import axios from "axios"
import dotENV from ".../../dotenv"
dotENV.config()

export const APIContext = React.createContext()

export default function APIContextProvider(props){
    const [bookData, setBookData] = useState([])
    const [search, setSearch] = useState("popular")
    const [page, setPage] = useState(0)
    const [lastPage, setLastPage] = useState(0)
    const apiKey = process.env.REACT_APP_API_KEY
    console.log(bookData)

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}&startIndex=${page}`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                setLastPage(data.totalItems)
                setBookData(data.items)
            })
    }, [search, page])

    function handleChange(e){
        const value = e.target.value
        return(
            setSearch(value)
        )
    }

    return(
        <APIContext.Provider value={{bookData, search, handleChange}}>
            {props.children}
        </APIContext.Provider>
    )
}
import React, {useState, useEffect} from "react"
import axios from "axios"
import dotENV from ".../../dotenv"
dotENV.config()

const {Provider, Consumer} = React.createContext()

function APIContextProvider(props){
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
        <Provider value={{bookData, search, handleChange}}>
            {props.children}
        </Provider>
    )
}

export {Consumer as APIContextConsumer, APIContextProvider}
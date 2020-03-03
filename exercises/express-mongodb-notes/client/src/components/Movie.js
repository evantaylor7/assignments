import React, {useState} from "react"
import AddMovieForm from "./AddMovieForm"

function Movie(props){
    const {title, genre, _id, deleteMovie} = props
    const [editToggle, setEditToggle] = useState(false)


    return(
        <div className="movie">
            { !editToggle ?
                <>
                    <h1>Title: {title}</h1>
                    <p>Genre: {genre}</p>
                    <button 
                        onClick={() => deleteMovie(_id)} 
                        className="delete-btn"
                    >
                        Delete
                    </button>
                    <button 
                        className="edit-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Edit
                    </button>
                </>
            :
                <>
                    <AddMovieForm 
                        title={title}
                        genre={genre}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editMovie}
                    />
                    <button 
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Close
                    </button>
                </>
            }
        </div>
    )
}

export default Movie
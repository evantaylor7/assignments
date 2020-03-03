import React from "react"
import {Consumer} from "../ListContext"

function Submit(){
    return(
        <Consumer>
            {({title, url, description, handleSubmit, handleChange}) => (
                <form onSubmit={handleSubmit}>
                    <h1>Ugly Things</h1>
                    <br/>
                    <h3><i>post your ugly things here</i></h3>
                    <br/>
                    <input 
                        value={title}
                        name="title"
                        placeholder="Title"
                        onChange={handleChange}
                        type="text"
                    />
                    <input 
                        value={url}
                        name="url"
                        placeholder="Image URL"
                        onChange={handleChange}
                        type="text"
                    />
                    <input 
                        value={description}
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                        type="text"
                    />
                    <br/>
                    <button>Submit</button>
                </form>
            )}
        </Consumer>
    )
}

export default Submit
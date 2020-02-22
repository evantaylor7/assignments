import React from "react"

function UglyCard(props){
    const {title, url, description, handleDelete, handleEdit, _id, showEdit} = props
    console.log(props)
    return(
        <div className="uglyCard">
            <h1>{title}</h1>
            <img src={`${url}`}/>
            <p>{description}</p>
            <br/>
            <button onClick={handleEdit}>Edit</button>
            <form style={{display: showEdit ? 'block' : 'none'}} >
            {/* style={showEdit ? {display: "none"} : {display: "block"}} */}
                <label>Title:</label>
                <input /><br />
                <label>Image URL:</label>
                <input /><br />
                <label>Description:</label>
                <input /><br />
                <button>Save</button>
            </form>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    )
}

export default UglyCard
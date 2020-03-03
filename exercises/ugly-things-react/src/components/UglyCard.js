import React from "react"

class UglyCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            updatedTitle: "",
            updatedUrl: "",
            updatedDescription: ""
        }
    }

    handleUpdates = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render(){
        const {title, url, description, showEdit, handleSubmit, handleDelete, editToggle, _id} = this.super.props
        // console.log(props)
        return(
            <div className="uglyCard">
                <h1>{title}</h1>
                <img src={`${url}`}/>
                <p>{description}</p>
                <br/>
                <button onClick={() => editToggle(_id)}>{showEdit ? "Close" : "Edit"}</button>
                <form style={{display: showEdit ? 'block' : 'none'}} onSubmit={handleSubmit}>
                {/* what I had previously: */}
                {/* style={showEdit ? {display: "none"} : {display: "block"}} */}
                    <label>Title:</label>
                    <input 
                        value={this.state.updatedTitle}
                        name="Title"
                        type="text"
                        onChange={this.handleUpdates}
                    />
                    <br />
                    <label>Image URL:</label>
                    <input 
                        value={this.state.updatedUrl}
                        name="Image URL"
                        type="text"
                        onChange={this.handleUpdates}
                    />
                    <br />
                    <label>Description:</label>
                    <input 
                        value={this.state.updatedDescription}
                        name="Description"
                        type="text"
                        onChange={this.handleUpdates}
                    />
                    <br />
                    <button>Save</button>
                </form>
                <button onClick={() => handleDelete(_id)}>Delete</button>
            </div>
        )
    }
}

export default UglyCard
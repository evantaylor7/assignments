import React from "react"

class UglyCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: props.title,
            url: props.url,
            description: props.description,
            showEdit: false
        }
    }

    handleUpdates = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    editToggle = () => {
        this.setState(prevState => ({
            showEdit: prevState.showEdit ? false : true
        }))
    }

    render(){
        const {title, url, description, showEdit, handleDelete, handleEdit, _id} = this.props
        return(
            <div className="uglyCard">
                <h1>{title}</h1>
                <img src={`${url}`}/>
                <p>{description}</p>
                <br/>
                <button onClick={() => this.editToggle(_id)}>{showEdit ? "Close" : "Edit"}</button>
                <form style={{display: this.state.showEdit ? 'block' : 'none'}} onSubmit={(e) => {
                    handleEdit(e, _id, this.state)
                    this.editToggle()
                }}
                >
                {/* what I had previously: */}
                {/* style={showEdit ? {display: "none"} : {display: "block"}} */}
                    <label>Title:</label>
                    <input 
                        value={this.state.title}
                        name="title"
                        type="text"
                        onChange={this.handleUpdates}
                    />
                    <br />
                    <label>Image URL:</label>
                    <input 
                        value={this.state.url}
                        name="url"
                        type="text"
                        onChange={this.handleUpdates}
                    />
                    <br />
                    <label>Description:</label>
                    <input 
                        value={this.state.description}
                        name="description"
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
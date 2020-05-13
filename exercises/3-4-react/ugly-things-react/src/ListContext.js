import React from "react"

const {Provider, Consumer} = React.createContext()

class ListContext extends React.Component {
    state = {
        title: "",
        url: "",
        description: "",
        savedCards: [],
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(({title, url, description, savedCards}) => ({savedCards: [...savedCards, {title, url, description, _id: Math.floor(Math.random() * 10000)}]}))
    }

    handleDelete = (_id) => {
        this.setState(prevState => ({
            savedCards: prevState.savedCards.filter(uglyThing => {
                return uglyThing._id !== _id
            }) 
        }))
    }

    handleEdit = (e, _id, updatedItem) => {
        e.preventDefault()
        this.setState(prevState => ({
            savedCards: prevState.savedCards.map(item => item._id === _id ? updatedItem : item)
        }))
    }

    render(){
        return(
            <Provider 
                value={{
                    ...this.state,
                    handleSubmit: this.handleSubmit,
                    handleChange: this.handleChange,
                    handleDelete: this.handleDelete,
                    handleEdit: this.handleEdit
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ListContext as Provider, Consumer}
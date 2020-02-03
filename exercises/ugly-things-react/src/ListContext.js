import React from "react"

const {Provider, Consumer} = React.createContext()

class ListContext extends React.Component {
    state = {
        title: "",
        url: "",
        description: "",
        savedCards: []
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState(({title, url, description, savedCards}) => ({savedCards: [...savedCards, {title, url, description, _id: Math.floor(Math.random() * 10000)}]}))
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleDelete = (id) => {
        this.setState(prevState => ({
            savedCards: prevState.savedCards.filter(uglyThing => {
                return uglyThing._id !== id
            }) 
        }))
    }

    handleEdit = () => {

    }

    render(){
        return(
            <Provider 
                value={{
                    title: this.state.title, 
                    url: this.state.url, 
                    description: this.state.description,
                    savedCards: this.state.savedCards,
                    handleClick: this.handleClick,
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
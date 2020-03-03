import React from "react"

const {Provider, Consumer} = React.createContext()

class ListContext extends React.Component {
    state = {
        title: "",
        url: "",
        description: "",
        savedCards: [],
        showEdit: false
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

    editToggle = () => {
        this.setState(prevState => ({
            showEdit: prevState.showEdit ? false : true
        }))
    }

    render(){
        return(
            <Provider 
                value={{
                    ...this.state,
                    // what I had previously:
                    // title: this.state.title, 
                    // url: this.state.url, 
                    // description: this.state.description,
                    // savedCards: this.state.savedCards,
                    handleSubmit: this.handleSubmit,
                    handleChange: this.handleChange,
                    handleDelete: this.handleDelete,
                    editToggle: this.editToggle,
                    // showEdit: this.showEdit
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ListContext as Provider, Consumer}
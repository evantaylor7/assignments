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
        console.log("clicked!")
        e.preventDefault()
        this.setState(({title, url, description, savedCards}) => ({savedCards: [...savedCards, {title, url, description}]}))
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
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
                    handleChange: this.handleChange
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ListContext as Provider, Consumer}
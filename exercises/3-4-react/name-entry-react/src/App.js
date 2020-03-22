import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "",
            enteredName: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleClick(event){
        event.preventDefault()
        this.setState(prevState => {
            return {
                enteredName: [...prevState.enteredName, prevState.name],
                name: ""
            }
        })
    }

    render(){
        const nameList = this.state.enteredName.map((name, i) => {
            return <li key={name + i}>{name}</li>
        })
        return (
            <div className="page">
                <h1>Enter your name!</h1>
                <form onSubmit={this.handleClick}>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={this.handleChange} 
                        value={this.state.name} 
                    />
                    <h1 className="preview">{this.state.name}</h1>
                    <button>Enter</button>
                </form>
                <ul className="list">
                    {nameList}
                </ul>
            </div>
        )
    }
}

export default App
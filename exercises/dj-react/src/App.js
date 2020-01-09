import React from "react"
import Square from "./Square"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => {
           const updatedColors = prevState.colors.map(color => color === "white" ? "black" : "white")
           return {colors: updatedColors}
        })
    }

    render(){
        const squares = this.state.colors.map(color => <Square color={color} />)
        return(
            <div className="container">
                {squares}
                <button className="button" onClick={this.handleClick}>1</button>
            </div>
        )
    }
}

export default App
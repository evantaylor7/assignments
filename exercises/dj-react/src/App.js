import React from "react"
import Square from "./Square"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            colors: ["white", "white", "white", "white"],
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            const updatedColors = prevState.colors.map(color => {
                if(prevState.colors[0] !== "black" || prevState.colors[1] !== "black" || prevState.colors[2] !== "black" || prevState.colors[3] !== "black"){
                    return "black"
                } else {
                    return "white"
                }
            })
            return {colors: updatedColors}
        })
    }

    handleClick2 = () => {
        this.setState(prevState => {
            prevState.colors[0] = "purple"
            prevState.colors[1] = "purple"
            return {colors: prevState.colors}
        })
    }  

    handleClick3 = () => {
        this.setState(prevState => {
            prevState.colors[2] = "blue"
            return {colors: prevState.colors}
        })
    }

    handleClick4 = () => {
        this.setState(prevState => {
            prevState.colors[3] = "blue"
            return {colors: prevState.colors}
        })
    }

    handleClick5 = () => {
        this.setState(prevState => {
            prevState.colors[0] = "green"
            return {colors: prevState.colors}
        })
    }

    handleClick6 = () => {
        this.setState(prevState => {
            prevState.colors[1] = "pink"
            return {colors: prevState.colors}
        })
    }

    handleClick7 = () => {
        this.setState(prevState => {
            prevState.colors[3] = "orange"
            return {colors: prevState.colors}
        })
    }

    handleClick8 = () => {
        this.setState(prevState => {
            prevState.colors[2] = "red"
            return {colors: prevState.colors}
        })
    }

    render(){
        const squares = this.state.colors.map(color => <Square color={color} />)
        return(
            <div className="container">
                {squares}
                <div className="buttonContainer">
        <button className="button button1" onClick={this.handleClick}>1</button>
                    <button className="button button2" onClick={this.handleClick2}>2</button>
                    <button className="button button3" onClick={this.handleClick3}>3</button>
                    <button className="button button4" onClick={this.handleClick4}>4</button>
                    <button className="button button5" onClick={this.handleClick5}>5</button>
                    <button className="button button6" onClick={this.handleClick6}>6</button>
                    <button className="button button7" onClick={this.handleClick7}>7</button>
                    <button className="button button8" onClick={this.handleClick8}>8</button>
                </div>
            </div>
        )
    }
}

export default App
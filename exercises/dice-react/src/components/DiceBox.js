import React from "react"

class DiceBox extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: 1,
            num2: 2,
            num3: 3,
            num4: 4,
            num5: 5
        }
    }

    randomNum = () => {
        if( this.state.num1 === this.state.num2 && this.state.num2 === this.state.num3 && this.state.num3 === this.state.num4 && this.state.num4 === this.state.num5){
            return
        } else {
            this.setState({
                num1: Math.floor(Math.random() * 6 + 1), 
                num2: Math.floor(Math.random() * 6 + 1),  
                num3: Math.floor(Math.random() * 6 + 1), 
                num4: Math.floor(Math.random() * 6 + 1), 
                num5: Math.floor(Math.random() * 6 + 1),  
            })
        }
    }

    render(){
        return(
            <div>
                <div className="dieContainer">
                    <h1 className="die">{this.state.num1}</h1>
                    <h1 className="die">{this.state.num2}</h1>
                    <h1 className="die">{this.state.num3}</h1>
                    <h1 className="die">{this.state.num4}</h1>
                    <h1 className="die">{this.state.num5}</h1>
                </div>
                <div className="button">
                    <button onClick={this.randomNum}>Roll Dice</button>
                    <h1 style={{display: this.state.num1 === this.state.num2 && this.state.num2 === this.state.num3 && this.state.num3 === this.state.num4 && this.state.num4 === this.state.num5 ? "block" : "none"}}>YOU WIN</h1>
                </div>
            </div>
        )
    }
}

export default DiceBox
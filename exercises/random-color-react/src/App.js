import React from "react"
import axios from "axios"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            color: ""
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        axios.get("http://www.colr.org/json/color/random")
            .then(data => {
                this.setState({
                    color: `#${data.data.colors[0].hex}`
                })
            })
            .catch(error => console.log(error))
    }

    handleClick(){
        axios.get("http://www.colr.org/json/color/random")
            .then(data => {
                this.setState({
                    color: `#${data.data.colors[0].hex}`
                })
            })
            .catch(error => console.log(error))
    }

    render(){
        const styles = {
            backgroundImage: `url("https://presencefloatcenter.com/wp-content/uploads/2016/07/the-flower-of-life-1_logo.png")`,
            backgroundSize: "contain",
            backgroundColor: this.state.color,
            height: "700px",
            width: "100px",
            margin: "auto",
            textAlign: "center"
        }
        return (
            <div>
                <p style={{textAlign: "center"}} onClick={this.handleClick}>CLICK ME</p>
                <div style={styles} onClick={this.handleClick}></div>
            </div>
        )
    }
}

export default App
import React from "react"

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/345v97.jpg",
            memeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    memeImgs: response.data.memes
                })
            })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const randomIndex = Math.floor(Math.random() * this.state.memeImgs.length)
        this.setState({
            randomImg: this.state.memeImgs[randomIndex].url
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="memeBox">
                    <input 
                        type="text" 
                        placeholder="top text" 
                        name="topText" 
                        value={this.state.topText} 
                        onChange={this.handleChange} 
                    />
                    <input type="text" 
                        placeholder="bottom text" 
                        name="bottomText" 
                        value={this.state.bottomText} 
                        onChange={this.handleChange} 
                    />
                    <button>Generate!</button>
                </form>
                <div className="meme">
                    <h2 className="topText">{this.state.topText}</h2>
                    <img src={this.state.randomImg} alt=""/>
                    <h2 className="bottomText">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator
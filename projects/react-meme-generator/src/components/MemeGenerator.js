import React from "react"

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    

    componentWillMount(){
        
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default MemeGenerator
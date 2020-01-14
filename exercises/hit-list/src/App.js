import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            character: {}
        }
    }

    componentDidMount(){
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    character: data
                })
            })
    }

    render(){
        // const name = this.state.character.name.map(personName => {
        //     return personName
        // })
        console.log(this.state.character.name)
        return(
            <div>
                <h1>{this.state.character.name}</h1>
            </div>
        )
    }
}

export default App
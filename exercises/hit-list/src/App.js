import React from "react"
import Person from "./Person"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            character: []
        }
    }

    componentDidMount(){
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data
                })
            })
    }

    render(){
        const hit = this.state.character.map((person,i) => <Person key={i + person.name} name={person.name} image={person.image} />)
        return(
            <div>
                <nav className="titleBox">
                    <img className="donImage" src="https://i.pinimg.com/originals/b5/f3/df/b5f3dfc780d9ebd09b58c8dbf3c4c623.jpg"/>
                    <h1 className="title">Don Corleone's Hit List</h1>
                </nav>
                <div className="hitBox">
                    {hit}
                </div>
            </div>
        )
    }
}

export default App
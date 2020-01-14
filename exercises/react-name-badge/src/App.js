import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            about: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        event.preventDefault()
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render(){
        return (
            <form className="formContainer" onSubmit={this.handleClick}>
                <div className="form">
                    <input 
                        value={this.state.firstName} 
                        name="firstName" 
                        type="text" 
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <input 
                        value={this.state.lastName} 
                        name="lastName" 
                        type="text" 
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <input 
                        value={this.state.email} 
                        name="email" 
                        type="text" 
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <input 
                        value={this.state.birthPlace} 
                        name="birthPlace" 
                        type="text" 
                        placeholder="Place of Birth"
                        onChange={this.handleChange}
                    />
                    <input 
                        value={this.state.phone} 
                        name="phone" 
                        type="tel" 
                        placeholder="Phone"
                        onChange={this.handleChange}
                    />
                    <input 
                        value={this.state.favFood} 
                        name="favFood" 
                        type="text" 
                        placeholder="Favorite Food"
                        onChange={this.handleChange}
                    />
                    <textarea 
                        className="textArea"
                        value={this.state.about} 
                        name="about" 
                        type="text" 
                        placeholder="Tell us about yourself"
                        onChange={this.handleChange}
                    >
                    </textarea>
                </div>
                <br/>
                <button className="button">Submit</button>
            </form>

        )
    }
}

export default App
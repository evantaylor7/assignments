import React from "react"
import Badge from "./Badge"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            inputs: {
                firstName: "",
                lastName: "",
                email: "",
                birthPlace: "",
                phone: "",
                favFood: "",
                about: "",
            },
            badges: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    
    handleSubmit(event){
        event.preventDefault()
        // this.state.inputs.map(input => {
            // if(input.length < 3){
            //     return alert("You must fill in all of the inputs.")
            // } else {
                this.setState(prevState => {
                    return {
                        badges: [...prevState.badges, prevState.inputs]
                    }
                })
            // }
        // })
    }

    render(){
        const mappedBadges = this.state.badges.map((badge, i) => {
            return (
                <Badge 
                    firstName={badge.firstName} 
                    lastName={badge.lastName}
                    email={badge.email}
                    birthPlace={badge.birthPlace}
                    phone={badge.phone}
                    favFood={badge.favFood}
                    about={badge.about}
                    key={i}
                    id={i}
                />
            )
        })
        return(
            <div>
                <form className="formContainer" onSubmit={this.handleSubmit}>
                    <div className="form">
                        <input
                            required
                            value={this.state.inputs.firstName}
                            name="firstName" 
                            type="text" 
                            placeholder="First Name"
                            onChange={this.handleChange}
                        />
                        <input
                            value={this.state.inputs.lastName} 
                            required
                            name="lastName" 
                            type="text" 
                            placeholder="Last Name"
                            onChange={this.handleChange}
                        />
                        <input
                            value={this.state.inputs.email} 
                            required
                            name="email" 
                            type="text" 
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                        <input
                            value={this.state.inputs.birthPlace} 
                            required
                            name="birthPlace" 
                            type="text"
                            placeholder="Place of Birth"
                            onChange={this.handleChange}
                        />
                        <input
                            value={this.state.inputs.phone} 
                            required
                            name="phone" 
                            type="number"
                            placeholder="Phone"
                            onChange={this.handleChange}
                        />
                        <input
                            value={this.state.inputs.favFood} 
                            required
                            name="favFood" 
                            type="text" 
                            placeholder="Favorite Food"
                            onChange={this.handleChange}
                        />
                        <textarea
                            className="textarea"
                            value={this.state.inputs.about} 
                            required
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
                {mappedBadges}
            </div>
        )
    }
}

export default App
import React, {useState} from "react"

function AddBounty(props){
    const initInputs = {firstName: "", lastName: "", living: "", bountyAmount: "", type: ""}
    const [inputs, setInputs] = useState(initInputs)
    const {postBounty} = props

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        postBounty(inputs)
    }

    return(
        <form onSubmit={handleSubmit} className="input-form">
            <input 
                name="firstName" 
                value={inputs.firstName} 
                placeholder="First Name" 
                onChange={handleChange} 
                type="text" 
            />
            <input 
                name="lastName" 
                value={inputs.lastName} 
                placeholder="Last Name" 
                onChange={handleChange} 
                type="text" 
            />
            <select name="living" onChange={handleChange}>
                <option>Living status:</option>
                <option value={true}>Alive</option>
                <option value={false}>Dead</option>
            </select>
            <label>$
                <input 
                    name="bountyAmount" 
                    value={inputs.bountyAmount} 
                    placeholder="Bounty $$$" 
                    onChange={handleChange} 
                    type="number" 
                />
            </label>
            <input 
                name="type" 
                value={inputs.type} 
                placeholder="Jedi? Sith? Neutral?" 
                onChange={handleChange} 
                type="text" 
            />
            <button>Add Bounty</button>
        </form>
    )
}

export default AddBounty
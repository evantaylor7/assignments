import React, {useState} from "react"

function AddBounty(props){
    const {
        submit,
        firstName,
        lastName,
        imgURL,
        bountyAmount,
        type,
        living,
        btnText,
        style,
        toggle
    } = props
    const initInputs = {
        firstName: firstName || "",
        lastName: lastName || "",
        imgURL: imgURL || "",
        living: living || true,
        bountyAmount: bountyAmount || "",
        type: type || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        submit(inputs, props._id)
        setInputs(initInputs)
        props._id && toggle()
    }

    return(
        <form 
            onSubmit={handleSubmit} 
            className="input-form"
            style={style}
        >
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
            <input 
                name="imgURL" 
                value={inputs.imgURL} 
                placeholder="Image URL" 
                onChange={handleChange} 
                type="text"
            />
            <select name="living" onChange={handleChange} value={living}>
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
            <button>{btnText}</button>
        </form>
    )
}

export default AddBounty
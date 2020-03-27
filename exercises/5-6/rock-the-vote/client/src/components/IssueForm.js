import React, {useState} from 'react'

function IssueForm(props){
    const {addOrEdit, buttonText, title, description, issueId, onClick} = props
    const initInputs = {
        title: title || '',
        description: description || ''
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addOrEdit(issueId, inputs)
        setInputs(initInputs)
    }

    const {title: titleInput, description: descriptionInput} = inputs

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Title' 
                    name='title' 
                    value={titleInput} 
                    onChange={handleChange} 
                />
                <input 
                    type='text' 
                    placeholder='Description' 
                    name='description' 
                    value={descriptionInput} 
                    onChange={handleChange} 
                />
                <button onClick={onClick}>{buttonText}</button>
            </form>
        </div>
    )
}

export default IssueForm
import React, {useState} from 'react'

const initInputs = {
    title: '',
    description: ''
}

function IssueForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const {addIssue} = props

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
    }

    const {title, description} = inputs

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Title' 
                    name='title' 
                    value={title} 
                    onChange={handleChange} 
                />
                <input 
                    type='text' 
                    placeholder='Description' 
                    name='description' 
                    value={description} 
                    onChange={handleChange} 
                />
                <button>Post Issue</button>
            </form>
        </div>
    )
}

export default IssueForm
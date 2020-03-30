import React, {useState} from 'react'

function CommentForm(props){
    const {addComment, issueId} = props

    const [comment, setComment] = useState('')

    function handleChange(e){
        const {value} = e.target
        setComment(value)
    }

    function handleSubmit(e){
        e.preventDefault()
        addComment(issueId, comment)
        setComment('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' value={comment}/>
                <button>Comment</button>
            </form>
        </div>
    )
}

export default CommentForm
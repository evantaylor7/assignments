import React, {useState} from 'react'

function CommentForm(props){
    const {addComment, _id} = props
    const [comment, setComment] = useState('')

    function handleChange(e){
        setComment(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        addComment(comment, _id)
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
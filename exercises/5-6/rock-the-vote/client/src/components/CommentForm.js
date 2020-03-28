import React, {useState} from 'react'

function CommentForm(props){
    const {addComment, issueId, user} = props

    // const initComment = {
    //     text: '',
    //     user: ''
    // }

    // const [comment, setComment] = useState(initComment)

    // function handleChange(e){
    //     const {value} = e.target
    //     setComment(prevComment => ({
    //         ...prevComment,
    //         text: value,
    //         user: user
    //     }))
    // }

    const [comment, setComment] = useState('')

    function handleChange(e){
        const {value} = e.target
        setComment(prevComment => ({
            ...prevComment,
            comment: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addComment(issueId, comment)
        // setComment(initComment)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' value={comment.text}/>
                <button>Comment</button>
            </form>
        </div>
    )
}

export default CommentForm
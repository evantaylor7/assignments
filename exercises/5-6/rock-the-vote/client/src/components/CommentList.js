import React, {useContext} from 'react'
import Comment from './Comment.js'
import {UserContext} from '../context/UserProvider.js'

function CommentList(){
    const {comments} = useContext(UserContext)

    return(
        <div>
            {comments.map(comment => 
                <Comment 
                    {...comment} 
                    commentId={comment._id}
                    user={comment.postedBy}
                />
            )}
        </div>
    )
}

export default CommentList
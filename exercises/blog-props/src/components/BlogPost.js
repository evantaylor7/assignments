import React from "react"

function BlogPost(props){
    return(
        <div>
            <div className="blogTitles">
                <h1 className="blogTitle">{props.title}</h1>
                <p className="blogSub">{props.subTitle}</p>
            </div>
            <p className="authorDate">Posted by <a className="authors" href="#">{props.author}</a> on {props.date}</p>
            <hr/>
        </div>
    )
}

export default BlogPost
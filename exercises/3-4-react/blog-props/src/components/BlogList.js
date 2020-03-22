import React from "react"
import BlogPost from "./BlogPost"
import blogData from "./blogData"

function BlogList(){
    const blogList = blogData.map(blog => <BlogPost title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date}/>)
    return(
        <div className="blogs">
            {blogList}
        </div>
    )
}

export default BlogList
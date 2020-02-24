// import React, {useState} from "react"
// import {Document, Page} from "react-pdf"

import React from "react"
import {Document} from "react-pdf"
import resume from "./resume.pdf"

import screenshot from "./bookmark-screenshot.png"

function Page3(){
    // const [numPages, setNumPages] = useState(null)
    // // const [pageNumber, setPageNumber] = useState(1)

    // function onDocumentLoadSuccess(numPages){
    //     setNumPages(numPages)
    // }

    return(
        <div className="page3" id="page3">
            <h1>Resume</h1>
            {/* <Document file={{data: "./resume.pdf"}} */}
            {/* // onLoadSuccess={onDocumentLoadSuccess} */}
            {/* > */}
                {/* <Page pageNumber={1}/> */}
            {/* </Document> */}
            {/* This is page 3 */}
            <img src={resume} style={{width: "400px"}}/>
            <br/>
            <h1>Projects</h1>
            <h2>BookMark</h2>
            <p className="bm-description">This project involved using the Google Books API in React to build a book database in which a user could search for books and save them in separate lists. It was a good practice of React concepts including router, context, and hooks, as well as and handling API calls and responses.</p>
            <img className="bm-screenshot" src={screenshot}/><br/>
            <a 
                href="https://github.com/evantaylor7/assignments/tree/master/projects/personal-react-site" 
                target='_blank'
                className="bm-link"
            >
                BookMark on GitHub
            </a>
            <br/>
            <a href="http://bookmark-books.surge.sh/" target='_blank' className="bm-link">BookMark Live App</a>
        </div>
    )
}

export default Page3
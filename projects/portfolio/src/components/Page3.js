import React from "react"
import DevIcon from 'devicon-react-svg'
import screenshot from "./bookmark-screenshot.png"
import resumePDF from "./resume.pdf"

function Page3(){
    return(
        <div className="page3" id="page3">
            <h1 className="projects">Projects:</h1>
            <div className="bookmark">
                <div>
                    <h2 className="bm-title">BookMark</h2>
                    <p className="bm-description">This project involved using the Google Books API in React to build a book database in which a user could search for books and save them in separate lists. It was a good practice of React concepts including router, context, and hooks, as well as and handling API calls and responses.</p>
                    <br/>
                    <a 
                        href="https://github.com/evantaylor7/assignments/tree/master/projects/personal-react-site" 
                        target='_blank'
                    >
                        <DevIcon 
                            className='mini-github-icon' 
                            icon='github_alt' 
                        />
                    </a>
                    <a 
                        href="https://github.com/evantaylor7/assignments/tree/master/projects/personal-react-site" 
                        target='_blank'
                        className="bm-link"
                    >
                        View BookMark on GitHub
                    </a>
                    <br/><br/>
                    <div>
                        <a href="http://bookmark-books.surge.sh/" target='_blank' className="bm-link"> View BookMark Live App</a>
                    </div>
                </div>
                <div>
                    <img className="bm-screenshot" src={screenshot}/><br/>
                </div>
            </div>
            <hr/>
            <div className="resume-container">
                <a className="resume" href={resumePDF} target='_blank'><b>View my Resume</b></a>
            </div>
            <hr/>
        </div>
    )
}

export default Page3
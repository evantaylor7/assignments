import React from "react"
import DevIcon from 'devicon-react-svg'
import {Link} from 'react-scroll'

function Page2(){
    return(
        <div className="page2">
            <div className="skills">
                <h1 className="p2-title">Skills:</h1>
                <div className="skill">
                    <DevIcon className="icon" icon="javascript"/>
                    <p className="skill-text">JavaScript</p>
                </div>
                <div className="skill">
                    <DevIcon className="icon" icon="html5"/>
                    <p className="skill-text">HTML</p>
                </div>
                <div className="skill">
                    <DevIcon className="icon" icon="css3"/>
                    <p className="skill-text">CSS</p>
                </div>
                <div className="skill">
                    <DevIcon className="icon" icon="react"/>
                    <p className="skill-text">ReactJS</p>
                </div>
                <p className="skill2">AJAX/HTTP</p>
                <div className="skill">
                    <DevIcon className="icon" icon="nodejs"/>
                    <p className="skill-text">NodeJS</p>
                </div>
                <p className="skill2">Mongoose</p>
                <div className="skill">
                    <DevIcon className="icon" icon="mongodb"/>
                    <p className="skill-text">MongoDB</p>
                </div>
                <p className="skill2">Express</p>
                <div className="skill">
                    <DevIcon className="icon" icon="git"/>
                    <p className="skill-text">Git/GitHub</p>
                </div>
            </div>
            <div className="next-page2">
                <div className="next-page-inner2">
                    <Link to="page3" smooth={true}>
                        <h1 className="arrow">&#8659;</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page2
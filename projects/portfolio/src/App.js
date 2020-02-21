import React from "react"
import Nav from "./components/Nav"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"
import {Link} from 'react-scroll'

function App() {
    return (
        <div>
            <div className="page1">
                <Nav />
                <div className="title-container">
                    <h1 className="title">Hi I'm Evan, a full stack JavaScript web developer.</h1>
                </div>
                <div className="next-page">
                    <div className="next-page-inner">
                        <Link to="page2" smooth={true}>
                            <h1>More about me</h1>
                            <h1 className="arrow">&#8659;</h1>
                        </Link>
                    </div>
                </div>
            </div>
            <Page2 />
            <Page3 />
        </div>
    )
}

export default App
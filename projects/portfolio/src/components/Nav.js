import React from "react"
import DevIcon from "devicon-react-svg"
import {SocialMediaIconsReact} from "social-media-icons-react"
// import Icon from 'react-native-ico-social-media';
// import Icon from 'react-native-ico'

function Nav(){
    return(
        <div className="nav">
            <a 
                href="https://github.com/evantaylor7" 
                target="_blank"
                title="github repo"
            >
                <DevIcon 
                    className="icon" 
                    icon="github_badge" 
                />
            </a>
            <div className="linkedin">
                <SocialMediaIconsReact 
                    url="https://www.linkedin.com/in/evan-taylor-/"
                    icon="linkedin"
                    iconSize="5"
                    size="69px"
                    backgroundColor="#39CCCC"
                    iconColor="rgb(70, 70, 70)"
                    className="linkedd"
                />
            </div>
            <div className="mail-icon">
                <SocialMediaIconsReact 
                    class="m"
                    url="mailto:evantaylor667@gmail.com"
                    icon="mail"
                    iconSize="5"
                    size="69px"
                    backgroundColor="#39CCCC"
                    iconColor="rgb(70, 70, 70)"
                    title="not Mail"
                    className="linkedd"
                />
            </div>
        </div>
    )
}

export default Nav
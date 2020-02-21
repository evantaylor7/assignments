import React, {useState} from 'react'
import DevIcon from 'devicon-react-svg'
import {SocialMediaIconsReact} from 'social-media-icons-react'

function Nav(){
    const [linkedHover, setLinkedHover] = useState(false)
    const [mailHover, setMailHover] = useState(false)

    function handleLinkedEnter(){
        setLinkedHover(true)
    }
    
    function handleLinkedLeave(){
        setLinkedHover(false)
    }

    function handleMailEnter(){
        setMailHover(true)
    }
    
    function handleMailLeave(){
        setMailHover(false)
    }

    return(
        <div className='nav'>
            <div 
                className='linkedin-icon'
                onMouseEnter={handleLinkedEnter}
                onMouseLeave={handleLinkedLeave}
            >
                <SocialMediaIconsReact 
                    url='https://www.linkedin.com/in/evan-taylor-/'
                    icon='linkedin'
                    iconSize='5'
                    size='69px'
                    backgroundColor={linkedHover ? 'rgb(224, 224, 224)' : '#3D9970'}
                    iconColor='rgb(15, 45, 53)'
                />
            </div>
            <a 
                href='https://github.com/evantaylor7' 
                target='_blank'
                title='github repo'
            >
                <DevIcon 
                    className='github-icon' 
                    icon='github_badge' 
                />
            </a>
            <div 
                className='mail-icon'
                onMouseEnter={handleMailEnter}
                onMouseLeave={handleMailLeave}
            >
                <SocialMediaIconsReact 
                    url='mailto:evantaylor667@gmail.com'
                    icon='mail'
                    iconSize='5'
                    size='69px'
                    backgroundColor={mailHover ? 'rgb(224, 224, 224)' : '#3D9970'}
                    iconColor='rgb(15, 45, 53)'
                    
                />
            </div>
        </div>
    )
}

export default Nav
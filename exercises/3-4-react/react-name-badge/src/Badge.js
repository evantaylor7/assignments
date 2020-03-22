import React from "react"

function Badge(props){
    let style
    console.log(props.id)
    switch(props.id % 2){
        case 0:
            style = "lightcyan"
            break
        case 1:
            style = "rgb(214, 162, 119)"
            break
        default:
            style = "green"
            break
    }

    return(
        <div className="badge" style={{backgroundColor: style}}>
            <div className="badgeTitleBox">
                <p className="badgeTitle">Badge: </p>
            </div>
            <p>Name: {props.firstName} {props.lastName}</p>
            <p>Phone: {props.phone}</p>
            <p>Place of Birth: {props.birthPlace}</p>
            <p>Favorite food: {props.favFood}</p>
            <p>Email: {props.email}</p>
            <p className="textareaBadge"> {props.about}</p>
        </div>
    )
}

export default Badge
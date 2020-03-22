import React from "react"

function Person(props){
    const styles = {
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return(
        <div style={styles} className="img">
            <div className="nameBox">
                <p className="name">{props.name}</p>
            </div>
        </div>
    )
}

export default Person
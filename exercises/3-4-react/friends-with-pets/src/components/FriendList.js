import React from "react"
import Friend from "./Friend"
import friendData from "./friendData"

function FriendList(){
    const friendComponents = friendData.map(friend => <Friend name={friend.name} age={friend.age} pets={friend.pets} />)
    return (
        <div className="page">
            {friendComponents}
        </div>
    )
}

export default FriendList
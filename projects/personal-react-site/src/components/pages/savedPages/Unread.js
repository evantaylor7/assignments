import React, {useContext} from "react"

import {APIContext} from "../../../APIContext"

function Unread(){
    const {unread} = useContext(APIContext)

    return(
        <div className="content">
            Unread Page
        </div>
    )
}